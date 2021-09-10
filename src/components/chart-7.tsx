import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import * as $ from 'jquery';
import px from '../shared/px';

export const Chart7 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    (async function () {
      let myChart: any;
      if (divRef.current) {
        myChart = echarts.init(divRef.current);
      }
      const updateFrequency = 2000;

      // 配置显示数据中的哪一项
      // 在现在的数据中 0 是人均收入、1 是平均寿命 2 是总人口
      const dimension = 0;
      // const dimension = 1;

      // 给国家自定义颜色
      const countryColors = {
        'Australia': '#00008b',
        'Canada': '#f00',
        'China': '#ffde00',
        'Cuba': '#002a8f',
        'Finland': '#003580',
        'France': '#ed2939',
        'Germany': '#000',
        'Iceland': '#003897',
        'India': '#f93',
        'Japan': '#bc002d',
        'North Korea': '#024fa2',
        'South Korea': '#000',
        'New Zealand': '#00247d',
        'Norway': '#ef2b2d',
        'Poland': '#dc143c',
        'Russia': '#d52b1e',
        'Turkey': '#e30a17',
        'United Kingdom': '#00247d',
        'United States': '#b22234'
      };

      const res = await $.getJSON('https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/life-expectancy-table.json');
      const data: any = res;
      const years: any = [];
      for (let i = 0; i < data.length; ++i) {
        if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
          years.push(data[i][4]);
        }
      }

      const startIndex = 10;
      const startYear = years[startIndex];

      const option = {
        grid: {
          top: 10,
          bottom: 30,
          left: 100,
          right: 80
        },
        xAxis: {
          max: 'dataMax',
          axisTick: {show: false},
          label: {
            formatter: function (n: number) {
              return Math.round(n);
            }
          },
          axisLabel: {
            fontSize: px(12)
          }
        },
        dataset: {
          source: data.slice(1).filter(function (d: any) {
            return d[4] === startYear;
          })
        },
        yAxis: {
          type: 'category',
          axisTick: {show: false},
          inverse: true,
          max: 15,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: px(20)
            },
            formatter: function (value: any) {
              return value;
            },
            rich: {
              flag: {
                fontSize: px(25),
                padding: 5
              }
            }
          },
          animationDuration: 300,
          animationDurationUpdate: 300
        },
        series: [{
          realtimeSort: true,
          seriesLayoutBy: 'column',
          type: 'bar',
          itemStyle: {
            // 查找有无目标国家的颜色，没有就使用默认的 #5470c6
            color: function (param: any) {
              return (countryColors as any)[param.value[3]] || '#5470c6';
            }
          },
          encode: {
            x: dimension,
            y: 3
          },
          label: {
            show: true,
            precision: 1,
            position: 'right',
            valueAnimation: true,
            color: 'white'
          }
        }],
        // Disable init animation.
        animationDuration: 0,
        animationDurationUpdate: updateFrequency,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        graphic: {
          elements: [{
            type: 'text',
            right: 160,
            bottom: 60,
            style: {
              text: startYear,
              font: 'bolder  monospace',
              fontSize: px(80),
              fill: 'rgba(100, 100, 100, 0.25)'
            },
            z: 100
          }]
        }
      };

      myChart.setOption(option);

      for (let i = startIndex; i < years.length - 1; ++i) {
        setTimeout(function () {
          updateYear(years[i + 1]);
        }, (i - startIndex) * updateFrequency);
      }

      function updateYear(year: string) {
        const source = data.slice(1).filter(function (d: any) {
          return d[4] === year;
        });
        (option as any).series[0].data = source;
        option.graphic.elements[0].style.text = year;
        myChart.setOption(option);
      }
    }());
  }, []);
  return (
    <div className="bordered chart7">
      <h2>统计图七</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
