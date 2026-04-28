"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

const navigation = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#service-areas", label: "Service Areas" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Structural Wood Framing",
  "Custom Wood Deck Building",
  "Pergolas & Railings",
  "Trex Deck Installation",
  "Deck Resurfacing",
  "Composite Railings",
]

const serviceAreas = [
  "Dallas",
  "Fort Worth",
  "Denton",
  "Gainesville",
  "Decatur",
  "DFW Metro",
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <span className="font-bold text-lg text-secondary-foreground">Mainframe</span>
                <span className="text-secondary-foreground/60 text-sm block -mt-1">Wood Construction</span>
              </div>
            </Link>
            <p className="text-secondary-foreground/70 mb-6 leading-relaxed">
              Quality carpentry and deck building services for homeowners 
              across the Dallas–Fort Worth metropolitan area.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-secondary-foreground/70"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:866-251-7868" 
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  866-251-7868
                </a>
              </li>
              <li>
                <a 
                  href="mailto:mainframewoodconstruction@gmail.com" 
                  className="flex items-start gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="break-all">mainframewoodconstruction@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Dallas–Fort Worth, Texas</span>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <Clock className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Mon–Fri: 9:00am–5:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas Row */}
        <div className="py-6 border-t border-secondary-foreground/10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-secondary-foreground/50 text-sm">Service Areas:</span>
            {serviceAreas.map((area, index) => (
              <span key={area} className="text-secondary-foreground/70 text-sm">
                {area}
                {index < serviceAreas.length - 1 && <span className="ml-6 text-secondary-foreground/30">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} Mainframe Wood Construction. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-secondary-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-secondary-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
