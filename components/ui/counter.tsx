"use client";

import React from 'react';
import { useCounter } from '@/hooks/use-counter';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number | string;
  duration?: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  highlightColor?: string;
}

export function Counter({
  end,
  duration = 2.5,
  decimalPlaces = 0,
  prefix = '',
  suffix = '',
  className,
  highlightColor = 'hsl(var(--primary))'
}: CounterProps) {
  const { count, ref, isInView } = useCounter({
    end,
    duration,
    decimalPlaces,
    prefix,
    suffix
  });

  return (
    <motion.span 
      ref={ref} 
      className={cn("tabular-nums relative", className)}
      initial={{ opacity: 0.5, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {isInView && (
        <motion.span 
          className="absolute inset-0 -z-10 opacity-10 blur-lg"
          style={{ backgroundColor: highlightColor }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}
      {count}
    </motion.span>
  );
}
