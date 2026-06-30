"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiAward,
  FiMapPin,
  FiShield,
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiTruck,
  FiUsers,
  FiGrid,
  FiChevronLeft,
  FiChevronRight,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaCampground,
  FaChair,
  FaCubes,
  FaLayerGroup,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const stats = [
  { icon: FiAward, value: "35+", label: "Años de experiencia" },
  { icon: FiMapPin, value: "Nacional", label: "Cobertura en Colombia" },
  { icon: FiShield, value: "100%", label: "Montaje certificado" },
];

const services = [
  {
    icon: FaCampground,
    title: "Carpas",
    description:
      "Carpas tipo pagoda, a dos aguas, hangares y domos especiales para garantizar la cobertura de tu evento al aire libre.",
    image: "/imagenes/productosyservicios/p3.webp",
    href: "/carpas",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    icon: FaCubes,
    title: "Estructuras y Tarimas",
    description:
      "Sistemas de truss, escenarios certificados, pasarelas y techos estructurados para producciones masivas.",
    image: "/imagenes/productosyservicios/p4.webp",
    href: "/estructuras",
    color: "from-purple-600 to-purple-800",
  },
  {
    icon: FaChair,
    title: "Mobiliario",
    description:
      "Alquiler de sillas, mesas, salas lounge, barras de bar y mobiliario de diseño exclusivo para tus invitados.",
    image: "/imagenes/productosyservicios/p2.webp",
    href: "/mobiliario",
    color: "from-amber-600 to-amber-800",
  },
  {
    icon: FaLayerGroup,
    title: "Ferias y Stands",
    description:
      "Diseño, fabricación y montaje de stands personalizados para ferias y exposiciones comerciales de alto impacto.",
    image: "/imagenes/productosyservicios/p1.webp",
    href: "/stands",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: FiStar,
    title: "Atracciones",
    description:
      "Alquiler de inflables gigantes, juegos mecánicos y atracciones interactivas ideales para activaciones familiares y corporativas.",
    image: "/imagenes/productosyservicios/p5.webp",
    href: "/atracciones",
    color: "from-rose-600 to-rose-800",
  },
];

const values = [
  {
    icon: FiStar,
    title: "Experiencia",
    description:
      "Más de tres décadas diseñando y ejecutando proyectos de arquitectura efímera y eventos empresariales en Colombia.",
  },
  {
    icon: FiShield,
    title: "Seguridad",
    description:
      "Todos nuestros montajes y estructuras cumplen rigurosamente con la normativa vigente y protocolos certificados.",
  },
  {
    icon: FiTruck,
    title: "Cobertura Nacional",
    description:
      "Logística y transporte propios con capacidad de atender tus proyectos de forma oportuna en cualquier rincón del país.",
  },
  {
    icon: FiAward,
    title: "Precios Competitivos",
    description:
      "Maximizamos tu inversión ofreciendo tarifas altamente competitivas, garantizando la mejor relación calidad-precio del mercado sin comprometer el diseño.",
  },
  {
    icon: FiCheckCircle,
    title: "Instalación sin Estrés",
    description:
      "No tienes que preocuparte por nada, nosotros lo hacemos todo. Nuestro equipo técnico experto se encarga del montaje y desmontaje seguro.",
  },
  {
    icon: FiUsers,
    title: "Acompañamiento",
    description:
      "Te brindamos consultoría especializada y asesoría de principio a fin para conceptualizar, diseñar y producir tu evento de forma impecable.",
  },
];


const clientLogos = [
  "Marca 1.webp",
  "Marca 2.webp",
  "Marca 3.webp",
  "Marca 4.webp",
  "Marca 5.webp",
  "Marca 6.webp",
  "Marca 7.webp",
  "Marca 8.webp",
  "Marca 9.webp",
  "Marca 10.webp",
  "Marca 11.webp",
];

function Counter({
  value,
  duration = 1500,
  trigger = false,
  suffix = "",
}: {
  value: number;
  duration?: number;
  trigger?: boolean;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Curve: easeOutQuad
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration, trigger]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const [showOtherStats, setShowOtherStats] = useState(false);
  const [activeTab, setActiveTab] = useState<"alquiler" | "sociedad" | "compra">("alquiler");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (startCount) {
      const timer = setTimeout(() => {
        setShowOtherStats(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [startCount]);

  useEffect(() => {
    // Fallback: trigger counting anyway after 1.5s in case onAnimationComplete doesn't fire
    const timer = setTimeout(() => {
      setStartCount(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const [logoIndex, setLogoIndex] = useState(0);
  const [isHoveringLogos, setIsHoveringLogos] = useState(false);
  const [maxLogoIndex, setMaxLogoIndex] = useState(6); // Default for desktop (11 - 5 = 6)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setMaxLogoIndex(9); // Mobile: 11 - 2 = 9
      } else if (width < 1024) {
        setMaxLogoIndex(7); // Tablet: 11 - 4 = 7
      } else {
        setMaxLogoIndex(6); // Desktop: 11 - 5 = 6
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextLogo = () => {
    setLogoIndex((prev) => (prev >= maxLogoIndex ? 0 : prev + 1));
  };

  const prevLogo = () => {
    setLogoIndex((prev) => (prev <= 0 ? maxLogoIndex : prev - 1));
  };

  useEffect(() => {
    if (isHoveringLogos) return;
    const interval = setInterval(() => {
      nextLogo();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHoveringLogos, maxLogoIndex]);

  useEffect(() => {
    if (logoIndex > maxLogoIndex) {
      setLogoIndex(maxLogoIndex);
    }
  }, [maxLogoIndex, logoIndex]);

  const y = scrollY * 0.35;

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-brand-blue">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            style={{ transform: `translate3d(0, ${y}px, 0)` }} 
            className="absolute -top-[15%] inset-x-0 w-full h-[130%]"
          >
            <Image
              src="/imagenes/Hero/GSP-3.webp"
              alt="Evento Multiespacios"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/85 via-brand-blue/60 to-brand-blue/25" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-44 w-full">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              onAnimationComplete={() => setStartCount(true)}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.1] mb-6"
            >
              Soluciones integrales para{" "}
              <span className="text-brand-accent-light">eventos corporativos</span>{" "}
              y sociales
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl"
            >
              Diseño de stands, alquiler de carpas, mobiliario y producción de
              eventos empresariales. Experiencias que inspiran desde 1990.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-brand-green/25 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="w-5 h-5" />
                Cotizar por WhatsApp
              </a>
              <Link
                href="/stands"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base font-semibold border border-white/20 transition-all hover:-translate-y-0.5"
              >
                Ver servicios
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats Bar (Desktop) */}
        <div className="absolute bottom-12 left-0 right-0 z-20 max-w-7xl mx-auto px-6 hidden md:block">
          <div className="bg-brand-blue/75 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10">
            <div className="grid grid-cols-4 gap-8">
              {/* Stat 1 */}
              <div className="flex items-center gap-4 border-r border-white/10 last:border-0 pr-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-accent-light flex-shrink-0">
                  <FiAward className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-white select-none">
                    <Counter value={35} trigger={startCount} suffix="+" />
                  </div>
                  <div className="text-xs lg:text-sm text-white/70 font-medium leading-tight mt-0.5">Años de Experiencia</div>
                </div>
              </div>
              {/* Stat 2 */}
              <div className="flex items-center gap-4 border-r border-white/10 last:border-0 pr-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-accent-light flex-shrink-0">
                  <FiCheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-white select-none">
                    <Counter value={500} trigger={startCount} suffix="+" />
                  </div>
                  <div className="text-xs lg:text-sm text-white/70 font-medium leading-tight mt-0.5">Proyectos Exitosos</div>
                </div>
              </div>
              {/* Stat 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                animate={showOtherStats ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-4 border-r border-white/10 last:border-0 pr-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-accent-light flex-shrink-0">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-white">Nacional</div>
                  <div className="text-xs lg:text-sm text-white/70 font-medium leading-tight mt-0.5">Cobertura Nacional</div>
                </div>
              </motion.div>
              {/* Stat 4 */}
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                animate={showOtherStats ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                className="flex items-center gap-4 last:border-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-accent-light flex-shrink-0">
                  <FiShield className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-white">100%</div>
                  <div className="text-xs lg:text-sm text-white/70 font-medium leading-tight mt-0.5">Estructuras Certificadas</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats Section (Mobile Only) */}
      <div className="block md:hidden bg-brand-blue border-b border-brand-light py-8 px-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-accent-light flex-shrink-0">
              <FiAward className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white select-none">
                <Counter value={35} trigger={startCount} suffix="+" />
              </div>
              <div className="text-xs text-white/60 font-medium leading-tight">Años de Exp.</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-accent-light flex-shrink-0">
              <FiCheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white select-none">
                <Counter value={500} trigger={startCount} suffix="+" />
              </div>
              <div className="text-xs text-white/60 font-medium leading-tight">Proyectos</div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={showOtherStats ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 bg-white/5 rounded-2xl p-4 border border-white/10"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-accent-light flex-shrink-0">
              <FiMapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white">Nacional</div>
              <div className="text-xs text-white/60 font-medium leading-tight">Cobertura</div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={showOtherStats ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="flex items-center gap-3 bg-white/5 rounded-2xl p-4 border border-white/10"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-accent-light flex-shrink-0">
              <FiShield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white">100%</div>
              <div className="text-xs text-white/60 font-medium leading-tight">Certificado</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============ SERVICES SECTION ============ */}
      <section className="pt-12 pb-24 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="text-3xl md:text-4xl font-display font-bold text-brand-accent mb-4"
            >
              Productos y servicios
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-brand-dark/60 max-w-2xl mx-auto"
            >
              Equipos, estructuras y mobiliario de Alta calidad para todo tipo de eventos e instalaciones
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                custom={i}
                className={i < 2 ? "md:col-span-1 lg:col-span-3" : "md:col-span-1 lg:col-span-2"}
              >
                <Link href={service.href} className="group block">
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-brand-light">
                    {/* Image */}
                    <div className={`relative overflow-hidden ${i < 2 ? "h-64 lg:h-80 xl:h-96" : "h-64 lg:h-72"}`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-brand-blue shadow-lg">
                          <service.icon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-brand-dark/60 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent group-hover:gap-2 transition-all">
                        Ver más
                        <FiArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* BANNER: Producción de Eventos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            custom={5}
            className="mt-16 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-light"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Image Half */}
              <div className="relative h-[300px] lg:h-full lg:min-h-[450px] overflow-hidden group">
                <Image
                  src="/imagenes/Eventos/eventos.webp"
                  alt="Producción de Eventos"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 via-transparent to-transparent" />
              </div>

              {/* Content Half */}
              <div className="p-8 md:p-12 lg:p-16">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-accent mb-6 shadow-sm">
                  <FiStar className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-extrabold text-brand-blue mb-3">
                  Producción de Eventos
                </h3>
                <h4 className="text-lg font-bold text-brand-dark/80 mb-4">
                  Decoración de Eventos y Escenografía
                </h4>
                <p className="text-base text-brand-dark/60 leading-relaxed mb-8">
                  Nos encargamos de todo tu evento, desde el montaje, luces, escenografía, sonido, transporte y cada detalle logístico para garantizar que tu producción sea un éxito total sin preocupaciones.
                </p>
                
                <Link
                  href="/produccion"
                  className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-7 py-3.5 rounded-full text-sm md:text-base font-semibold transition-all shadow-lg hover:shadow-brand-green/30 hover:-translate-y-0.5"
                >
                  Ver más
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============ LAUNCH SECTION (TOBOGÁN ARCOÍRIS) ============ */}
      <section className="pt-12 pb-24 bg-gradient-to-b from-white via-brand-light/10 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-accent mb-4">
              Lanzamiento
            </h2>
            <p className="text-brand-dark/60 max-w-2xl mx-auto text-base md:text-lg">
              Atracción estrella para eventos y aliados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-light aspect-[4/3] md:aspect-auto md:h-[480px] group bg-brand-light/35">
                <Image
                  src="/imagenes/lanzamiento/tobogan_Arcoiris.webp"
                  alt="Tobogán Arcoíris"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/35 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-brand-blue mb-4 leading-tight">
                Tobogán Arcoíris
              </h3>
              <p className="text-brand-dark/70 text-sm md:text-base leading-relaxed mb-8">
                Diversión que impacta, segura y de alto flujo. Una oportunidad de negocio rentable que hace inolvidable tu evento y dinamiza tus espacios comerciales.
              </p>

              {/* Segmented Control / Tabs */}
              <div className="flex p-1 bg-brand-light/80 backdrop-blur-sm rounded-2xl border border-brand-dark/5 gap-1 mb-8 max-w-md">
                {(["alquiler", "sociedad", "compra"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2.5 px-4 text-xs md:text-sm font-semibold rounded-xl transition-all capitalize select-none cursor-pointer ${
                      activeTab === tab
                        ? "bg-brand-blue text-white shadow-md"
                        : "text-brand-dark/60 hover:text-brand-dark hover:bg-brand-dark/5"
                    }`}
                  >
                    {tab === "sociedad" ? "Alianzas" : tab}
                  </button>
                ))}
              </div>

              {/* Tab Details */}
              <div className="min-h-[120px] mb-8">
                <h3 className="text-lg font-bold text-brand-blue mb-2">
                  {activeTab === "alquiler" && "Alquiler de Alto Impacto"}
                  {activeTab === "sociedad" && "Alianza Comercial (Sociedad)"}
                  {activeTab === "compra" && "Venta y Alta Rentabilidad"}
                </h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed">
                  {activeTab === "alquiler" &&
                    "Ideal para activaciones de marca, ferias, conciertos y eventos masivos corporativos o sociales. Ofrecemos instalación rápida a nivel nacional de 1 a 3 carriles, adaptándonos tanto a terrenos planos como a pendientes naturales."}
                  {activeTab === "sociedad" &&
                    "Un modelo de ingresos compartidos (Revenue Share) sin necesidad de inversión en el equipo. Instalamos la atracción en tu espacio comercial de alto flujo (centro comercial, parque de diversiones) y operamos de la mano dividiendo las ganancias."}
                  {activeTab === "compra" &&
                    "Adquiere el Tobogán Arcoíris completo para tu parque o negocio de entretenimiento. Es un modelo altamente rentable y probado, con un retorno de inversión (ROI) estimado en menos de un año."}
                </p>
              </div>

              {/* Dynamic CTA */}
              <a
                href={
                  activeTab === "alquiler"
                    ? "https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20me%20interesa%20cotizar%20el%20ALQUILER%20del%20Tobogán%20Arcoíris%20para%20un%20evento."
                    : activeTab === "sociedad"
                    ? "https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20me%20interesa%20proponer%20una%20ALIANZA%20COMERCIAL%20o%20SOCIEDAD%20para%20el%20Tobogán%20Arcoíris."
                    : "https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20quiero%20recibir%20información%20sobre%20la%20COMPRA%20del%20Tobogán%20Arcoíris."
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-brand-green/25"
              >
                <FaWhatsapp className="w-5 h-5" />
                {activeTab === "alquiler" && "Cotizar Alquiler"}
                {activeTab === "sociedad" && "Proponer Alianza"}
                {activeTab === "compra" && "Solicitar Información"}
              </a>
            </motion.div>
          </div>

          {/* Hexagonal Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-brand-light">
            {[
              { icon: FiShield, title: "Seguridad garantizada", text: "Estructuras certificadas con mallas y piscinas de pelotas de aterrizaje." },
              { icon: FiStar, title: "Diversión sin límites", text: "Una experiencia inolvidable diseñada para niños y adultos." },
              { icon: FiGrid, title: "Alto impacto visual", text: "Colores vibrantes tipo arcoíris que capturan la atención a gran distancia." },
              { icon: FiUsers, title: "Ideal para todo evento", text: "Excelente para ferias, centros comerciales, parques y activaciones." }
            ].map((feat, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                  <feat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-blue">{feat.title}</h4>
                  <p className="text-xs text-brand-dark/55 mt-1.5 leading-relaxed">{feat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUES / TRUST ============ */}
      <section className="pt-12 pb-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            >
              ¿Por qué elegirnos?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-white/60 max-w-2xl mx-auto"
            >
              Tu evento en manos de expertos con infraestructura certificada y cobertura nacional.
            </motion.p>
          </motion.div>

          {/* Infinite Scroll Marquee Ticker */}
          <div className="relative overflow-hidden w-full py-4 select-none">
            {/* Fade Overlays */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-blue to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-blue to-transparent pointer-events-none z-10" />

            {/* Marquee track */}
            <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
              {[...values, ...values].map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={`${value.title}-${i}`}
                    className="w-[280px] md:w-[320px] flex-shrink-0 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.03] flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-5 text-brand-accent-light">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed whitespace-normal">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Clients row (Interactive Carousel) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 text-center relative"
            onMouseEnter={() => setIsHoveringLogos(true)}
            onMouseLeave={() => setIsHoveringLogos(false)}
          >
            <p className="text-xs uppercase tracking-widest text-white/40 mb-8 font-semibold">
              Empresas que confían en nosotros
            </p>

            <div className="relative max-w-5xl mx-auto px-12 group/carousel">
              {/* Left Arrow Button */}
              <button
                onClick={prevLogo}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 z-20 cursor-pointer shadow-lg hover:scale-105"
                aria-label="Anterior logotipo"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>

              {/* Slider Viewport */}
              <div className="overflow-hidden w-full py-2">
                {/* Inline stylesheet to ensure CSS variables are always loaded responsively without dev-server/caching mismatches */}
                <style>{`
                  .logo-track-custom {
                    display: flex;
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    --logo-width: 50%;
                  }
                  @media (min-width: 768px) {
                    .logo-track-custom {
                      --logo-width: 25%;
                    }
                  }
                  @media (min-width: 1024px) {
                    .logo-track-custom {
                      --logo-width: 20%;
                    }
                  }
                `}</style>
                <div
                  className="flex logo-track-custom"
                  style={{
                    transform: `translate3d(calc(-${logoIndex} * var(--logo-width)), 0, 0)`,
                  }}
                >
                  {clientLogos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 flex items-center justify-center px-3"
                      style={{ width: "var(--logo-width)" }}
                    >
                      <div className="bg-white rounded-2xl p-4 w-full h-28 md:h-32 flex items-center justify-center shadow-md opacity-65 hover:opacity-100 transition-all duration-300 hover:scale-120 select-none">
                        <Image
                          src={`/imagenes/empresas/${logo}`}
                          alt={`Logo cliente ${idx + 1}`}
                          width={200}
                          height={100}
                          className="object-contain max-h-16 md:max-h-24 pointer-events-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={nextLogo}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 z-20 cursor-pointer shadow-lg hover:scale-105"
                aria-label="Siguiente logotipo"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxLogoIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setLogoIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    logoIndex === idx ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir al logotipo ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ UBICACIÓN ============ */}
      <section className="pt-12 pb-24 bg-white border-t border-brand-light/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-accent mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-brand-dark/60 max-w-2xl mx-auto text-base md:text-lg">
              Encuéntranos en nuestra sede principal. Siempre estamos listos para atenderte y hacer realidad tus proyectos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-brand-light/10 rounded-3xl p-6 md:p-10 border border-brand-light shadow-sm">
            {/* Mapa de Google (Iframe) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-brand-light/50 group"
            >
              <iframe
                src="https://maps.google.com/maps?q=Multiespacios+SAS,+Bogota&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              ></iframe>
            </motion.div>

            {/* Datos de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-4"
            >
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-brand-blue mb-8">
                Datos de Contacto
              </h3>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark/80 uppercase tracking-wider mb-1">Dirección</h4>
                    <p className="text-brand-dark/70 text-base md:text-lg">Cra 87 # 84 A – 25 , Bogotá</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark/80 uppercase tracking-wider mb-1">Teléfono y WhatsApp</h4>
                    <p className="text-brand-dark/70 text-base md:text-lg">312 557 54 77 – 313 882 31 64</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark/80 uppercase tracking-wider mb-1">Correo</h4>
                    <p className="text-brand-dark/70 text-base md:text-lg">comercial@multiespacios.com.co</p>
                  </div>
                </li>
              </ul>

              <a
                href="https://www.google.com/maps/place/Multiespacios+SAS/@4.7071916,-74.0991715,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f84cadb68466d:0xc2d8f2839d6d3c14!8m2!3d4.7071916!4d-74.0991715!16s%2Fg%2F1pv05jl89?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5"
              >
                <FiMapPin className="w-5 h-5" />
                Abrir en Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.multiespacios.com.co/wp-content/uploads/2025/02/Stand-4-x4-800x600.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-light/92" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue mb-5">
              ¿Listo para crear una experiencia inolvidable?
            </h2>
            <p className="text-brand-dark/70 mb-10 text-lg">
              Cuéntanos sobre tu proyecto y recibe una cotización personalizada
              en menos de 24 horas.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20quiero%20cotizar%20un%20evento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-brand-green/25"
              >
                <FaWhatsapp className="w-5 h-5" />
                Solicitar cotización
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
