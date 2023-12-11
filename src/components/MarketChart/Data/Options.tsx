import { ChartOptions, Scale } from 'chart.js'

export const Options: ChartOptions<'line'> = {
  maintainAspectRatio: false,
  layout: {
    padding: { 
      top: 32
    }
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 6, 
        autoSkip: true,
        align: 'inner',
        color: '#fff',
        padding: 10,
        callback: function(val, index, ticks) {
          const isSmallScreen = window.innerWidth <= 500;
        
          if (isSmallScreen) {
            const midLeftIndex = Math.floor((ticks.length - 1) / 2)
            const midRightIndex = Math.floor((ticks.length - 1) / 2) + 1
        
            if (index === 0 || index === midLeftIndex || index === midRightIndex || index === ticks.length - 1) {
              return this.getLabelForValue(val as number);
            }
            return '';
          } else {
            return this.getLabelForValue(val as number);
          }
        }
        
               
      },
      afterBuildTicks: (scale: Scale) => {
        let ticks = scale.ticks;

        if (ticks.length > 6) {
          const interval = Math.floor(ticks.length / 5);
          
          const selectedTicks = [
            ticks[0],
            ...Array.from({ length: 4 }, (_, i) => ticks[(i + 1) * interval]),
            ticks[ticks.length - 1]
          ];

          scale.ticks = selectedTicks;
        }
      }
    },
    y: {
      position: 'right',
      grid: {
        color: 'rgba(255, 255, 255, 0.05)',
      },
      ticks: {
        maxTicksLimit: 5, 
        mirror: true,
        align: 'center',
        color: '#fff',
        padding: 0
      }
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  }
};
