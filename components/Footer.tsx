export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        marginTop: "2rem",
        padding: "2rem 2rem 2rem",
        textAlign: "center",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient line on top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)",
        }}
      />

      {/* Names */}
      <p
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          fontWeight: 300,
          letterSpacing: "0.15em",
          marginBottom: "0.5rem",
          background:
            "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "shimmer 5s linear infinite",
        }}
      >
        GiuQuinhas
      </p>

      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1.25rem",
        }}
      >
        <div
          style={{
            height: "1px",
            width: "60px",
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.15))",
          }}
        />
        <span
          className="heartbeat"
          style={{
            color: "rgba(201,168,76,0.35)",
            fontSize: "0.8rem",
          }}
        >
          ♥
        </span>
        <div
          style={{
            height: "1px",
            width: "60px",
            background:
              "linear-gradient(to left, transparent, rgba(201,168,76,0.15))",
          }}
        />
      </div>

      {/* Caption */}
      <p
        style={{
          fontFamily: "Jost, sans-serif",
          fontSize: "0.55rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#3a3530",
        }}
      >
        feito com amor · {year}
      </p>
    </footer>
  );
}
