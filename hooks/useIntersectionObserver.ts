import { useState, useEffect, RefObject } from 'react';

const useIntersectionObserver = (
  elementRef: RefObject<Element>
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // We only want to trigger the animation once
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(element);

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, [elementRef]);

  return isIntersecting;
};

export default useIntersectionObserver;
