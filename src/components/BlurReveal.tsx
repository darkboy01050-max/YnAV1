import { useEffect, useRef, ReactNode } from 'react';

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function BlurReveal({ children, className = '', delay = 0 }: BlurRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('blur-reveal');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={elementRef} className={`${className}`} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

export default BlurReveal;
