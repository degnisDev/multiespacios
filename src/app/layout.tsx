import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Multiespacios S.A.S. | Alquiler de Carpas, Stands y Mobiliario para Eventos",
  description:
    "Más de 35 años de experiencia en diseño de arquitectura efímera, alquiler de carpas, stands, mobiliario y producción de eventos empresariales en Colombia.",
  keywords: [
    "alquiler carpas",
    "stands para ferias",
    "mobiliario eventos",
    "producción de eventos",
    "Multiespacios",
    "Colombia",
  ],
  openGraph: {
    title: "Multiespacios S.A.S. | Experiencias que Inspiran",
    description:
      "Soluciones integrales para eventos, ferias e industria. Carpas, stands, mobiliario y más.",
    url: "https://www.multiespacios.com.co",
    siteName: "Multiespacios S.A.S.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
