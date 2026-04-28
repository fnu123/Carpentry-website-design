"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, CheckCircle2 } from "lucide-react"

const serviceAreas = [
  { name: "Dallas", highlight: true },
  { name: "Fort Worth", highlight: true },
  { name: "Denton", highlight: false },
  { name: "Gainesville", highlight: false },
  { name: "Decatur", highlight: false },
  { name: "Dallas–Fort Worth Metro Area", highlight: true },
]

export function ServiceAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="service-areas" className="py-24">
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
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Serving Homeowners Across North Texas
          </h2>
          <p className="text-muted-foreground text-lg">
            We proudly serve the entire Dallas–Fort Worth metropolitan area 
            and surrounding communities.
          </p>
        </motion.div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`
                p-6 rounded-xl border text-center transition-all
                ${area.highlight 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-card border-border hover:border-primary/50"
                }
              `}
            >
              <div className="flex items-center justify-center gap-2">
                {area.highlight ? (
                  <MapPin className="w-5 h-5" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                )}
                <span className={`font-semibold ${!area.highlight && "text-foreground"}`}>
                  {area.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Not sure if we serve your area?{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Contact us
            </a>{" "}
            to find out!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
