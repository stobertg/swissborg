import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(typeof window !== "undefined" ? window.scrollY : 0);
  
  const onScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (typeof window === "undefined") return 500;
  return scrollPos;
};

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}


export const formatNumberWithCommas = (number:number) => {
  return Math.floor(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatToOneDecimal = (number: number | string) => {
  return parseFloat(number.toString()).toFixed(2)
}

export const formatToTwoDecimals = (number: number | string) => {
  return parseFloat(number.toString()).toFixed(2)
}

export const formatToThreeDecimals = ( number: number ) => {
  return parseFloat(number.toString()).toFixed(3);
}
