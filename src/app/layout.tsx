import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GiuQuinhas ♥",
  description: "Uma história de amor contada em fotos e memórias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
