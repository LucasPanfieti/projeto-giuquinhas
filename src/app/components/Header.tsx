"use client"

import { useState, useEffect } from "react"

type Section = "contador" | "memorias"

export default function Header() {
  const [active, setActive] = useState<Section>("contador")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      // Detect which section is in view
      const memorias = document.getElementById("memorias")
      if (memorias) {
        const rect = memorias.getBoundingClientRect()
        if (rect.top <= 100) {
          setActive("memorias")
        } else {
          setActive("contador")
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string, section: Section) => {
    setActive(section)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-900/90 backdrop-blur-md border-b border-gold-400/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / title */}
        <span
          className="text-gold-gradient text-lg font-light tracking-widest"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          ♥
        </span>

        {/* Nav */}
        <nav className="flex items-center gap-8">
          <button
            onClick={() => scrollTo("contador", "contador")}
            className={`relative text-xs tracking-[0.3em] uppercase font-body transition-all duration-300 pb-1 ${
              active === "contador" ? "text-gold-300" : "text-cream/30 hover:text-cream/60"
            }`}
          >
            Contador
            {active === "contador" && (
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            )}
          </button>

          <button
            onClick={() => scrollTo("memorias", "memorias")}
            className={`relative text-xs tracking-[0.3em] uppercase font-body transition-all duration-300 pb-1 ${
              active === "memorias" ? "text-gold-300" : "text-cream/30 hover:text-cream/60"
            }`}
          >
            Memórias
            {active === "memorias" && (
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            )}
          </button>
        </nav>

        {/* Right ornament */}
        <span className="text-gold-400/20 text-xs tracking-widest font-body">
          08 · 12 · 23
        </span>
      </div>
    </header>
  )
}
