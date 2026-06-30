"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGrid,
  FiSun,
  FiMonitor,
  FiLayout,
  FiCoffee,
  FiStar,
  FiCheckCircle,
  FiZap,
  FiClock,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaChair,
  FaCouch,
} from "react-icons/fa";
import {
  MdOutlineTableBar,
  MdOutlineLightMode,
} from "react-icons/md";

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


const categories = [
  { label: "Todos", icon: FiGrid },
  { label: "Sillas", icon: FaChair },
  { label: "Mesas y Barras", icon: MdOutlineTableBar },
  { label: "Salas Lounge", icon: FaCouch },
  { label: "Exhibición", icon: FiLayout },
  { label: "Decoración", icon: FiCoffee },
  { label: "Iluminación", icon: MdOutlineLightMode },
  { label: "Pantallas", icon: FiMonitor },
  { label: "Pisos", icon: FiStar },
];

const products = [
  {
    title: "Sillas Eames",
    category: "Sillas",
    image:
      "https://www.multiespacios.com.co/wp-content/uploads/2025/02/SILLAS-EAMES-e1739495807969-600x409.jpg",
    description:
      "Sillas Eames disponibles en múltiples colores. Ideales para eventos corporativos y sociales.",
  },
  {
    title: "Salas Lounge",
    category: "Salas Lounge",
    image:
      "https://www.multiespacios.com.co/wp-content/uploads/2025/02/SALAS-LOUNGE.jpg",
    description:
      "Juegos completos de sala lounge con sofás, puffs y mesas auxiliares de diseño moderno.",
  },
  {
    title: "Mesas Licradas",
    category: "Mesas y Barras",
    image:
      "https://www.multiespacios.com.co/wp-content/uploads/2025/02/MESAS-LICRADAS.jpg",
    description:
      "Mesas altas y cocktail con funda licrada en colores personalizados para tu evento.",
  },
  {
    title: "Pantallas LED",
    category: "Pantallas",
    image:
      "https://www.multiespacios.com.co/wp-content/uploads/2025/02/PANTALLA-LEDS-600x342.jpg",
    description:
      "Pantallas LED de alta resolución para conferencias, conciertos y eventos corporativos.",
  },
  {
    title: "Iluminación Profesional",
    category: "Iluminación",
    image:
      "https://www.multiespacios.com.co/wp-content/uploads/2025/02/ILUMINACION-PARA-EVENTOS-400x225.jpeg",
    description:
      "Sistemas de iluminación profesional: moving heads, barras LED, rompe-nubes y más.",
  },
  {
    title: "Counter y Estantería",
    category: "Exhibición",
    image:
      "https://www.multiespacios.com.co/wp-content/uploads/2025/02/CAUNTER-ESTANTERIA-e1739496027775-400x263.jpg",
    description:
      "Módulos de counter y estantería para exhibición de productos en ferias y showrooms.",
  },
  {
    title: "Pista de Baile en Wengue",
    category: "Pisos",
    image:
      "https://www.multiespacios.com.co/wp-content/uploads/2025/02/PISTA-EN-WENGUE-2-500x500.jpg",
    description:
      "Pisos modulares en acabado wengue para pistas de baile elegantes y duraderas.",
  },
  {
    title: "Decoración para Eventos",
    category: "Decoración",
    image:
      "https://www.multiespacios.com.co/wp-content/uploads/2025/02/DECORACION-EVENTOS-1-400x225.jpg",
    description:
      "Elementos decorativos premium: jardineras, biombos, alfombras y accesorios temáticos.",
  },
];

const guarantees = [
  {
    icon: FiCheckCircle,
    title: "Calidad garantizada",
    description: "Mobiliario en excelente estado con mantenimiento permanente.",
  },
  {
    icon: FiZap,
    title: "Soluciones flexibles",
    description: "Adaptamos el inventario a las necesidades de cada evento.",
  },
  {
    icon: FiClock,
    title: "Entrega oportuna",
    description: "Logística propia para montaje y desmontaje en todo Colombia.",
  },
];

export default function MobiliarioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

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
            <span className="text-white">Mobiliario y Accesorios</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-5">
              Mobiliario y{" "}
              <span className="text-brand-accent-light">Accesorios</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Alquiler de mobiliario premium para eventos corporativos, ferias,
              congresos y celebraciones. Sillas, mesas, salas lounge,
              iluminación, pantallas LED y pisos modulares.
            </p>
          </motion.div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                  <g.icon className="w-5 h-5 text-brand-accent-light" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {g.title}
                  </h3>
                  <p className="text-xs text-white/55 leading-relaxed">
                    {g.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FILTERS ============ */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-lg border-b border-brand-light shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 py-5">
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
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.title}
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
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Product Name Badge */}
                    {getProductNameFromUrl(product.image) && (
                      <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                        <span className="bg-brand-blue text-white text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-lg border border-white/15 uppercase tracking-wider">
                          {getProductNameFromUrl(product.image)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white text-brand-blue px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Ver detalles
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-blue/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-brand-dark/55 leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <a
                        href={`https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20me%20interesa%20cotizar%20${encodeURIComponent(product.title)}`}
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-dark/40 text-lg">
                No hay productos en esta categoría aún.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-brand-blue/20 relative overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <FiSun className="w-12 h-12 text-brand-accent-light mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">
                ¿Necesitas mobiliario para tu evento?
              </h2>
              <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto">
                Cuéntanos los detalles de tu evento y armamos un paquete de
                mobiliario a tu medida. Cotización sin compromiso en menos de 24
                horas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20necesito%20cotizar%20mobiliario%20para%20un%20evento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-brand-green/25"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Solicitar cotización
                </a>
                 <a
                   href="mailto:abcmultiespacios@gmail.com"
                   className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-base font-semibold border border-white/20 transition-all"
                 >
                   Escribir por correo
                 </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
