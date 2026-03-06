"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ✏️  EDITE AQUI: Data do primeiro beijo e data oficial do namoro
const FIRST_KISS_DATE = new Date("2023-10-08T00:00:00");
const RELATIONSHIP_DATE = new Date("2023-12-08T00:00:00");

// ✏️  EDITE AQUI: Seus nomes
const NAME_1 = "Giu";
const NAME_2 = "Quinhas";

// ✏️  EDITE AQUI: Frase especial
const SPECIAL_PHRASE =
  "Cada segundo ao seu lado é o lugar onde quero estar para sempre.";

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
}

function getTimeElapsed(from: Date): TimeElapsed {
  const now = new Date();
  const diff = now.getTime() - from.getTime();
  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  let years = now.getFullYear() - from.getFullYear();
  let months = now.getMonth() - from.getMonth();
  let days = now.getDate() - from.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return { years, months, days, hours, minutes, seconds, totalDays };
}

function CounterUnit({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, "0");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div
        className="counter-unit elegant-border"
        style={{
          width: "clamp(70px, 12vw, 110px)",
          height: "clamp(80px, 14vw, 130px)",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            color: "#e8c97a",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {formatted}
        </span>
      </div>
      <span
        style={{
          fontFamily: "Jost, sans-serif",
          fontSize: "0.6rem",
          fontWeight: 300,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#6a6050",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div
      style={{
        alignSelf: "flex-start",
        paddingTop: "clamp(20px, 4vw, 38px)",
        color: "#c9a84c",
        fontSize: "clamp(1.2rem, 3vw, 2rem)",
        fontFamily: "Cormorant Garamond, serif",
        opacity: 0.5,
        userSelect: "none",
      }}
    >
      :
    </div>
  );
}

export default function ContadorPage() {
  const [time, setTime] = useState<TimeElapsed | null>(null);
  const [kissTime, setKissTime] = useState<TimeElapsed | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      setTime(getTimeElapsed(RELATIONSHIP_DATE));
      setKissTime(getTimeElapsed(FIRST_KISS_DATE));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted || !time || !kissTime) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "64px",
        }}
      >
        <div
          style={{
            color: "#c9a84c",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1.5rem",
            fontWeight: 300,
          }}
        >
          carregando...
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 2rem 4rem",
        position: "relative",
      }}
    >
      {/* Banner */}
      <Image
        src="/photos/banner-lg-13.webp"
        alt="Lucas & Giulia - I see daylight"
        width={1920}
        height={600}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          // marginBottom: "2rem",
          marginTop: "70px",
        }}
        priority
      />
      {/* Header */}
      <div
        className="animate-fade-in-up"
        style={{ textAlign: "center", marginBottom: "3rem", marginTop: "2rem" }}
      >
        <p
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#6a6050",
            marginBottom: "1rem",
          }}
        >
          Desde 08 de outubro de 2023 juntos
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "linear-gradient(to right, transparent, #c9a84c)",
            }}
          />
          <span
            className="heartbeat"
            style={{ color: "#c9a84c", fontSize: "1rem" }}
          >
            ♥
          </span>
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "linear-gradient(to left, transparent, #c9a84c)",
            }}
          />
        </div>
      </div>

      {/* Main Counter Namoro*/}
      <div
        className="animate-fade-in-up delay-200 gold-glow"
        style={{
          background: "rgba(22,22,22,0.9)",
          border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "8px",
          padding: "clamp(2rem, 5vw, 3.5rem)",
          marginBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Corner decorations */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            width: "20px",
            height: "20px",
            borderTop: "1px solid #c9a84c",
            borderLeft: "1px solid #c9a84c",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "20px",
            height: "20px",
            borderTop: "1px solid #c9a84c",
            borderRight: "1px solid #c9a84c",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            width: "20px",
            height: "20px",
            borderBottom: "1px solid #c9a84c",
            borderLeft: "1px solid #c9a84c",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            width: "20px",
            height: "20px",
            borderBottom: "1px solid #c9a84c",
            borderRight: "1px solid #c9a84c",
            opacity: 0.4,
          }}
        />

        <p
          style={{
            textAlign: "center",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "2rem",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 300,
            color: "#c9a84c",
          }}
        >
          Namoro
        </p>

        <p
          style={{
            textAlign: "center",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.58rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#4a4040",
            marginTop: "-1.25rem",
            marginBottom: "2rem",
          }}
        >
          desde 08 de dezembro de 2023
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "clamp(6px, 2vw, 16px)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <CounterUnit value={time.years} label="anos" />
          <Separator />
          <CounterUnit value={time.months} label="meses" />
          <Separator />
          <CounterUnit value={time.days} label="dias" />
          <Separator />
          <CounterUnit value={time.hours} label="horas" />
          <Separator />
          <CounterUnit value={time.minutes} label="minutos" />
          <Separator />
          <CounterUnit value={time.seconds} label="segundos" />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.25rem",
            textAlign: "center",
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(201,168,76,0.1)",
          }}
        >
          <span
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 300,
              color: "#c9a84c",
              fontStyle: "italic",
            }}
          >
            {time.totalDays.toLocaleString("pt-BR")} dias
          </span>
          <span style={{ color: "#4a4040", margin: "0 0.75rem" }}>·</span>
          <span
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 300,
              color: "#c9a84c",
              fontStyle: "italic",
            }}
          >
            {Math.floor(time.totalDays / 7).toLocaleString("pt-BR")} semanas
          </span>
          <span style={{ color: "#4a4040", margin: "0 0.75rem" }}>·</span>
          <span
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 300,
              color: "#c9a84c",
              fontStyle: "italic",
            }}
          >
            {(time.years * 12 + time.months).toLocaleString("pt-BR")} meses
          </span>
        </div>
      </div>

      {/* Main Counter Juntos */}
      <div
        className="animate-fade-in-up delay-200 gold-glow"
        style={{
          background: "rgba(22,22,22,0.9)",
          border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "8px",
          padding: "clamp(2rem, 5vw, 3.5rem)",
          marginBottom: "3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Corner decorations */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            width: "20px",
            height: "20px",
            borderTop: "1px solid #c9a84c",
            borderLeft: "1px solid #c9a84c",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "20px",
            height: "20px",
            borderTop: "1px solid #c9a84c",
            borderRight: "1px solid #c9a84c",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            width: "20px",
            height: "20px",
            borderBottom: "1px solid #c9a84c",
            borderLeft: "1px solid #c9a84c",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            width: "20px",
            height: "20px",
            borderBottom: "1px solid #c9a84c",
            borderRight: "1px solid #c9a84c",
            opacity: 0.4,
          }}
        />

        <p
          style={{
            textAlign: "center",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "2rem",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 300,
            color: "#c9a84c",
          }}
        >
          Juntos
        </p>

        <p
          style={{
            textAlign: "center",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.58rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#4a4040",
            marginTop: "-1.25rem",
            marginBottom: "2rem",
          }}
        >
          desde 08 de outubro de 2023
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "clamp(6px, 2vw, 16px)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <CounterUnit value={kissTime.years} label="anos" />
          <Separator />
          <CounterUnit value={kissTime.months} label="meses" />
          <Separator />
          <CounterUnit value={kissTime.days} label="dias" />
          <Separator />
          <CounterUnit value={kissTime.hours} label="horas" />
          <Separator />
          <CounterUnit value={kissTime.minutes} label="minutos" />
          <Separator />
          <CounterUnit value={kissTime.seconds} label="segundos" />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.25rem",
            textAlign: "center",
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(201,168,76,0.1)",
          }}
        >
          <span
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 300,
              color: "#c9a84c",
              fontStyle: "italic",
            }}
          >
            {kissTime.totalDays.toLocaleString("pt-BR")} dias
          </span>
          <span style={{ color: "#4a4040", margin: "0 0.75rem" }}>·</span>
          <span
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 300,
              color: "#c9a84c",
              fontStyle: "italic",
            }}
          >
            {Math.floor(kissTime.totalDays / 7).toLocaleString("pt-BR")} semanas
          </span>
          <span style={{ color: "#4a4040", margin: "0 0.75rem" }}>·</span>
          <span
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 300,
              color: "#c9a84c",
              fontStyle: "italic",
            }}
          >
            {(kissTime.years * 12 + kissTime.months).toLocaleString("pt-BR")}{" "}
            meses
          </span>
        </div>
      </div>

      {/* First kiss counter */}
      {/* <div
        className="animate-fade-in-up delay-300"
        style={{
          background: "rgba(16,16,16,0.8)",
          border: "1px solid rgba(201,168,76,0.08)",
          borderRadius: "6px",
          padding: "1.5rem 2.5rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.58rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#4a4040",
            marginBottom: "0.75rem",
          }}
        >
          Nosso primeiro beijo
        </p>
        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            fontWeight: 300,
            color: "#8a7060",
            fontStyle: "italic",
          }}
        >
          08 de outubro de 2023 — há{" "}
          {kissTime.totalDays.toLocaleString("pt-BR")} dias
        </p>
      </div> */}

      {/* Special phrase */}
      <div
        className="animate-fade-in-up delay-400"
        style={{ textAlign: "center", maxWidth: "600px", marginBottom: "4rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "1px",
              flex: 1,
              maxWidth: "80px",
              background: "linear-gradient(to right, transparent, #3a3030)",
            }}
          />
          <span style={{ color: "#3a3030", fontSize: "0.8rem" }}>✦</span>
          <div
            style={{
              height: "1px",
              flex: 1,
              maxWidth: "80px",
              background: "linear-gradient(to left, transparent, #3a3030)",
            }}
          />
        </div>
        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.7,
            color: "#7a7060",
            letterSpacing: "0.02em",
          }}
        >
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            <span className="text-gold-gradient">{NAME_1}</span>
            <span style={{ color: "#3a3030", margin: "0 0.5rem" }}>×</span>
            <span className="text-gold-gradient">{NAME_2}</span>
          </h1>
        </p>
      </div>

      {/* Year navigation */}
      <div
        className="animate-fade-in-up delay-500"
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["2023", "2024", "2025", "2026"].map((year) => (
          <Link
            key={year}
            href={`/${year}`}
            style={{
              textDecoration: "none",
              padding: "0.75rem 2rem",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "3px",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#8a7a60",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = "#e8c97a";
              el.style.borderColor = "rgba(201,168,76,0.5)";
              el.style.background = "rgba(201,168,76,0.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = "#8a7a60";
              el.style.borderColor = "rgba(201,168,76,0.2)";
              el.style.background = "transparent";
            }}
          >
            {year}
          </Link>
        ))}
      </div>
    </div>
  );
}
