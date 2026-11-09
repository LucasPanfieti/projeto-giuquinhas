"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { HqChapter } from "@/app/hqs-data";

interface Props {
  hq: HqChapter;
}

export default function HqReader({ hq }: Props) {
  const [page, setPage] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const total = hq.pages.length;
  const canPrev = page > 0;
  const canNext = page < total - 1;

  const goPrev = useCallback(() => {
    setPage((p) => Math.max(0, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setPage((p) => Math.min(total - 1, p + 1));
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) goPrev();
    else goNext();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "64px",
        paddingBottom: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "2.5rem 1.25rem 0",
        }}
      >
        <Link
          href="/hqs"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.58rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#6a6050",
            textDecoration: "none",
          }}
        >
          ← HQs
        </Link>

        <div style={{ textAlign: "center", marginTop: "1.75rem" }}>
          <p
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: "#c9a84c",
              opacity: 0.75,
              marginBottom: "0.6rem",
            }}
          >
            {hq.subtitle}
          </p>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 7vw, 3.2rem)",
              fontWeight: 300,
              color: "#f0ebe0",
              lineHeight: 1.15,
            }}
          >
            {hq.title}
          </h1>
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "italic",
              fontWeight: 300,
              color: "#6a5a40",
              marginTop: "0.75rem",
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
            }}
          >
            {hq.description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1.75rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href={hq.pdf}
            download={`${hq.slug}.pdf`}
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
              padding: "0.85rem 1.4rem",
              textDecoration: "none",
              borderRadius: "2px",
            }}
          >
            Baixar PDF
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: "780px",
          margin: "2.5rem auto 0",
          padding: "0 0.75rem",
        }}
      >
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "596 / 842",
            background: "#111",
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "4px",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
            userSelect: "none",
          }}
        >
          <Image
            src={hq.pages[page]}
            alt={`${hq.title} — página ${page + 1}`}
            fill
            priority
            sizes="(max-width: 780px) 100vw, 780px"
            style={{ objectFit: "contain" }}
          />

          <button
            type="button"
            aria-label="Página anterior"
            onClick={goPrev}
            disabled={!canPrev}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "28%",
              background: "transparent",
              border: "none",
              cursor: canPrev ? "pointer" : "default",
              zIndex: 2,
            }}
          />
          <button
            type="button"
            aria-label="Próxima página"
            onClick={goNext}
            disabled={!canNext}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "28%",
              background: "transparent",
              border: "none",
              cursor: canNext ? "pointer" : "default",
              zIndex: 2,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1.25rem",
            gap: "1rem",
          }}
        >
          <button
            type="button"
            onClick={goPrev}
            disabled={!canPrev}
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: canPrev ? "#c9a84c" : "#3a3530",
              background: "transparent",
              border: `1px solid ${canPrev ? "rgba(201,168,76,0.35)" : "rgba(58,53,48,0.5)"}`,
              padding: "0.7rem 1.1rem",
              cursor: canPrev ? "pointer" : "default",
              borderRadius: "2px",
            }}
          >
            ← Anterior
          </button>

          <p
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "#6a6050",
            }}
          >
            {page + 1} / {total}
          </p>

          <button
            type="button"
            onClick={goNext}
            disabled={!canNext}
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: canNext ? "#c9a84c" : "#3a3530",
              background: "transparent",
              border: `1px solid ${canNext ? "rgba(201,168,76,0.35)" : "rgba(58,53,48,0.5)"}`,
              padding: "0.7rem 1.1rem",
              cursor: canNext ? "pointer" : "default",
              borderRadius: "2px",
            }}
          >
            Próxima →
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.4rem",
            marginTop: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          {hq.pages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para página ${i + 1}`}
              onClick={() => setPage(i)}
              style={{
                width: i === page ? "18px" : "8px",
                height: "8px",
                borderRadius: "999px",
                border: "none",
                background:
                  i === page ? "#c9a84c" : "rgba(201,168,76,0.25)",
                cursor: "pointer",
                transition: "width 0.2s ease, background 0.2s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
