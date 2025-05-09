"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Lock, Zap, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBackground } from "@/components/ui/animated-background";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
  index: number;
};

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Valuations",
    description:
      "Our AI-powered system provides instant valuations based on current market conditions and historical data.",
    iconColor: "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-300",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure Transactions",
    description:
      "We use bank-level encryption to ensure your license information and financial details are always protected.",
    iconColor: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Fast Payments",
    description:
      "Receive payment within 48 hours of accepting our offer, with multiple payout options available.",
    iconColor: "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-300",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Expert Support",
    description:
      "Our team of software licensing experts is available to help you through every step of the process.",
    iconColor: "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300",
  },
];

export function WhyChooseUsSection() {
  return (
    <AnimatedBackground density="high">
      <section
        id="why-choose-us"
        className="py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose SoftSell
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve helped thousands of businesses turn their unused software
              licenses into cash. Here&apos;s why they chose us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}

function Feature({ icon, title, description, iconColor, index }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start p-6 rounded-lg bg-card/50 hover:bg-card transition-colors duration-300"
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={cn(
          "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4",
          iconColor
        )}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}