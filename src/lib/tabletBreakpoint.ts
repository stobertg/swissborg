import { useState, useEffect } from 'react'

export const useTabletBreakpoint = () => {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return isTablet;
};
