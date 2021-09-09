import px from './px';

const baseEchartsOptions = {
  textStyle: {
    fontSize: px(12),
    color: '#79839E'
  },
  title: {show: false},
  legend: {show: false},
  grid: {
    x: px(20),
    y: px(20),
    x2: px(20),
    y2: px(20),
    containLabel: true
  },
}

export default  baseEchartsOptions
