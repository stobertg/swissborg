import { ChartOptions, Scale } from 'chart.js'

export const Options: ChartOptions<'line'> = {
  maintainAspectRatio: false,
  layout: {
    autoPadding: false,
    padding: {
      top: 30,
      right: 0,
      left: 0,
      bottom: 0
    }
  },
  scales: {
    x: {
      bounds: 'ticks',
      grid: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 6, 
        autoSkip: true,
        align: 'inner',
        color: '#fff',
        crossAlign: 'center',
        // padding: 10,
        labelOffset: 20,
        font: {
          family: 'TTCommons-Regular'
        },
      }
    },
    y: {
      position: 'right',
      grid: {
        color: 'rgba(255, 255, 255, 0.05)',
      },
      ticks: {
        font: {
          family: 'TTCommons-bold',
          size: 14
        },
        maxTicksLimit: 5, 
        mirror: true,
        align: 'center',
        color: '#fff',
        padding: -10,
        z: 1
      }
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false
    }
  }
};
