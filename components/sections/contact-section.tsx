"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { AnimatedElement } from "@/components/ui/animated-element";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  company: z.string().min(1, { message: "Company name is required" }),
  licenseType: z.string({
    required_error: "Please select a license type",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Your message has been sent! We'll get back to you shortly.");
    form.reset();
  }

  return (
    <AnimatedBackground density="high">
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement variant="fadeIn" duration={0.7}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to convert your unused software licenses into cash? Fill out
                the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement variant="slideUp" duration={0.7} className="max-w-2xl mx-auto">
            <motion.div
              initial={{ boxShadow: "0 0 0 rgba(0, 0, 0, 0)" }}
              whileHover={{ 
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-card rounded-lg p-6 md:p-8 shadow-sm"
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField 
                      name="name" 
                      label="Name" 
                      placeholder="Your name" 
                      control={form.control} 
                      delay={0.1}
                    />
                    <InputField 
                      name="email" 
                      label="Email" 
                      placeholder="your.email@example.com" 
                      control={form.control} 
                      delay={0.2}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField 
                      name="company" 
                      label="Company" 
                      placeholder="Your company" 
                      control={form.control} 
                      delay={0.3}
                    />
                    <SelectField 
                      name="licenseType" 
                      label="License Type" 
                      control={form.control} 
                      delay={0.4}
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about the licenses you want to sell..."
                              className="min-h-32 transition-shadow focus-visible:shadow-md"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button type="submit" size="lg" className="w-full group">
                      Submit
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          </AnimatedElement>
        </div>
      </section>
    </AnimatedBackground>
  );
}

type InputFieldProps = {
  name: "name" | "email" | "company";
  label: string;
  placeholder: string;
  control: any;
  delay?: number;
};

function InputField({ name, label, placeholder, control, delay = 0 }: InputFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input 
                placeholder={placeholder} 
                {...field} 
                className="transition-shadow focus-visible:shadow-md"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </motion.div>
  );
}

type SelectFieldProps = {
  name: "licenseType";
  label: string;
  control: any;
  delay?: number;
};

function SelectField({ name, label, control, delay = 0 }: SelectFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="transition-shadow focus-visible:shadow-md">
                  <SelectValue placeholder="Select license type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="enterprise">Enterprise</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="educational">Educational</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </motion.div>
  );
}