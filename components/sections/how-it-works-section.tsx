"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightLeft, BarChart, CircleDollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBackground } from "../ui/animated-background";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const steps: Step[] = [
  {
    title: "Upload License",
    description:
      "Simply upload your software license details. We support all major software vendors and license types.",
    icon: <ArrowRightLeft className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300",
  },
  {
    title: "Get Valuation",
    description:
      "Our AI-powered system analyzes market data to provide you with the best possible valuation for your license.",
    icon: <BarChart className="h-8 w-8" />,
    color: "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-300",
  },
  {
    title: "Get Paid",
    description:
      "Accept our offer and receive payment within 48 hours via your preferred payment method.",
    icon: <CircleDollarSign className="h-8 w-8" />,
    color: "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-300",
  },
];

export function HowItWorksSection() {
  return (
    <AnimatedBackground density="high">
      <section
        id="how-it-works"
        className="py-24 bg-muted/50"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve simplified the process of selling your unused software
              licenses. Just three simple steps to convert your digital assets
              into cash.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl p-8 shadow-sm transition-all hover:shadow-md"
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mb-6",
            step.color
          )}
        >
          {step.icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
        <p className="text-muted-foreground">{step.description}</p>
      </div>
    </motion.div>
  );
}