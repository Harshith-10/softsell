"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { HandCoins, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <HandCoins className="h-6 w-6 text-primary" />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold"
          >
            SoftSell
          </motion.span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button variant="default" className="hidden md:flex">
              Get Started
            </Button>
          </motion.div>
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}

function NavLinks() {
  return (
    <>
      {["how-it-works", "why-choose-us", "testimonials", "contact"].map((link, i) => (
        <motion.div
          key={link}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
          whileHover={{ y: -2 }}
        >
          <Link
            href={`#${link}`}
            className="text-foreground/80 hover:text-foreground transition-colors font-medium"
          >
            {link.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
          </Link>
        </motion.div>
      ))}
    </>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <motion.div
        whileTap={{ scale: 0.9 }}
      >
        <Button
          variant="ghost"
          size="icon"
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </AnimatePresence>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/95 z-40 flex flex-col items-center justify-center"
          >
            <motion.nav 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center space-y-8 text-lg"
            >
              {["how-it-works", "why-choose-us", "testimonials", "contact"].map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`#${link}`}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                  >
                    {link.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="default" onClick={() => setIsOpen(false)}>Get Started</Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}