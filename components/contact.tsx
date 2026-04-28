"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  CheckCircle2, 
  Clock, 
  Shield, 
  MapPin, 
  Send,
  Phone,
  Mail,
  User,
  MessageSquare,
  ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"

const trustPoints = [
  { icon: CheckCircle2, text: "Real projects (no stock work)" },
  { icon: Clock, text: "Fast response time" },
  { icon: Shield, text: "Free estimates" },
  { icon: MapPin, text: "Local Dallas–Fort Worth experts" },
]

const projectTypes = [
  "Custom Wood Deck",
  "Deck Resurfacing",
  "Trex Deck Installation",
  "Pergola",
  "Wood Framing",
  "Railing System",
  "Other",
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Trust Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-balance">
                Let&apos;s Talk About Your Project
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Tell us what you need and we&apos;ll get back to you quickly with a 
                real estimate — no pressure.
              </p>

              {/* Trust Points */}
              <div className="space-y-4 mb-10">
                {trustPoints.map((point, index) => (
                  <motion.div
                    key={point.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{point.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Response Time Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">
                  We typically respond within 30–60 minutes
                </span>
              </div>

              {/* Contact Info */}
              <div className="mt-10 pt-10 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Or reach us directly:</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:866-251-7868" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    866-251-7868
                  </a>
                  <a 
                    href="mailto:mainframewoodconstruction@gmail.com" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    mainframewoodconstruction@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl border border-border p-8 shadow-xl">
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Free Quote</div>
                    <div className="text-sm text-muted-foreground">No Obligation</div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
<div className="relative">
  {/* Icon */}
  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
    <User className="w-5 h-5 text-muted-foreground" />
  </div>

  {/* Label */}
  <label 
    className={`absolute left-12 transition-all pointer-events-none ${
      focusedField === "name" || formData.name 
        ? "top-2 text-xs text-primary" 
        : "top-1/2 -translate-y-1/2 text-muted-foreground"
    }`}
  >
    Full Name *
  </label>

  {/* Input */}
  <input
    type="text"
    required
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    onFocus={() => setFocusedField("name")}
    onBlur={() => setFocusedField(null)}
    className="w-full pl-12 pr-4 pt-6 pb-2 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
  />
</div>

                  {/* Phone Field */}
                  <div className="relative">
                    <label 
                      className={`absolute left-12 transition-all pointer-events-none ${
                        focusedField === "phone" || formData.phone 
                          ? "top-2 text-xs text-primary" 
                          : "top-1/2 -translate-y-1/2 text-muted-foreground"
                      }`}
                    >
                      Phone Number *
                    </label>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Phone className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 pt-6 pb-2 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label 
                      className={`absolute left-12 transition-all pointer-events-none ${
                        focusedField === "email" || formData.email 
                          ? "top-2 text-xs text-primary" 
                          : "top-1/2 -translate-y-1/2 text-muted-foreground"
                      }`}
                    >
                      Email (optional but recommended)
                    </label>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 pt-6 pb-2 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    />
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="relative">
                    <label className="block text-sm text-muted-foreground mb-2">
                      Project Type *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none text-foreground"
                      >
                        <option value="">Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-sm text-muted-foreground mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-gold-dark text-primary-foreground font-semibold text-lg py-6 group"
                  >
                    Get Free Estimate
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    Your information is 100% secure. No spam.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
