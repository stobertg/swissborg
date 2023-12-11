import { useState, useEffect } from 'react';

export const useTabletBreakpoint = () => {
  const [ isTablet, setIsTablet ] = useState( window.innerWidth < 768 )

  useEffect(() => {
    const handleResize = () => {
      setIsTablet( window.innerWidth < 768 )
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener( 'resize', handleResize );
  }, [])

  return isTablet
}
