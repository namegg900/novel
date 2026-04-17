'use client';

import { useEffect, useRef } from 'react';

export default function useIntersectionObserver(callback, options = { threshold: 0.4 }) {
  const targetRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) callback();
      });
    }, options);

    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [callback, options]);

  return targetRef;
}
