"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Building2, 
  Fence, 
  Grip, 
  Layers, 
  RefreshCw, 
  Columns3,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Building2,
    title: "Structural Wood Framing",
    description: "Professional wood framing services for residential construction, ensuring structural integrity and code compliance.",
  },
  {
    icon: Fence,
    title: "Custom Wood Deck Building",
    description: "Beautiful, durable custom wood decks designed and built to enhance your outdoor living space.",
  },
  {
    icon: Columns3,
    title: "Pergolas, Railings & Accents",
    description: "Elegant pergolas, railings, and decorative accents that add character and value to your property.",
  },
  {
    icon: Layers,
    title: "Trex Deck Installation",
    description: "Expert installation of low-maintenance Trex composite decking for lasting beauty and durability.",
  },
  {
    icon: RefreshCw,
    title: "Deck Resurfacing & Upgrade",
    description: "Transform your existing deck with professional resurfacing, repairs, and modern upgrades.",
  },
  {
    icon: Grip,
    title: "Composite Railing Systems",
    description: "Premium composite railing systems that combine safety, style, and minimal maintenance.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24">
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Expert Carpentry Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From structural framing to custom outdoor living spaces, we deliver 
            quality craftsmanship on every project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-6 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
