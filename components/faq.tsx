"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can you provide references from past clients?",
    answer: "Absolutely! We're proud of the work we've done for homeowners across Dallas–Fort Worth. We can provide references from past clients, and you can also see real photos of our completed projects in our gallery. We believe our work speaks for itself.",
  },
  {
    question: "What sets you apart from other contractors?",
    answer: "We focus on quality over quantity. Our team takes pride in every project, ensuring structural integrity and attention to detail. We're locally owned, fully licensed and insured, and we stand behind our work. Plus, we maintain open communication throughout your project.",
  },
  {
    question: "What services do you offer?",
    answer: "We specialize in structural wood framing, custom wood deck building, pergolas, railings, Trex deck installation, deck resurfacing and upgrades, and composite railing systems. Whether you need a new outdoor living space or want to refresh an existing one, we've got you covered.",
  },
  {
    question: "Is there a fee for estimates?",
    answer: "No, all our estimates are completely free with no obligation. We'll visit your property, discuss your vision, assess the project requirements, and provide you with a detailed, transparent quote. There's no pressure and no hidden fees.",
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve homeowners throughout the Dallas–Fort Worth metropolitan area, including Dallas, Fort Worth, Denton, Gainesville, Decatur, and surrounding communities. If you're unsure whether we service your area, just give us a call!",
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re 
              looking for, feel free to contact us.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
