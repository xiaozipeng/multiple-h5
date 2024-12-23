<template>
  <view style='background-color:#101010;'>
    <HQChartControl ref="hqchartCtrl" :DefaultChart="{ Type: 'Minute' }" :DefaultSymbol="code" />
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { onShow, onHide } from '@dcloudio/uni-app';
import HQChartControl from '@/uni_modules/jones-hqchart2/js_sdk/HQChartControl.vue';
import { fetchDataWithMinutes, fetchDataWithMarketEvent } from '@/services/minute/index';
import { useQueryParams } from '@/utils/hooks/useQueryParams';
import { getCurrentDate } from "@/utils/dayjs";

// 使用自定义 Hook
const { code, secumarket, date } = useQueryParams(['code', 'secumarket', 'date']);
const ChartWidth = ref(350);
const ChartHeight = ref(500);
const hqchartCtrl = ref(null);
const CreateHQChart = () => {
  if (!hqchartCtrl.value) return;

  hqchartCtrl.value.NetworkFilter = NetworkFilter;
  hqchartCtrl.value.Minute.Option.IsClickShowCorssCursor = true;
  hqchartCtrl.value.Minute.Option.EnableScrollUpDown = true;
  // hqchartCtrl.value.Minute.Option.Info = ["大盘异动"];

  hqchartCtrl.value.KLine.Option.OnCreatedCallback = OnCreateKLine;
  hqchartCtrl.value.Minute.Option.OnCreatedCallback = OnCreateMinute;

  hqchartCtrl.value.SetSize(ChartWidth.value, ChartHeight.value);
  hqchartCtrl.value.OnSize();

  nextTick(() => {
    hqchartCtrl.value.CreateHQChart();
  });
};

const OnCreateKLine = (chart) => {
  console.log('OnCreateKLine');
};

const OnCreateMinute = (chart) => {
  console.log('OnCreateMinute');
};

const ClearHQChart = () => {
  if (hqchartCtrl.value) {
    hqchartCtrl.value.ClearChart();
  }
};
const RequestMarketData = (data, callback) => {
  data.PreventDefault = true;
  // api 请求
  console.log('[MinuteChart::RequestMarketEvent] data', data);
  fetchDataWithMarketEvent(data).then(data => {
    callback(data);
  });
};

const RequestMinuteData = (data, callback) => {
  data.PreventDefault = true;
  const url = 'f10/v2/hq/api/stock/binary/minute';
  const params = {
    secucode: code.value,
    secumarket: secumarket.value,
    date: date.value || getCurrentDate(),
  };

  fetchDataWithMinutes(url, params)
    .then((res) => {
      try {
        callback(res);
      } catch (error) {
        console.error('RequestMinuteData error:', error);
      }
    })
    .catch((error) => console.error('RequestMinuteData error:', error));
};

const NetworkFilter = (data, callback) => {
  console.log(`[App:NetworkFilter] Name=${data.Name} Explain=${data.Explain}`);
  if (data.Name === 'MinuteChartContainer::RequestMinuteData') {
    RequestMinuteData(data, callback);
  }
  if (data.Name === 'MarketEventInfo::RequestData') {
    RequestMarketData(data, callback);
  }
};
watch(
  [code, secumarket], // 监听的目标
  () => CreateHQChart(),
);

// 生命周期
onShow(() => {
  uni.getSystemInfo({
    success: (res) => {
      ChartWidth.value = res.windowWidth;
      ChartHeight.value = res.windowHeight;
      nextTick(() => {
        CreateHQChart();
      });
    },
  });
});

onHide(() => {
  ClearHQChart();
});

onUnmounted(() => {
  ClearHQChart();
});
</script>

<style></style>
