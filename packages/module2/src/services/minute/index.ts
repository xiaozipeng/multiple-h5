import { post } from "@/utils/service";
// @ts-ignore
import getDomain from "~/common/env/domain";
import { toArray } from '@/utils/index'
const domainKey = 'f10';
function formatMinutesData(data: any, param: any) {
  const { close_price, high_price, low_price, ma5, open_price, pre_close, data: minutesData = [] } = data;
  let secumarket = param.secumarket;
  if (param.secumarket === 'zs' && param.secucode === '000001') {
    secumarket = 'sh';
  }
  if (param.secumarket === 'sz' && param.secucode === '399001') {
    secumarket = 'sz';
  }

  const minutes = toArray(minutesData).map((item: any) => {
    const { price, amount, time, volumn } = item;
    return {
      price,
      amount,
      time,
      open: open_price,
      low: low_price,
      high: high_price,
      vol: volumn,
    }
  });
  return {
    code: 0,
    stock: [
      {
        time: 150051,
        date: Number(param.date.replace(/-/g, '')),
        yclose: pre_close,
        symbol: `${param.secucode}.${secumarket}`,
        name: `${param.secucode}.${secumarket}`,
        minute: toArray(minutes),
      }
    ],
  }
}
export const getBaseURL = (url: string) => (process.env.NODE_ENV === 'development' ? `/api/${url}` : `${getDomain(process.env.PROJECT_ENV)??[domainKey]}/${url}`);
// 获取分时数据
export const fetchDataWithMinutes = async (url: string, params: any) => {
  return post(getBaseURL(url), params).then(res => {
    return formatMinutesData(res.data, params);
  });
};

// mock
export function fetchDataWithMarketEvent(data: any) {
  return new Promise((resolve) => {
    var recvData = {
      event: [
        {
          date: data.Request.Data.Date,
          data: [
            [931, '新能源', 'rgb(33,45,35)'],
            [938, '国产芯片'],
            {
              Date: data.Request.Data.Date,
              Time: 949,
              Title: '稀有金属',
              Color: 'rgb(255,0,0)',
              BGColor: 'rgba(255,255,55,0.5)',
              Price: 7.235,
            },
            [945, '网络切片'],
            [946, '超清视频'],
            [950, '云计算'],
            {
              Date: data.Request.Data.Date,
              Time: 1000,
              Title: '石墨烯',
              Color: 'rgb(255,255,0)',
              BGColor: 'rgba(255,0,55,0.5)',
              Price: 7.24,
            },
            [1005, '新疆振兴', 'rgb(0,255,35)', 'rgba(255,255,55,0.5)'],
            [1010, '移动支付'],
            [1310, '物联网'],
            [1315, '智能电网'],
            [1350, '锂电池'],
            [1410, '核电'],
            [1420, '冰雪产业'],
            [1435, '宁德时代概念'],
            [1440, '装配式建筑'],
            [1455, '工业互联网'],
          ],
        },
      ],
    };
    // 模拟延时500ms
    setTimeout(() => {
      resolve(recvData); // resolve 返回的数据
    }, 500);
  });
}
