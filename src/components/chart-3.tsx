import React from 'react';
import {useEffect, useRef} from 'react';
import createEchartsOptions from '../shared/create-echarts-options';
import * as echarts from 'echarts';
import px from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let myChart;
    if (divRef.current) myChart = echarts.init(divRef.current);
    myChart?.setOption(createEchartsOptions({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        padding: [1, 5],
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
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
      series: [
        {
          name: '1',
          type: 'line',
          data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.05, 0.04, 0.03, 0.02].reverse()
        },
        {
          name: '2',
          type: 'line',
          data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10].reverse()
        },
        {
          name: '3',
          type: 'line',
          data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11].reverse()
        },
        {
          name: '4',
          type: 'line',
          data: [0.12, 0.11, 0.10, 0.09, 0.08, 0.09, 0.10, 0.11, 0.12].reverse()
        },
        {
          name: '5',
          type: 'line',
          data: [0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13].reverse()
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      }))
    }));
  }, []);

  return (
    <div className="bordered chart3">
      <h2>统计图三</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
