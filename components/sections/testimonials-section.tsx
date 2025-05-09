"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { AnimatedElement } from "@/components/ui/animated-element";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was seamless and the valuation was fair.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "Quantum Innovations",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote:
      "When our company downsized, we had dozens of unused licenses. SoftSell provided a quick and hassle-free way to recoup some of our investment.",
    author: "Michael Chen",
    role: "IT Director",
    company: "Nexus Dynamics",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    quote:
      "I was skeptical at first, but SoftSell's valuation was better than I expected. The payment was processed quickly and their customer support was excellent.",
    author: "Emily Rodriguez",
    role: "Finance Manager",
    company: "Horizon Solutions",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <AnimatedBackground density="high">
      <section
        id="testimonials"
        className="py-24 bg-muted/50"
      >
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement variant="fadeIn" duration={0.7}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what some of our happy
                customers have to say about their experience with SoftSell.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <AnimatedElement 
      variant="slideUp" 
      delay={index * 0.2}
      duration={0.6}
    >
      <motion.div
        whileHover={{ 
          y: -10,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.3 }
        }}
      >
        <Card className="h-full overflow-hidden">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex-grow">
              <motion.p 
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                className="mb-6 italic text-muted-foreground"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </motion.p>
            </div>
            <motion.div 
              className="flex items-center mt-4"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedElement>
  );
}