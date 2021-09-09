import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import createEchartsOptions from '../shared/create-echarts-options';

export const Chart2 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let myChart
    if (divRef.current)
    myChart = echarts.init(divRef.current);
    myChart?.setOption(createEchartsOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {show: false},
        axisLabel: {show: false}
      },
      yAxis: {
        type: 'category',
        axisTick: {show: false},
        data: ['海淀区', '朝阳区', '东城区', '西城区', '顺义区','大兴区','密云区','石景山区', '北京市人口(万)'],
        axisLabel: {
          formatter(val: string) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(3, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        }
      },
      series: [
        {
          name: '2020年',
          type: 'bar',
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#2034f9'
              }, {
                offset: 1,
                color: '#04a1ff'
              }]),
            }
          }
        },
        {
          name: '2021年',
          type: 'bar',
          data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#b92ae8'
              }, {
                offset: 1,
                color: '#6773e7'
              }]),
            }
          }
        }
      ]
    }));
  }, []);
  return (
    <div className="bordered chart2">
      <h2>统计图二</h2>
      <div ref={divRef} className="chart"/>
      <div className="legend">
        <span className="first"/>2020年
        <span className="second"/>2021年
      </div>
    </div>
  )
};
