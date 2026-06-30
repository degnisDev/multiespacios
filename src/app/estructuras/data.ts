import { IconType } from "react-icons";
import { FiGrid, FiLayers, FiMaximize } from "react-icons/fi";

export interface Category {
  label: string;
  icon: IconType;
}

export interface Stand {
  title: string;
  category: string;
  dimensions: string;
  image: string | string[];
  description: string;
}

export const categories: Category[] = [
  { label: "Todos", icon: FiGrid },
  { label: "Tarimas", icon: FiLayers },
  { label: "Estructuras", icon: FiMaximize },
];

const placeholderImg = "/imagenes/2_Estructuras_y_tarimas/tarimas.webp";

export const stands: Stand[] = [
  // TARIMAS
  {
    title: "Tarima tipo Americana",
    category: "Tarimas",
    dimensions: "Personalizable",
    image: [placeholderImg, placeholderImg],
    description: "Tarima elegante y resistente para espacios interiores, ideal para presentaciones, conferencias y eventos corporativos.",
  },
  {
    title: "Tarima en Vidrio",
    category: "Tarimas",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "Plataforma sofisticada con superficie de vidrio, perfecta para eventos de gala, pasarelas y activaciones de alto nivel.",
  },
  {
    title: "Tarima Tradicional",
    category: "Tarimas",
    dimensions: "Personalizable",
    image: [placeholderImg, placeholderImg, placeholderImg],
    description: "Estructura robusta y segura diseñada para soportar las condiciones del clima en conciertos y eventos masivos al aire libre.",
  },
  {
    title: "Tarima tipo Scaffold",
    category: "Tarimas",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "Sistema modular altamente versátil que permite configuraciones complejas y alturas ajustables según las necesidades del escenario.",
  },

  // ESTRUCTURAS
  {
    title: "Estructura Truss",
    category: "Estructuras",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "Sistemas de aluminio modulares esenciales para el soporte seguro de iluminación, sonido y pantallas gigantes.",
  },
  {
    title: "Estructura Scaffold",
    category: "Estructuras",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "Andamiaje industrial resistente para grandes montajes, torres de sonido, pantallas y soportes de alto impacto.",
  },
  {
    title: "Estructura Octanorm",
    category: "Estructuras",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "El sistema por excelencia para ferias comerciales y exposiciones, permitiendo montajes rápidos, modulares y uniformes.",
  },
  {
    title: "Graderías",
    category: "Estructuras",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "Montaje seguro y cómodo para eventos deportivos o espectáculos que requieran acomodación masiva de público.",
  },
  {
    title: "Muro de escalar",
    category: "Estructuras",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "Atracción deportiva segura y atractiva, montada con los más altos estándares de calidad para activaciones y ferias.",
  },
  {
    title: "Rampas",
    category: "Estructuras",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "Accesos seguros e inclusivos, así como pasarelas dinámicas para conexión de espacios o exhibiciones de vehículos.",
  },
  {
    title: "Pórtico",
    category: "Estructuras",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "Estructura de bienvenida e identificación para eventos, carreras deportivas o entrada principal de pabellones.",
  },
  {
    title: "Pipe Drape (Cortina)",
    category: "Estructuras",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "Sistema de postes y cortinaje elegante para dividir espacios, crear fondos escenográficos o pasillos en eventos corporativos.",
  },
];
