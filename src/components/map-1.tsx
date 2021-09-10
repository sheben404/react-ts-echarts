import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import createEchartsOptions from '../shared/create-echarts-options';
import china from '../assets/china.json';

export const Map1 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const colors = {'河北省': '#BB31F7', '北京市': '#15B8FD', '广东省': '#06E1EE'};
  useEffect(() => {
    let myChart;
    if (divRef.current) myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart?.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '河北省', value: 1},
          ],
          label: {show: false, color: 'white'},
          select: {
            label: {
              color: 'white'
            }
          },
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['河北省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '北京市', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['北京市'],
            borderColor: 'yellow',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '广东省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['广东省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },

      ]
    }));
  }, []);

  return (
    <div className="bordered map1">
      <h2>地图</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="legend bordered">
          <span className="icon" style={{background: colors['河北省']}}/>河北省
          <span className="icon" style={{background: colors['北京市']}}/>北京市
          <span className="icon" style={{background: colors['广东省']}}/>广东省
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};
