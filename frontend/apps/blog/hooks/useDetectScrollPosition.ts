import { useCallback, useEffect, useState } from 'react';
import throttle from '../utils/throttle';

const detectionCriteria = (position: 'top' | 'bottom') => {
  switch (position) {
    case 'top':
      return window.scrollY === 0;
    case 'bottom':
      return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }
};

const useDetectScrollPosition = (position: 'top' | 'bottom') => {
  const [inPosition, setInPosition] = useState(position === 'top' ? true : false);

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }
    throttle(setInPosition(detectionCriteria(position)));
  }, [position]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { inPosition };
};

export default useDetectScrollPosition;
