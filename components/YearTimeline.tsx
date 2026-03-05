"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { YearData } from "../app/data";

interface Props {
  data: YearData;
}

export default function YearTimeline({ data }: Props) {
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Stagger reveal
    data.moments.forEach((_, i) => {
      setTimeout(
        () => {
          setVisible((prev) => new Set([...prev, i]));
        },
        150 * i + 100,
      );
    });
  }, [data.moments]);

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "64px",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "100px 2rem 6rem",
      }}
    >
      {/* Year header */}
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <p
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "#4a4040",
            marginBottom: "0.75rem",
          }}
        >
          Nossa história —
        </p>
        <h1
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(5rem, 15vw, 10rem)",
            fontWeight: 300,
            lineHeight: 0.9,
            background:
              "linear-gradient(135deg, #2a2420 0%, #c9a84c 40%, #e8c97a 60%, #2a2420 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 5s linear infinite",
          }}
        >
          {data.year}
        </h1>
        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#6a5a40",
            marginTop: "0.5rem",
          }}
        >
          {data.subtitle}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <div
            style={{
              height: "1px",
              width: "80px",
              background:
                "linear-gradient(to right, transparent, rgba(201,168,76,0.3))",
            }}
          />
          <span style={{ color: "rgba(201,168,76,0.3)", fontSize: "0.7rem" }}>
            ✦
          </span>
          <div
            style={{
              height: "1px",
              width: "80px",
              background:
                "linear-gradient(to left, transparent, rgba(201,168,76,0.3))",
            }}
          />
        </div>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Center line */}
        <div className="timeline-line" />

        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          {data.moments.map((moment, i) => {
            const isLeft = i % 2 === 0;
            const isHighlight = moment.highlight;

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  position: "relative",
                  marginBottom: "3rem",
                  opacity: visible.has(i) ? 1 : 0,
                  transform: visible.has(i)
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                {/* Dot on timeline */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "24px",
                    transform: "translateX(-50%)",
                    width: isHighlight ? "14px" : "10px",
                    height: isHighlight ? "14px" : "10px",
                    borderRadius: "50%",
                    background: isHighlight ? "#c9a84c" : "#3a3020",
                    border: isHighlight
                      ? "2px solid #e8c97a"
                      : "1px solid #4a4030",
                    boxShadow: isHighlight
                      ? "0 0 20px rgba(201,168,76,0.5)"
                      : "none",
                    zIndex: 2,
                  }}
                />

                {/* Card */}
                <div
                  className="photo-card"
                  style={{
                    width: "calc(50% - 3rem)",
                    background: isHighlight
                      ? "rgba(25,20,15,0.95)"
                      : "rgba(18,18,18,0.9)",
                    border: isHighlight
                      ? "1px solid rgba(201,168,76,0.3)"
                      : "1px solid rgba(42,42,42,0.8)",
                    borderRadius: "6px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {isHighlight && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background:
                          "linear-gradient(to right, transparent, #c9a84c, transparent)",
                      }}
                    />
                  )}

                  {/* Photo */}
                  {moment.photo ? (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "200px",
                      }}
                    >
                      <Image
                        src={moment.photo}
                        alt={moment.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ) : (
                    <div
                      className="photo-placeholder"
                      style={{ height: "160px", position: "relative" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "2rem", marginBottom: "8px" }}>
                          {moment.emoji || "📷"}
                        </div>
                        <div
                          style={{
                            fontSize: "0.55rem",
                            letterSpacing: "0.2em",
                            color: "#3a3530",
                          }}
                        >
                          adicione uma foto
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                    <p
                      style={{
                        fontFamily: "Jost, sans-serif",
                        fontSize: "0.58rem",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "#c9a84c",
                        marginBottom: "0.5rem",
                        opacity: 0.7,
                      }}
                    >
                      {moment.date}
                    </p>
                    <h3
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                        fontWeight: 300,
                        color: "#f0ebe0",
                        marginBottom: "0.75rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {moment.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Jost, sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: 300,
                        color: "#6a6050",
                        lineHeight: 1.7,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {moment.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
