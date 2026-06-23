"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Carpas", href: "/carpas" },
  { label: "Estructuras y Tarimas", href: "/estructuras" },
  { label: "Mobiliario", href: "/mobiliario" },
  { label: "Ferias y Stands", href: "/stands" },
  { label: "Atracciones", href: "/atracciones" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        scrolled || mobileOpen
          ? "bg-brand-blue/95 backdrop-blur-lg shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >

      <nav
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-20 py-2" : "h-32 py-4"
        }`}
      >
        {/* Logo (Tripled size: height 28 in reposo, 14 when scrolled) */}
        <Link href="/" className="flex-shrink-0 relative block transition-all duration-500">
          <Image
            src="/imagenes/logos/image18.png"
            alt="Multiespacios S.A.S."
            width={300}
            height={112}
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? "h-14" : "h-28"
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav (Reordered, bigger font, matching color scheme) */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-2.5 text-base lg:text-lg font-semibold rounded-full transition-all duration-300 ${
                pathname === link.href
                  ? "text-white bg-white/15 shadow-sm"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green hover:bg-brand-green-dark text-white px-7 py-3 rounded-full text-base font-semibold transition-all hover:shadow-lg hover:shadow-brand-green/30 hover:-translate-y-0.5 flex items-center gap-2 animate-pulse-glow"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Cotizar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <FiX className="w-7 h-7" />
          ) : (
            <FiMenu className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-brand-blue border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3.5 text-lg font-semibold rounded-lg transition-colors ${
                    pathname === link.href
                      ? "text-white bg-white/15"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 bg-brand-green text-white text-center px-6 py-3.5 rounded-full text-base font-semibold transition-all hover:bg-brand-green-dark"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
