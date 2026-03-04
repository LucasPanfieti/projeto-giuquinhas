"use client"

import { useState } from "react"
import Image from "next/image"
import { timelineByYear, TimelineEvent } from "../data"

const YEARS = ["2023", "2024", "2025", "2026"]

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const isLeft = event.side === "left"

  return (
    <div
      className={`relative flex items-start gap-8 mb-16 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Content card */}
      <div className={`w-5/12 ${isLeft ? "text-right" : "text-left"}`}>
        <div
          className="glass-card rounded-xl p-6 photo-card"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {/* Photo placeholder / real photo */}
          {event.photo && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-dark-700">
              <Image
                src={event.photo}
                alt={event.title}
                fill
                className="object-cover"
                onError={(e) => {
                  // Hide if photo not found
                  const target = e.target as HTMLImageElement
                  target.parentElement!.style.display = 'none'
                }}
              />
              {/* Fallback gradient when no photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                <div className="text-gold-400/30 text-5xl">✦</div>
              </div>
            </div>
          )}

          <p className="text-gold-400/70 text-xs tracking-[0.3em] uppercase font-body mb-2">
            {event.date}
          </p>
          <h3
            className="text-cream/90 text-xl mb-3 font-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {event.title}
          </h3>
          <p className="text-cream/40 text-sm font-body leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Center dot */}
      <div className="w-2/12 flex justify-center items-start pt-6 shrink-0">
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-gold-400 shadow-[0_0_12px_3px_rgba(212,168,71,0.4)]" />
          <div className="absolute inset-0 rounded-full bg-gold-400/20 animate-ping" style={{ animationDuration: '3s' }} />
        </div>
      </div>

      {/* Empty space on opposite side */}
      <div className="w-5/12" />
    </div>
  )
}

export default function Timeline() {
  const [activeYear, setActiveYear] = useState("2023")

  const events = timelineByYear[activeYear] || []

  return (
    <section className="min-h-screen px-6 py-24 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16">
        <p className="text-gold-300/60 font-body text-xs tracking-[0.4em] uppercase mb-4">
          memórias
        </p>
        <h2
          className="font-display text-5xl md:text-6xl font-light text-cream/90 mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Nossa Linha do Tempo
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
      </div>

      {/* Year tabs */}
      <div className="flex justify-center gap-2 mb-20">
        {YEARS.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`relative px-6 py-3 text-sm tracking-[0.2em] font-body transition-all duration-300 rounded-sm ${
              activeYear === year
                ? "text-gold-300"
                : "text-cream/30 hover:text-cream/60"
            }`}
          >
            {activeYear === year && (
              <span className="absolute inset-0 border border-gold-400/30 rounded-sm bg-gold-400/5" />
            )}
            {year}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical center line */}
        <div className="timeline-line" />

        {events.length > 0 ? (
          events.map((event, i) => (
            <TimelineCard key={i} event={event} index={i} />
          ))
        ) : (
          <div className="text-center py-20">
            <p className="text-cream/20 font-display text-2xl italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Em breve, mais memórias aqui...
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
