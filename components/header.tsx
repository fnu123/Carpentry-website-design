"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#service-areas", label: "Service Areas" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-white">Mainframe</span>
              <span className="text-sm block -mt-1 text-white/80">
                Wood Construction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium relative group transition-colors ${isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-primary"
                  }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className={`w-5 h-5 ${isScrolled ? "text-primary" : "text-white"}`} />
                ) : (
                  <Moon className={`w-5 h-5 ${isScrolled ? "text-foreground" : "text-white"}`} />
                )}
              </button>
            )}

            {/* Phone */}
            <Link href="tel:866-251-7868" className="hidden md:flex">
              <Button
                size="sm"
                className={`
      gap-2 
      backdrop-blur-md 
      border 
      transition-all
      ${isScrolled
                    ? "bg-muted border-border text-primary hover:bg-muted/80"
                    : "bg-white/10 border-white/30 text-primary hover:bg-white/20 hover:border-white/50"
                  }
    `}
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="hidden xl:inline text-primary">866-251-7868</span>
                <span className="xl:hidden text-primary">Call</span>
              </Button>
            </Link>

            {/* CTA */}
            <Link href="#contact" className="hidden sm:block">
              <Button className="bg-primary hover:bg-gold-dark text-primary-foreground font-semibold">
                Get Free Quote
              </Button>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Link href="tel:866-251-7868">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    866-251-7868
                  </Button>
                </Link>

                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-gold-dark text-primary-foreground font-semibold">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}