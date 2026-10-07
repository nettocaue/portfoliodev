'use client';
import { useRef, useEffect, type ReactNode } from 'react';

export default function FadeIn({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = 'true';
          ob.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <div ref={ref} data-visible="false" className={`fade-section${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}
