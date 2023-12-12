import { ChartOptions } from 'chart.js'
import { theme } from '@theme'

// For the theme variables used in the options

const RegularFont = theme.fonts.sansSerif.value
const BoldFont = theme.fonts.sansSerifBold.value

// For the options of the line chart within the hero container
// Here we customize chartjs attribute to make the chart on brand to SwissBorg

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

    // For the position and ticks on the bottom of the chart
    // These are the horizontal date values

    x: {
      ticks: {
        maxTicksLimit: 6, 
        autoSkip: true,
        align: 'inner',
        color: '#fff',
        crossAlign: 'center',
        labelOffset: 20,
        font: { family: RegularFont }
      },
      bounds: 'ticks',
      grid: { display: false }
    },

    // For the position and ticks on the right side of the chart
    // These are the vertical values

    y: {
      ticks: {
        font: { family: BoldFont, size: 14 },
        maxTicksLimit: 5, 
        mirror: true,
        align: 'center',
        color: '#fff',
        padding: -10,
        z: 1
      },
      position: 'right',
      grid: { color: 'rgba(255, 255, 255, 0.05)' }
    }
  },

  // Here we remove the default legend and the tooltip

  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  }
}
