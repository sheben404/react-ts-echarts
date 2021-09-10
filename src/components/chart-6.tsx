import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import px from '../shared/px';
import baseEchartsOptions from '../shared/base-echarts-options';
import createEchartsOptions from '../shared/create-echarts-options';
import {EChartsType} from 'echarts';

export const Chart6 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  let myChart: EChartsType;
  const data = [
    [0, 3, 0],
    [3, 0, 0],
    [0, 0, 1]
  ];
  const updateData = (data: any) => {
    myChart?.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {
        data: ['a', 'b'],
        icon: 'circle',
        itemHeight: px(10),
        itemWidth: px(10),
        top: px(10),
        left: px(10),
        textStyle: {
          color: '#fff',
          fontSize: px(12)
        }
      },
      angleAxis: {
        max: 6,
        axisLine: {show: false},
        startAngle: 90,
        axisTick: false,
        axisLabel: false,
        splitLine: {
          show: false
        },
      },
      radiusAxis: {
        type: 'category',
        data: ['a', 'b', '底色'],
        z: 100,
        axisLine: {show: false},
        axisLabel: false,
        axisTick: false,
        min: -2
      },
      polar: {
        center: ['50%', '55%'],
        radius: '70%',

      },
      series: [{
        type: 'bar',
        data: data.map((item: any) => item[0]),
        coordinateSystem: 'polar',
        name: 'a',
        roundCap: true,
        stack: 'a',
        itemStyle: {
          color: '#fcfaf2',
        },
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: data.map((item: any) => item[1]),
        coordinateSystem: 'polar',
        name: 'b',
        roundCap: true,
        stack: 'a',
        itemStyle: {
          color: '#5dac81',
        },
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: data.map((item: any) => item[2]),
        coordinateSystem: 'polar',
        name: '底色',
        roundCap: true,
        stack: 'a',
        itemStyle: {
          color: '#5dac81',
        },
        showBackground: true,
        emphasis: {
          focus: 'series'
        }
      }],
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
        [0, 3 * Math.random() * 2, 0],
        [2 * Math.random() * 3, 0, 0],
        [0, 0, 2 * Math.random() * 4]
      ]
      updateData(newData);
    }, 1000);
  }, []);

  return (
    <div className="bordered chart6">
      <h2>统计图六</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
