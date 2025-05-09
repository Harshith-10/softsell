"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
  children?: React.ReactNode;
  duration?: number;
  x?: number;
  y?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function FloatingElement({
  children,
  duration = 5,
  x = 10,
  y = 10,
  delay = 0,
  className = "",
  style,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, y, 0],
        x: [0, x, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedBackgroundProps {
  className?: string;
  density?: "low" | "medium" | "high";
  children?: React.ReactNode;
}

// Deterministic random function
function deterministicRandom(seed: number, index: number) {
  const value = Math.sin(seed + index * 1000) * 10000;
  return Math.abs(value - Math.floor(value));
}

// Element generator with fixed seed
function generateElements(count: number, seed: number) {
  return Array.from({ length: count }).map((_, i) => {
    const size = Math.floor(deterministicRandom(seed, i) * 60) + 20;
    return {
      size: `${size}px`,
      x: Math.floor(deterministicRandom(seed, i + 0.1) * 200) - 100,
      y: Math.floor(deterministicRandom(seed, i + 0.2) * 200) - 100,
      duration: (deterministicRandom(seed, i + 0.3) * 5) + 3,
      delay: deterministicRandom(seed, i + 0.4) * 2,
      opacity: deterministicRandom(seed, i + 0.5) * 0.2 + 0.03,
      left: `${Math.floor(deterministicRandom(seed, i + 0.6) * 100)}%`,
      top: `${Math.floor(deterministicRandom(seed, i + 0.7) * 100)}%`,
    };
  });
}

// Predefined element configurations
const LOW_DENSITY_ELEMENTS = generateElements(5, 42);
const MEDIUM_DENSITY_ELEMENTS = generateElements(10, 100);
const HIGH_DENSITY_ELEMENTS = generateElements(15, 150);

export function AnimatedBackground({
  className = "",
  density = "medium",
  children,
}: AnimatedBackgroundProps) {
  // Select the appropriate predefined elements based on density
  const elements = useMemo(() => {
    if (density === "low") return LOW_DENSITY_ELEMENTS;
    if (density === "high") return HIGH_DENSITY_ELEMENTS;
    return MEDIUM_DENSITY_ELEMENTS;
  }, [density]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated background elements */}      {elements.map((element, index) => (
        <FloatingElement
          key={index}
          duration={element.duration}
          x={element.x}
          y={element.y}
          delay={element.delay}
          className="absolute rounded-full blur-xl"
          style={{            width: element.size,
            height: element.size,
            left: element.left,
            top: element.top,
            backgroundColor: "currentColor",
            opacity: element.opacity,
            zIndex: -1,
          }}
        />
      ))}
      
      {/* Main content */}
      {children}
    </div>
  );
}