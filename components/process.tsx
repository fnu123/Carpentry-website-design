"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, Calendar, Hammer, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Contact Us",
    description: "Reach out via phone, email, or our contact form. Tell us about your project and vision.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Schedule Your Estimate",
    description: "We'll visit your property, assess your needs, and provide a detailed, no-obligation quote.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Get The Job Done",
    description: "Our skilled team completes your project with quality craftsmanship and attention to detail.",
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Our Simple 3-Step Process
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting started is easy. We keep things simple so you can focus on 
            enjoying your new outdoor space.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Step Number & Icon */}
              <div className="relative inline-flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Arrow for non-last items */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-20 -right-4 w-8 h-8 items-center justify-center text-muted-foreground">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
