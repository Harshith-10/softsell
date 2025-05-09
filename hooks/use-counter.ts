"use client";

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

type CounterProps = {
  end: number | string;
  duration?: number; 
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
};

export function useCounter({
  end,
  duration = 2.5,
  decimalPlaces = 0,
  prefix = '',
  suffix = ''
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
    // Parse the end value (handles formats like "5K+", "$12M+", etc.)
  const parseEndValue = (): number => {
    if (typeof end === 'number') return end;
    
    // First check if it has a special prefix like $
    let multiplier = 1;
    let numericValue = end;
    
    // Handle suffixes like K, M, etc.
    if (typeof end === 'string') {
      if (end.includes('K')) multiplier = 1000;
      if (end.includes('M')) multiplier = 1000000;
      if (end.includes('B')) multiplier = 1000000000;
      
      // Remove any non-numeric characters except decimal points
      numericValue = end.replace(/[^0-9.]/g, '');
    }
    
    return (parseFloat(numericValue) || 0) * multiplier;
  };
    // Format the count based on the end format
  const formatCount = (value: number): string => {
    // Handle special case for hrs/time format
    if (typeof end === 'string' && end.toLowerCase().includes('hrs')) {
      return `${Math.floor(value)}hrs`;
    }
    
    let formatted = decimalPlaces > 0 
      ? value.toFixed(decimalPlaces) 
      : Math.floor(value).toString();
    
    // Add back any special prefixes and suffixes
    if (typeof end === 'string') {
      // Handle prefixes like $
      if (end.startsWith('$')) {
        formatted = '$' + formatted;
      }
      
      // Handle suffixes like K+, M+, etc.
      if (end.includes('K')) {
        const valueInK = (value / 1000);
        formatted = valueInK >= 1 ? valueInK.toFixed(0) + 'K' : formatted;
      } else if (end.includes('M')) {
        const valueInM = (value / 1000000);
        formatted = valueInM >= 1 ? valueInM.toFixed(0) + 'M' : formatted;
      } else if (end.includes('B')) {
        const valueInB = (value / 1000000000);
        formatted = valueInB >= 1 ? valueInB.toFixed(0) + 'B' : formatted;
      }
      
      // Add + if it exists in the original
      if (end.includes('+')) {
        formatted += '+';
      }
    } else {
      formatted = prefix + formatted + suffix;
    }
    
    return formatted;
  };
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      const endValue = parseEndValue();
      const startTime = performance.now();
      const endTime = startTime + duration * 1000;
      
      const updateCount = () => {
        const now = performance.now();
        const progress = Math.min((now - startTime) / (endTime - startTime), 1);
        
        // Use a more natural easing function for the counting
        // Ease-out-cubic provides a nice initial acceleration then deceleration
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const easeOutQuint = 1 - Math.pow(1 - progress, 5);
        
        // For non-percentage values, use a more dramatic ease
        const finalEasing = typeof end === 'string' && end.includes('%') 
          ? easeOutCubic 
          : (0.6 * easeOutCubic + 0.4 * easeOutQuint);
        
        const currentCount = progress === 1 ? endValue : finalEasing * endValue;
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isInView, hasAnimated, duration, end]);
  
  return { 
    count: formatCount(count), 
    ref,
    isInView,
    hasAnimated
  };
}
