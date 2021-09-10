import React from 'react';
import {useEffect, useRef} from 'react';
import createEchartsOptions from '../shared/create-echarts-options';
import * as echarts from 'echarts';
import px from '../shared/px';
import {EChartsType} from 'echarts';

export const Chart4 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  let myChart: EChartsType;
  const data = [
    [0, 0.15],
    [2, 0.13],
    [4, 0.11],
    [6, 0.14],
    [8, 0.17],
    [10, 0.21],
    [12, 0.19],
    [14, 0.23],
    [16, 0.21],
    [18, 0.15],
    [20, 0.17],
    [22, 0.13],
    [24, 0.17],
  ];

  const updateData = (data: any) => {
    myChart?.setOption(createEchartsOptions({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.map((item: any) => item[0]),
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return Number(val) * 100 + '%';
          }
        }
      },
      series: [{
        name: 'xxx',
        type: 'line',
        data: data.map((item: any) => item[1]),
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }));
  };
  useEffect(() => {
    if (divRef.current) myChart = echarts.init(divRef.current);
    updateData(data);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const newData = [
        [0, 0.15 * Math.random() * 2],
        [2, 0.13 * Math.random() * 2],
        [4, 0.11 * Math.random() * 2],
        [6, 0.14],
        [8, 0.17 * Math.random() * 2],
        [10, 0.21 * Math.random() * 2],
        [12, 0.19],
        [14, 0.23],
        [16, 0.21 * Math.random() * 2],
        [18, 0.15],
        [20, 0.17 * Math.random() * 2],
        [22, 0.13 * Math.random() * 2],
        [24, 0.17 * Math.random() * 2],
      ]
      updateData(newData)
    }, 1000);
  });

  return (
    <div className="bordered chart4">
      <h2>统计图四</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
