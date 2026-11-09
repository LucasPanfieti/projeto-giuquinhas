import Image from "next/image";
import Link from "next/link";
import { hqsData } from "../hqs-data";

export default function HqsPage() {
  const chapters = hqsData.filter((hq) => hq.published);

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "64px",
        paddingBottom: "5rem",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "4rem 1.5rem 0",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
            Nossa história em quadrinhos
          </p>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(3.5rem, 12vw, 7rem)",
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
            HQs
          </h1>
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#6a5a40",
              marginTop: "0.75rem",
            }}
          >
            Capítulos da nossa história
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            justifyItems: "center",
          }}
        >
          {chapters.map((hq) => (
            <Link
              key={hq.slug}
              href={`/hqs/${hq.slug}`}
              style={{
                textDecoration: "none",
                width: "100%",
                maxWidth: "320px",
                display: "block",
              }}
            >
              <article
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "596 / 842",
                    border: "1px solid rgba(201,168,76,0.22)",
                    borderRadius: "4px",
                    overflow: "hidden",
                    background: "#111",
                    boxShadow: "0 18px 50px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src={hq.cover}
                    alt={hq.title}
                    fill
                    sizes="320px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                <div style={{ marginTop: "1.1rem", textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "Jost, sans-serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.4em",
                      textTransform: "uppercase",
                      color: "#c9a84c",
                      opacity: 0.75,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {hq.subtitle}
                  </p>
                  <h2
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.45rem",
                      fontWeight: 300,
                      color: "#f0ebe0",
                      lineHeight: 1.25,
                    }}
                  >
                    {hq.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "Jost, sans-serif",
                      fontSize: "0.75rem",
                      color: "#6a6050",
                      marginTop: "0.55rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {hq.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
