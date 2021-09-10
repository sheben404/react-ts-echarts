import React from 'react';
import {useEffect, useRef} from 'react';
import createEchartsOptions from '../shared/create-echarts-options';
import * as echarts from 'echarts';
import px from '../shared/px';
import {EChartsType} from 'echarts';

export const Chart3 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  let myChart: EChartsType;
  const data = [
    {year: 2010, val1: 0.01, val2: 0.02, val3: 0.03, val4: 0.04,},
    {year: 2011, val1: 0.02, val2: 0.03, val3: 0.04, val4: 0.05,},
    {year: 2012, val1: 0.03, val2: 0.04, val3: 0.05, val4: 0.06,},
    {year: 2013, val1: 0.04, val2: 0.05, val3: 0.06, val4: 0.07,},
    {year: 2014, val1: 0.05, val2: 0.06, val3: 0.07, val4: 0.08,},
    {year: 2015, val1: 0.06, val2: 0.07, val3: 0.08, val4: 0.09,},
    {year: 2016, val1: 0.07, val2: 0.08, val3: 0.09, val4: 0.10,},
    {year: 2017, val1: 0.08, val2: 0.09, val3: 0.10, val4: 0.11,},
    {year: 2018, val1: 0.09, val2: 0.10, val3: 0.11, val4: 0.12}
  ];

  const updateData = (data: any) => {
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
        data: data.map((item: any) => item['year']),
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
          data: data.map((item: any) => item['val1']).reverse()
        },
        {
          name: '2',
          type: 'line',
          data: data.map((item: any) => item['val2']).reverse()
        },
        {
          name: '3',
          type: 'line',
          data: data.map((item: any) => item['val3']).reverse()
        },
        {
          name: '4',
          type: 'line',
          data: data.map((item: any) => item['val4']).reverse()
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      }))
    }));
  };

  useEffect(() => {
    if (divRef.current) myChart = echarts.init(divRef.current);
    updateData(data);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {year: 2010, val1: 0.01 * Math.random() * 2, val2: 0.02, val3: 0.03, val4: 0.04 * Math.random() * 2,},
        {year: 2011, val1: 0.02, val2: 0.03 * Math.random() * 2, val3: 0.04, val4: 0.05 * Math.random() * 2,},
        {year: 2012, val1: 0.03 * Math.random() * 2, val2: 0.04 * Math.random() * 2, val3: 0.05, val4: 0.06,},
        {year: 2013, val1: 0.04, val2: 0.05, val3: 0.06, val4: 0.07 * Math.random() * 2,},
        {year: 2014, val1: 0.05, val2: 0.06 * Math.random() * 2, val3: 0.07 * Math.random() * 2, val4: 0.08,},
        {year: 2015, val1: 0.06 * Math.random() * 2, val2: 0.07, val3: 0.08, val4: 0.09 * Math.random() * 2,},
        {year: 2016, val1: 0.07 * Math.random() * 2, val2: 0.08, val3: 0.09, val4: 0.10,},
        {year: 2017, val1: 0.08 * Math.random() * 2, val2: 0.09 * Math.random() * 2, val3: 0.10, val4: 0.11,},
        {year: 2018, val1: 0.09, val2: 0.10 * Math.random() * 2, val3: 0.11 * Math.random() * 2, val4: 0.12}
      ];
      updateData(newData);
    }, 1000);

  }, []);

  return (
    <div className="bordered chart3">
      <h2>统计图三</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
