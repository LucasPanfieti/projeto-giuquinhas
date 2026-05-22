import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

export const metadata: Metadata = {
  title: "GiuQuinhas ♥",
  description: "Nossa história de amor",
  applicationName: "GiuQuinhas",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "GiuQuinhas ♥",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    title: "GiuQuinhas ♥",
    description: "Nossa história de amor",
  },
};

export const viewport: Viewport = {
  themeColor: [{ color: "#c9a84c" }],
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ServiceWorkerRegister />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* Ambient background orbs */}
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "-10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "fixed",
            bottom: "10%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(160,80,96,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      </body>
    </html>
  );
}
