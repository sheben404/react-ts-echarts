import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import px from '../shared/px';
import baseEchartsOptions from '../shared/base-echarts-options';
import createEchartsOptions from '../shared/create-echarts-options';

export const Chart1 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let myChart;
    if (divRef.current) {
      myChart = echarts.init(divRef.current);
    }
    myChart?.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      xAxis: {
        data: ['东城区', '西城区', '朝阳区', '丰台区', '石景山区', '海淀区', '昌平区', '大兴区', '顺义区'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          margin: px(8),
          fontSize: px(12),
          formatter(val: any) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [{
        type: 'bar',
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }]
    }));
  }, []);
  return (
    <div className="bordered chart1">
      <h2>统计图一</h2>
      <div ref={divRef} className="chart">
      </div>
    </div>
  );
};
