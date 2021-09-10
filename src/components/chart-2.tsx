import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import createEchartsOptions from '../shared/create-echarts-options';
import {EChartsType} from 'echarts';

export const Chart2 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  let myChart: EChartsType;
  const data = [
    {name: '海淀区', 2020: 1, 2021: 2},
    {name: '朝阳区', 2020: 2, 2021: 3},
    {name: '东城区', 2020: 3, 2021: 4},
    {name: '西城区', 2020: 4, 2021: 5},
    {name: '顺义区', 2020: 5, 2021: 6},
    {name: '大兴区', 2020: 6, 2021: 7},
    {name: '密云区', 2020: 7, 2021: 8},
    {name: '石景山区', 2020: 8, 2021: 9},
    {name: '北京市人口(万)', 2020: 9, 2021: 10}
  ];
  const updateData = (data: any) => {
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
        data: data.map((item: any) => item['name']),
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
          data: data.map((item: any) => item['2020']),
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
          data: data.map((item: any) => item['2021']),
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
  };
  useEffect(() => {
    if (divRef.current) {
      myChart = echarts.init(divRef.current);
    }
    updateData(data);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name: '海淀区', 2020: 1 * Math.random() * 10, 2021: 2},
        {name: '朝阳区', 2020: 2 * Math.random() * 10, 2021: 3 * Math.random() * 10},
        {name: '东城区', 2020: 3 * Math.random() * 10, 2021: 4 * Math.random() * 10},
        {name: '西城区', 2020: 4, 2021: 5 * Math.random() * 10},
        {name: '顺义区', 2020: 5 * Math.random() * 10, 2021: 6},
        {name: '大兴区', 2020: 6 * Math.random() * 10, 2021: 7 * Math.random() * 10},
        {name: '密云区', 2020: 7 * Math.random() * 10, 2021: 8 * Math.random() * 10},
        {name: '石景山区', 2020: 8 * Math.random() * 10, 2021: 9},
        {name: '北京市人口(万)', 2020: 9 * Math.random() * 10, 2021: 10}
      ];
      updateData(newData);
    }, 1000);

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
  );
};
