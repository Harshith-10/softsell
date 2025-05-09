"use client";

import { motion, Variant } from "framer-motion";
import { ReactNode } from "react";

type AnimationVariant = 
  | "fadeIn" 
  | "slideUp" 
  | "slideDown" 
  | "slideLeft" 
  | "slideRight" 
  | "scale" 
  | "bounce" 
  | "rotate";

interface AnimatedElementProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function AnimatedElement({
  children,
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  amount = 0.3,
}: AnimatedElementProps) {
  const variants = {
    hidden: getHiddenVariant(variant, amount),
    visible: getVisibleVariant(duration),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function getHiddenVariant(variant: AnimationVariant, amount: number): Variant {
  switch (variant) {
    case "fadeIn":
      return { opacity: 0 };
    case "slideUp":
      return { opacity: 0, y: amount * 100 };
    case "slideDown":
      return { opacity: 0, y: -amount * 100 };
    case "slideLeft":
      return { opacity: 0, x: -amount * 100 };
    case "slideRight":
      return { opacity: 0, x: amount * 100 };
    case "scale":
      return { opacity: 0, scale: 0.8 };
    case "bounce":
      return { opacity: 0, y: amount * 50 };
    case "rotate":
      return { opacity: 0, rotate: -90 };
    default:
      return { opacity: 0 };
  }
}

function getVisibleVariant(duration: number): Variant {
  return {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration,
    },
  };
}