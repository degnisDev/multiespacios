"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { categories, stands } from "./data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

// Helper function to extract and format product name from image URL
const getProductNameFromUrl = (url: string) => {
  if (!url || url.startsWith("http")) return ""; // Ignore external urls if they don't look clean
  const parts = url.split("/");
  const filenameWithExt = parts[parts.length - 1];
  const filename = filenameWithExt.split(".")[0];
  const decoded = decodeURIComponent(filename).replace(/[-_]/g, " ").trim();
  return decoded.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
};



export default function StandsPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredStands =
    activeCategory === "Todos"
      ? stands
      : stands.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* ============ HEADER ============ */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue pt-36 lg:pt-44 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-white">Ferias y Stands</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-5">
              Portafolio de{" "}
              <span className="text-brand-accent-light">Stands</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Diseñamos y fabricamos stands personalizados para ferias,
              exposiciones y eventos comerciales. Cada proyecto refleja la
              identidad de tu marca con acabados de primera calidad y montaje
              profesional incluido.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ FILTERS ============ */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-lg border-b border-brand-light shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start md:justify-center gap-3 py-5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-base font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.label
                    ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                    : "bg-brand-light/60 text-brand-dark/70 hover:bg-brand-light hover:text-brand-dark"
                }`}
              >
                <cat.icon className="w-5 h-5" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="py-16 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStands.map((stand, i) => (
              <motion.div
                key={stand.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeInUp}
                custom={i}
                layout
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-brand-light">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={stand.image}
                      alt={stand.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Product Name Badge */}
                    {getProductNameFromUrl(stand.image) && (
                      <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                        <span className="bg-brand-blue text-white text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-lg border border-white/15 uppercase tracking-wider">
                          {getProductNameFromUrl(stand.image)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Hover overlay button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white text-brand-blue px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Ver detalles
                      </span>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-blue/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                        {stand.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-brand-dark mb-1 group-hover:text-brand-blue transition-colors">
                      {stand.title}
                    </h3>
                    <p className="text-xs text-brand-accent font-semibold mb-2">
                      {stand.dimensions}
                    </p>
                    <p className="text-sm text-brand-dark/55 leading-relaxed mb-4">
                      {stand.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <a
                        href={`https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20me%20interesa%20cotizar%20el%20${encodeURIComponent(stand.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:text-brand-green-dark transition-colors"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        Cotizar
                      </a>
                      <span className="text-brand-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                        Detalles
                        <FiArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredStands.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-dark/40 text-lg">
                No hay stands en esta categoría aún.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.multiespacios.com.co/wp-content/uploads/2025/02/Stand-3m-x-2m-800x600.jpg"
            alt="Stand Multiespacios"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 to-brand-blue/80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">
              ¿Necesitas un stand a la medida?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Diseñamos tu stand según las dimensiones, identidad de marca y
              objetivos comerciales de tu empresa. Solicita tu cotización sin
              compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20necesito%20un%20stand%20para%20una%20feria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-brand-green/25"
              >
                <FaWhatsapp className="w-5 h-5" />
                Cotizar mi stand
              </a>
              <a
                href="tel:+573125575477"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-base font-semibold border border-white/20 transition-all"
              >
                Hablar con un asesor
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
