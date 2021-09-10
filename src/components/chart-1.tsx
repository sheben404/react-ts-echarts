import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import px from '../shared/px';
import baseEchartsOptions from '../shared/base-echarts-options';
import createEchartsOptions from '../shared/create-echarts-options';
import {EChartsType} from 'echarts';

export const Chart1 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  let myChart: EChartsType;

  const data = [
    {name: '东城区', value: 10},
    {name: '西城区', value: 20},
    {name: '朝阳区', value: 36},
    {name: '丰台区', value: 41},
    {name: '石景山区', value: 15},
    {name: '海淀区', value: 26},
    {name: '昌平区', value: 37},
    {name: '大兴区', value: 18},
    {name: '顺义区', value: 29}
  ];

  const updateData = (data: any) => {
    myChart?.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      xAxis: {
        data: data.map((item: any) => item.name),
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
        data: data.map((item: any) => item.value)
      }]
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
        {name: '东城区', value: 10 * Math.random() * 10},
        {name: '西城区', value: 20 * Math.random() * 10},
        {name: '朝阳区', value: 36},
        {name: '丰台区', value: 41 * Math.random() * 10},
        {name: '石景山区', value: 15},
        {name: '海淀区', value: 26 * Math.random() * 10},
        {name: '昌平区', value: 37 * Math.random() * 10},
        {name: '大兴区', value: 18 * Math.random() * 10},
        {name: '顺义区', value: 29}
      ];
      updateData(newData);
    }, 1000);
  }, []);

  return (
    <div className="bordered chart1">
      <h2>统计图一</h2>
      <div ref={divRef} className="chart">
      </div>
    </div>
  );
};
