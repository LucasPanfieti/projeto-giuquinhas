"use client"

import { useState, useEffect } from "react"
import { coupleData } from "../data"

type TimeUnit = {
  label: string
  value: number
}

function getTimeDiff(from: Date): TimeUnit[] {
  const now = new Date()
  const diff = now.getTime() - from.getTime()

  const totalSeconds = Math.floor(diff / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)
  const totalDays = Math.floor(totalHours / 24)

  const years = Math.floor(totalDays / 365)
  const months = Math.floor((totalDays % 365) / 30)
  const days = Math.floor((totalDays % 365) % 30)
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  return [
    { label: "anos", value: years },
    { label: "meses", value: months },
    { label: "dias", value: days },
    { label: "horas", value: hours },
    { label: "minutos", value: minutes },
    { label: "segundos", value: seconds },
  ]
}

export default function Counter() {
  const [units, setUnits] = useState<TimeUnit[]>(getTimeDiff(coupleData.startDate))
  const [quoteIdx, setQuoteIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setUnits(getTimeDiff(coupleData.startDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIdx(i => (i + 1) % coupleData.quotes.length)
    }, 5000)
    return () => clearInterval(quoteTimer)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-gold-400/5 blur-3xl" />
      </div>

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-gold-300/60 font-body text-xs tracking-[0.4em] uppercase mb-4">
          desde 08.12.2023
        </p>
        <h1
          className="font-display text-6xl md:text-8xl font-light text-cream/90 mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Nossa História
        </h1>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
        <p className="text-cream/40 font-body text-sm tracking-widest max-w-md mx-auto">
          {coupleData.mainQuote}
        </p>
      </div>

      {/* Counter grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mb-16 relative z-10 w-full max-w-4xl">
        {units.map((unit, i) => (
          <div
            key={unit.label}
            className="glass-card border-glow rounded-lg p-4 md:p-6 text-center flex flex-col items-center"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <span
              className="counter-digit text-4xl md:text-5xl text-gold-gradient block mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-cream/30 text-xs tracking-[0.25em] uppercase font-body">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Rotating quote */}
      <div className="relative z-10 text-center max-w-lg">
        <p
          key={quoteIdx}
          className="text-cream/50 font-display text-xl italic animate-fade-in"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          &ldquo;{coupleData.quotes[quoteIdx]}&rdquo;
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-cream/20 text-xs tracking-widest uppercase font-body">rolar</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold-400/40 to-transparent" />
      </div>
    </section>
  )
}
