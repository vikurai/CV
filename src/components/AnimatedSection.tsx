import React, { PropsWithChildren } from 'react';
import { useScrollReveal } from './useScrollReveal';

interface AnimatedSectionProps {
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
  delay?: number;
  className?: string;
  id?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  id,
}: PropsWithChildren<AnimatedSectionProps>) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      id={id}
      className={`animated-section ${animation} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}