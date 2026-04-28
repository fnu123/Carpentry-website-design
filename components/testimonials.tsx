"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Michael Thompson",
    location: "Fort Worth, TX",
    rating: 5,
    text: "Mainframe Wood Construction exceeded our expectations. The deck they built is absolutely stunning and the craftsmanship is impeccable. Highly recommend!",
    project: "Custom Wood Deck",
  },
  {
    name: "Sarah Mitchell",
    location: "Dallas, TX",
    rating: 5,
    text: "Professional from start to finish. They were on time, communicated well throughout the project, and the quality of work is outstanding. Our pergola is the envy of the neighborhood!",
    project: "Pergola Installation",
  },
  {
    name: "David Rodriguez",
    location: "Denton, TX",
    rating: 5,
    text: "We had our entire deck resurfaced with Trex and couldn't be happier. The team was respectful of our property and completed the job ahead of schedule.",
    project: "Trex Deck Resurfacing",
  },
  {
    name: "Jennifer Williams",
    location: "Decatur, TX",
    rating: 5,
    text: "Outstanding workmanship on our wood framing project. They caught issues our previous contractor missed and made sure everything was up to code.",
    project: "Wood Framing",
  },
  {
    name: "Robert Chen",
    location: "Gainesville, TX",
    rating: 5,
    text: "The composite railing system they installed looks beautiful and gives us peace of mind with the kids. Great attention to detail and fair pricing.",
    project: "Composite Railings",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-secondary">
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-secondary-foreground text-balance">
            What Our Customers Say
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            Don&apos;t just take our word for it. Here&apos;s what homeowners across 
            Dallas–Fort Worth have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-8 rounded-2xl bg-card border border-border">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Author */}
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                      <div className="text-sm text-primary font-medium mt-1">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-card hover:bg-primary hover:text-primary-foreground border-border" />
              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-card hover:bg-primary hover:text-primary-foreground border-border" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
