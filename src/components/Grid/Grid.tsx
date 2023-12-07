import React from 'react'
import { styled } from '@theme'

// For the master container of the grid component
// The is a basic building block of the site - and is width agnosictic, which is cool!

const GridWrap = styled('div', {
  display: 'grid',
  gridTemplateRows: '1fr',
  position: 'relative',
  width: '100%',
  height: '100%',

  // Here we support various columns needed, based on the context
  // I only use two for this project, but the shiz is made to scale if needed

  variants: {
    columns: {
      2: {  gridTemplateColumns: 'repeat(2, 1fr)'  },
      3: {  gridTemplateColumns: 'repeat(3, 1fr)'  },
      4: {  gridTemplateColumns: 'repeat(4, 1fr)'  },
      5: {  gridTemplateColumns: 'repeat(5, 1fr)'  },
      6: {  gridTemplateColumns: 'repeat(6, 1fr)'  },
      7: {  gridTemplateColumns: 'repeat(7, 1fr)'  },
      8: {  gridTemplateColumns: 'repeat(8, 1fr)'  },
      9: {  gridTemplateColumns: 'repeat(9, 1fr)'  },
      10: { gridTemplateColumns: 'repeat(10, 1fr)' },
      11: { gridTemplateColumns: 'repeat(11, 1fr)' },
      12: { gridTemplateColumns: 'repeat(12, 1fr)' },
      14: { gridTemplateColumns: 'repeat(14, 1fr)' },
    },

    // Here we support the customization of the columns needed for the large desktop breakpoints

    largeDesktopColumns: {
      1: {  '@largeDesktop': { gridTemplateColumns: 'repeat(1, 1fr)'  }},
      2: {  '@largeDesktop': { gridTemplateColumns: 'repeat(2, 1fr)'  }},
      3: {  '@largeDesktop': { gridTemplateColumns: 'repeat(3, 1fr)'  }},
      4: {  '@largeDesktop': { gridTemplateColumns: 'repeat(4, 1fr)'  }},
      5: {  '@largeDesktop': { gridTemplateColumns: 'repeat(5, 1fr)'  }},
      6: {  '@largeDesktop': { gridTemplateColumns: 'repeat(6, 1fr)'  }},
      7: {  '@largeDesktop': { gridTemplateColumns: 'repeat(7, 1fr)'  }},
      8: {  '@largeDesktop': { gridTemplateColumns: 'repeat(8, 1fr)'  }},
      9: {  '@largeDesktop': { gridTemplateColumns: 'repeat(9, 1fr)'  }},
      10: { '@largeDesktop': { gridTemplateColumns: 'repeat(10, 1fr)' }},
      11: { '@largeDesktop': { gridTemplateColumns: 'repeat(11, 1fr)' }},
      12: { '@largeDesktop': { gridTemplateColumns: 'repeat(12, 1fr)' }}
    },

    // Here we support the customization of the columns needed for the small desktop breakpoints

    smallDesktopColumns: {
      1: {  '@smallDesktop': { gridTemplateColumns: 'repeat(1, 1fr)'  }},
      2: {  '@smallDesktop': { gridTemplateColumns: 'repeat(2, 1fr)'  }},
      3: {  '@smallDesktop': { gridTemplateColumns: 'repeat(3, 1fr)'  }},
      4: {  '@smallDesktop': { gridTemplateColumns: 'repeat(4, 1fr)'  }},
      5: {  '@smallDesktop': { gridTemplateColumns: 'repeat(5, 1fr)'  }},
      6: {  '@smallDesktop': { gridTemplateColumns: 'repeat(6, 1fr)'  }},
      7: {  '@smallDesktop': { gridTemplateColumns: 'repeat(7, 1fr)'  }},
      8: {  '@smallDesktop': { gridTemplateColumns: 'repeat(8, 1fr)'  }},
      9: {  '@smallDesktop': { gridTemplateColumns: 'repeat(9, 1fr)'  }},
      10: { '@smallDesktop': { gridTemplateColumns: 'repeat(10, 1fr)' }},
      11: { '@smallDesktop': { gridTemplateColumns: 'repeat(11, 1fr)' }},
      12: { '@smallDesktop': { gridTemplateColumns: 'repeat(12, 1fr)' }}
    },

    // Here we support the customization of the columns needed for the tablet breakpoints

    tabletColumns: { 
      1: {  '@tablet': { gridTemplateColumns: 'repeat(1, 1fr)', rowGap: 50 }},
      2: {  '@tablet': { gridTemplateColumns: 'repeat(2, 1fr)', rowGap: 50  }},
      3: {  '@tablet': { gridTemplateColumns: 'repeat(3, 1fr)', rowGap: 50  }},
      4: {  '@tablet': { gridTemplateColumns: 'repeat(4, 1fr)', rowGap: 50  }},
      5: {  '@tablet': { gridTemplateColumns: 'repeat(5, 1fr)', rowGap: 50  }},
      6: {  '@tablet': { gridTemplateColumns: 'repeat(6, 1fr)', rowGap: 50  }},
      7: {  '@tablet': { gridTemplateColumns: 'repeat(7, 1fr)', rowGap: 50  }},
      8: {  '@tablet': { gridTemplateColumns: 'repeat(8, 1fr)', rowGap: 50  }},
      9: {  '@tablet': { gridTemplateColumns: 'repeat(9, 1fr)', rowGap: 50  }},
      10: { '@tablet': { gridTemplateColumns: 'repeat(10, 1fr)', rowGap: 50 }},
      11: { '@tablet': { gridTemplateColumns: 'repeat(11, 1fr)', rowGap: 50 }},
      12: { '@tablet': { gridTemplateColumns: 'repeat(12, 1fr)', rowGap: 50 }}
    },

    // Here we support the customization of the columns needed for the mobile breakpoints

    mobileColumns: { 
      1: {  '@mobile': { gridTemplateColumns: 'repeat(1, 1fr)'  }},
      2: {  '@mobile': { gridTemplateColumns: 'repeat(2, 1fr)'  }},
      3: {  '@mobile': { gridTemplateColumns: 'repeat(3, 1fr)'  }},
      4: {  '@mobile': { gridTemplateColumns: 'repeat(4, 1fr)'  }},
      5: {  '@mobile': { gridTemplateColumns: 'repeat(5, 1fr)'  }},
      6: {  '@mobile': { gridTemplateColumns: 'repeat(6, 1fr)'  }},
      7: {  '@mobile': { gridTemplateColumns: 'repeat(7, 1fr)'  }},
      8: {  '@mobile': { gridTemplateColumns: 'repeat(8, 1fr)'  }},
      9: {  '@mobile': { gridTemplateColumns: 'repeat(9, 1fr)'  }},
      10: { '@mobile': { gridTemplateColumns: 'repeat(10, 1fr)' }},
      11: { '@mobile': { gridTemplateColumns: 'repeat(11, 1fr)' }},
      12: { '@mobile': { gridTemplateColumns: 'repeat(12, 1fr)' }}
    },

    columnGap: {
      'l0': { columnGap: 20 },
      'l1': { columnGap: 40 },
      'l2': { columnGap: 60 },
      'l3': { columnGap: 80 }
    },

    verticalAlignment: {
      center: {
        alignItems: 'center',
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface GridProps {
  columns?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14
  largeDesktopColumns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  smallDesktopColumns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  tabletColumns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  mobileColumns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  columnGap?: 'l0' | 'l1' | 'l2' | 'l3'
  verticalAlignment?: 'center'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Grid = ({ 
    columns, // Required - Set the columns needed for the grid
    columnGap, // Optional - For the spacing between the grid columns
    largeDesktopColumns, // Optional - Supporting columns for large desktop breakpoints
    smallDesktopColumns, // Optional - Supporting columns for small desktop breakpoints
    tabletColumns, // Optional - Supporting columns for tablet breakpoints
    mobileColumns, // Optional - Supporting columns for mobile breakpoints
    verticalAlignment, // Optional - To align all of the columns vertically in the container
    children // Required - For the content inside of the grid
  }:GridProps) => {

  return(

    <GridWrap {...{ columns, columnGap, largeDesktopColumns, smallDesktopColumns, tabletColumns, mobileColumns, verticalAlignment }}>
      { children }
    </GridWrap>

  )
}
