
// export const Options = {
//   maintainAspectRatio: false,
//   layout: {
//     padding: { 
//       top: 32
//     }
//   },
//   scales: {
//     x: {
//       grid: {
//         display: false,
//       },
//       ticks: {
//         maxTicksLimit: 6, 
//         autoSkip: true,
//         align: 'inner',
//         color: '#fff',
//         padding: 10
//       },
//       afterBuildTicks: function(scale:any) {
//         let ticks = scale.ticks

//         if (ticks.length > 6) {
//           const interval = Math.floor(ticks.length / 5)
          
//           const selectedTicks = [
//             ticks[0],
//             ...Array.from({ length: 4 }, (_, i) => ticks[(i + 1) * interval]),
//             ticks[ticks.length - 1]
//           ]

//           scale.ticks = selectedTicks
//         }
//       }
//     },
//     y: {
//       position: 'right',
//       border: {
//         display: false
//       },
//       grid: {
//         color: 'rgba(255, 255, 255, 0.05)',
//       },
//       ticks: {
//         maxTicksLimit: 5, 
//         mirror: true,
//         align: 'center',
//         color: '#fff',
//         padding: 0
//       }
//     },
//   },
//   plugins: {
//     legend: {
//       display: false,
//     },
//   }
// }



import { ChartOptions, Scale } from 'chart.js';

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
        padding: 10
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
