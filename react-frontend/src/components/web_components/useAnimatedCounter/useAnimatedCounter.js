import { useEffect, useState, useRef } from 'react';

export function useAnimatedCounter(targetValue, startAnimation) {
  const [count, setCount] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!startAnimation) return;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smooth slowing down at the end (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * targetValue));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(targetValue); // Lock to final value
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [targetValue, startAnimation]);

  return count;
}