<template>

	<div>
		<div style='background-color:#101010;'>
			<HQChartControl ref="HQChartCtrl" :DefaultChart="{Type:'KLine'}" :DefaultSymbol="Symbol"> </HQChartControl>
		</div>

		<!--   控制图1 !-->
		<div class="button-sp-area">
			<button class="mini-btn" type="default" size="mini" @click="ChangeMinutePeriod(1)">分时</button>
			<button class="mini-btn" type="default" size="mini" @click="ChangeMinutePeriod(5)">5D</button>
			<button class="mini-btn" type="default" size="mini" @click="ChangeKLinePeriod(0)">D</button>
			<button class="mini-btn" type="default" size="mini" @click="ChangeKLinePeriod(1)">W</button>
			<button class="mini-btn" type="default" size="mini" @click="ChangeKLinePeriod(4)">1M</button>
			<button class="mini-btn" type="default" size="mini" @click="ChangeKLinePeriod(5)">15M</button>
		</div>


	</div>

</template>

<script>

import HQChartControl from '@/uni_modules/jones-hqchart2/js_sdk/HQChartControl.vue'

//测试数据
import HQData from "@/uni_modules/jones-hqchart2/js_sdk/umychart.NetworkFilterTest.vue.js"

export default
	{
		components: { HQChartControl },

		data() {
			let data =
			{
				Symbol: '600000.sh',
				ChartWidth: 350,
				ChartHeight: 500,
			};

			return data;
		},

		onShow() {
			uni.getSystemInfo({
				success: (res) => {
					var width = res.windowWidth;
					var height = res.windowHeight;
					this.ChartWidth = width;
					this.ChartHeight = height - 130;
					this.$nextTick(() => {
						this.CreateHQChart();
					})
				}
			});
		},

		onHide() {
			this.ClearHQChart();
		},

		onUnload() {
			this.ClearHQChart();
		},

		methods:
		{
			CreateHQChart() {
				var chartHeight = this.ChartHeight;
				let hqchartCtrl = this.$refs.HQChartCtrl;
				//修改option
				//hqchartCtrl.KLine.Option.
				hqchartCtrl.NetworkFilter = this.NetworkFilter;
				//hqchartCtrl.KLine.Option.IsClickShowCorssCursor=false;
				//hqchartCtrl.Minute.Option.IsClickShowCorssCursor=false;
				hqchartCtrl.Minute.Option.EnableScrollUpDown = true;

				/*
				if(!hqchartCtrl.Minute.Option.CorssCursorInfo) hqchartCtrl.Minute.Option.CorssCursorInfo={ };
				hqchartCtrl.Minute.Option.CorssCursorInfo.HPenType=1;
				hqchartCtrl.Minute.Option.CorssCursorInfo.VPenType=1;
				
				if(!hqchartCtrl.KLine.Option.CorssCursorInfo) hqchartCtrl.KLine.Option.CorssCursorInfo={ };
				hqchartCtrl.KLine.Option.CorssCursorInfo.HPenType=1;
				hqchartCtrl.KLine.Option.CorssCursorInfo.VPenType=1;
				*/

				hqchartCtrl.KLine.Option.Windows =
					[
						{ Index: "MA", Modify: false, Change: false },
						{ Index: "VOL", IsDrawTitleBG: true, IsShowNameArrow: true }
						//{ Name: 'MA_NEW', Script:' MA(C,10),DOTLINE,LINEDASH(20,10);'}, //自定义一个MA的指标 计算5日均线
						/*{
							API: 
							{
								ID:"虚线_测试",
								Name:'虚线_测试',
								Script:null,
								Args:null, 
								Url:'http://local' 
							} 
						  
						},
						*/
					];

				hqchartCtrl.KLine.Option.OnCreatedCallback = (chart) => { this.OnCreateKLine(chart); }
				hqchartCtrl.Minute.Option.OnCreatedCallback = (chart) => { this.OnCreateMinute(chart); }

				hqchartCtrl.SetSize(this.ChartWidth, chartHeight);
				hqchartCtrl.OnSize();

				this.$nextTick(() => {
					hqchartCtrl.KLine.Option.KLine.Period = 4;
					hqchartCtrl.CreateHQChart();
				});
			},

			OnCreateKLine(chart) {

			},

			OnCreateMinute(chart) {

			},

			ClearHQChart() {
				let hqchartCtrl = this.$refs.HQChartCtrl;
				if (hqchartCtrl) hqchartCtrl.ClearChart();
			},

			ChangeMinutePeriod(days) {
				let hqchartCtrl = this.$refs.HQChartCtrl;

				hqchartCtrl.ChangeMinutePeriod(days);
			},

			ChangeKLinePeriod(period) {
				let hqchartCtrl = this.$refs.HQChartCtrl;

				hqchartCtrl.ChangeKLinePeriod(period);
			},

			NetworkFilter(data, callback) {
				console.log(`[App:NetworkFilter] Name=${data.Name} Explain=${data.Explain}`);

				switch (data.Name) {
					case "APIScriptIndex::ExecuteScript":
						return this.GetExecuteScript(data, callback);
					default:
						HQData.HQData.NetworkFilter(data, callback);
						break;
				}
			},

			GetExecuteScript(data, callback) {
				var request = data.Request;
				if (request.Data.indexname == '虚线_测试')
					this.Index_DotLine(data, callback);
			},

			Index_DotLine(data, callback) {
				var hqchart = data.HQChart;
				var kData = hqchart.ChartPaint[0].Data;
				data.PreventDefault = true;

				var closeLine = { name: '收盘价线', type: 0, data: kData.GetClose(), isDotLine: true };

				var apiData =
				{
					code: 0,
					stock: { name: hqchart.Name, symbol: hqchart.Symbol },
					outdata: { date: kData.GetDate(), time: kData.GetTime(), outvar: [closeLine] }
				};


				console.log('[App::Index_DotLine] apiData ', apiData);

				// #ifdef H5
				callback(apiData);
				// #endif

				// #ifndef H5
				callback({ data: apiData });
				// #endif


			}
		}
	}

</script>

<style></style>
