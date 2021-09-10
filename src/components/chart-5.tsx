import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import createEchartsOptions from '../shared/create-echarts-options';
import px from '../shared/px';

export const Chart5 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let myChart;
    if (divRef.current) {
      myChart = echarts.init(divRef.current);
    }
    myChart?.setOption(
      {
        radar: {
          indicator: [
            {name: 'a', max: 100},
            {name: 'b', max: 100},
            {name: 'c', max: 100},
            {name: 'd', max: 100},
            {name: 'e', max: 100},
          ],
          center: ['50%', '55%'],
          radius: '70%',
          splitLine: {
            lineStyle: {
              color: '#91989f',
              // 分隔线颜色
              width: px(0.5),
              // 分隔线线宽
            }
          },
          splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
              color: ['#12123b', '#2a2856'],
              // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
          },
        },
        series: [{
          name: '能力',
          type: 'radar',
          data: [
            {
              value: [50, 40, 28, 26, 42, 21],
              name: '实际开销（Actual Spending）'
            }
          ],
          color: '#34b56f',
          areaStyle: {}
        }]
      }
    );
  }, []);
  return (
    <div className="bordered chart5">
      <h2>统计图五</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
