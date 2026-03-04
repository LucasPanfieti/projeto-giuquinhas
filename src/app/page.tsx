import Header from "./components/Header";
import Counter from "./components/Counter";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="relative">
      <Header />

      {/* Stars / particles background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold-300"
            style={{
              width: Math.random() > 0.8 ? "2px" : "1px",
              height: Math.random() > 0.8 ? "2px" : "1px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.05,
              animation: `pulseSoft ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Sections */}
      <section id="contador" className="relative z-10">
        <Counter />
      </section>

      {/* Divider */}
      <div className="relative z-10 flex items-center justify-center py-2">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
        <span className="absolute text-gold-400/30 text-lg px-6 bg-dark-900">
          ✦
        </span>
      </div>

      <section id="memorias" className="relative z-10">
        <Timeline />
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gold-400/10 py-12 text-center">
        <p
          className="text-cream/20 font-display text-lg italic"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          feito com amor ♥
        </p>
        <p className="text-cream/10 font-body text-xs tracking-widest mt-2">
          08.10.2023 — nosso começo · 08.12.2023 — início namoro
        </p>
      </footer>
    </main>
  );
}
