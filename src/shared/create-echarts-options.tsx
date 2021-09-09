import baseEchartsOptions from './base-echarts-options';
import px from './px';

interface OptionsType {
  xAxis?: {
    axisLabel?: {
      fontSize?: any,
      formatter?:(val:string)=>string,
      [propName: string]:any
    },
    [propName: string]:any
  },
  yAxis?: {
    axisLabel?: {
      fontSize?: any
      formatter?:(val:string)=>string,
    },
    [propName: string]:any
  },
  [propName: string]:any
}

const createEchartsOptions = (options: OptionsType) => {
  const result = {
    ...baseEchartsOptions,
    ...options,
  };
  if (!(options?.xAxis?.axisLabel?.fontSize)) {
    result.xAxis = result.xAxis || {};
    result.xAxis.axisLabel = result.xAxis.axisLabel || {};
    result.xAxis.axisLabel.fontSize = px(12);
  }
  if (!(options?.yAxis?.axisLabel?.fontSize)) {
    result.yAxis = result.yAxis || {};
    result.yAxis.axisLabel = result.yAxis.axisLabel || {};
    result.yAxis.axisLabel.fontSize = px(12);
  }
  return result;
};

export default createEchartsOptions;
