"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 -z-10 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-background/60 to-background"></div>

      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="md:hidden px-2 py-1 text-secondary bg-primary rounded-full font-semibold text-xs tracking-tight">Visit the site in a Desktop device to get a complete experience!</span>
          <br className="md:hidden" /><br className="md:hidden" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <motion.span
              initial={{ filter: "blur(100px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 2, type: "spring" }}
              className="text-primary inline-block"
            >
              Turn Unused Software Licenses into Cash
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            SoftSell provides a seamless platform for businesses to sell their
            unused or outdated software licenses at competitive prices. Get an
            instant valuation and receive payment within 48 hours.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" className="rounded-full group relative overflow-hidden">
                <motion.span
                  initial={{ x: 0 }}
                  className="relative z-10 flex items-center"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-primary/80 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full group relative overflow-hidden"
              >
                <motion.span
                  initial={{ x: 0 }}
                  className="relative z-10 flex items-center font-medium"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-background/80 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
        >
          {[
            { number: "5000+", label: "Happy Customers" },
            { number: "$12M+", label: "Paid Out" },
            { number: "10,000+", label: "Licenses Sold" },
            { number: "48hrs", label: "Average Payout Time" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3, delay: 0 },
              }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <Counter 
                  end={stat.number} 
                  duration={2.5} 
                  highlightColor="hsl(var(--primary))"
                />
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}