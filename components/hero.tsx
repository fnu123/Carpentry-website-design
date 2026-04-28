"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
          }}
        />

        {/* ✅ FIXED OVERLAY (important) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60 dark:from-black/85 dark:via-black/75 dark:to-black/65" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* ✅ FIXED BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                       bg-white/15 backdrop-blur-md border border-white/20 
                       mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-white font-medium">
              Real Projects. Honest Work. Built to Last.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
                       text-white mb-6 leading-tight"
          >
            Custom Carpentry & Deck Building{" "}
            <span className="text-gold-gradient">You Can Rely On</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Quality wood framing, custom decks, pergolas, and outdoor living solutions 
            built for homeowners across Dallas–Fort Worth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-gold-dark text-primary-foreground 
                           font-semibold text-lg px-8 py-6 group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            {/* ✅ FIXED BUTTON */}
            <Link href="#gallery">
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-md border border-white/30 
                           text-white hover:bg-white hover:text-black
                           font-semibold text-lg px-8 py-6 transition-all duration-300"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-12 border-t border-white/10"
          >
            {[
              "Licensed & Insured",
              "Free Estimates",
              "Local DFW Experts",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white/90 font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}