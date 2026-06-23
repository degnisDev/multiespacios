import Link from "next/link";
import Image from "next/image";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
import { FaYoutube, FaTiktok } from "react-icons/fa";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Carpas", href: "/carpas" },
  { label: "Estructuras y Tarimas", href: "/estructuras" },
  { label: "Mobiliario", href: "/mobiliario" },
  { label: "Ferias y Stands", href: "/stands" },
  { label: "Atracciones", href: "/atracciones" },
];

const services = [
  "Carpas",
  "Estructuras y Tarimas",
  "Mobiliario",
  "Ferias y Stands",
  "Atracciones",
];

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/imagenes/logos/image18.png"
              alt="Multiespacios S.A.S."
              width={180}
              height={60}
              className="h-14 w-auto object-contain mb-6"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Más de 35 años creando experiencias que inspiran. Somos líderes en
              diseño de arquitectura efímera y producción de eventos en
              Colombia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/multiespaciossas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.facebook.com/multiespaciossas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-5 relative">
              Enlaces Rápidos
              <span className="block w-8 h-0.5 bg-brand-accent mt-2 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white hover:pl-1 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-5 relative">
              Servicios
              <span className="block w-8 h-0.5 bg-brand-accent mt-2 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-5 relative">
              Contacto
              <span className="block w-8 h-0.5 bg-brand-accent mt-2 rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiPhone className="w-4 h-4 mt-0.5 text-brand-accent-light flex-shrink-0" />
                <div className="text-sm">
                  <a
                    href="tel:+573125575477"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    312 557 5477
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="w-4 h-4 mt-0.5 text-brand-accent-light flex-shrink-0" />
                <a
                  href="mailto:abcmultiespacios@gmail.com"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  abcmultiespacios@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 mt-0.5 text-brand-accent-light flex-shrink-0" />
                <span className="text-sm text-white/70">
                  Bogotá, Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Multiespacios S.A.S. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <Link href="#" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
