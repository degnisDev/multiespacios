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
    image: [
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima Americana/tarima-americana.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima Americana/tarima-certificada.webp"
    ],
    description: "Tarima elegante y resistente para espacios interiores, ideal para presentaciones, conferencias y eventos corporativos.",
  },
  {
    title: "Tarima en Vidrio",
    category: "Tarimas",
    dimensions: "Personalizable",
    image: [
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima Vidrio/tarima-vidrio.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima Vidrio/tarima-vidrio-2.webp"
    ],
    description: "Plataforma sofisticada con superficie de vidrio, perfecta para eventos de gala, pasarelas y activaciones de alto nivel.",
  },
  {
    title: "Tarima Tradicional",
    category: "Tarimas",
    dimensions: "Personalizable",
    image: [
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima Tradicional/tarima-tradicional.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima Tradicional/tarima-tradicional-2.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima Tradicional/tarima-tradicional-3.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima Tradicional/tarima-tradicional-4.webp"
    ],
    description: "Estructura robusta y segura diseñada para soportar las condiciones del clima en conciertos y eventos masivos al aire libre.",
  },
  {
    title: "Tarima tipo Scaffold",
    category: "Tarimas",
    dimensions: "Personalizable",
    image: [
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima tipo Scaffold/tarima-scaffold.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima tipo Scaffold/tarima-scaffold-2.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima tipo Scaffold/tarima-scaffold-3.webp"
    ],
    description: "Sistema modular altamente versátil que permite configuraciones complejas y alturas ajustables según las necesidades del escenario.",
  },
  {
    title: "Pisos de Tarimas",
    category: "Tarimas",
    dimensions: "Personalizable",
    image: [
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Pisos de Tarimas/piso-tarima-diseno.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Pisos de Tarimas/piso-tarima-madera.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Pisos de Tarimas/piso-tarima-laminado.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Pisos de Tarimas/piso-tarima-laminado-2.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Pisos de Tarimas/piso-tarima-leds.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Pisos de Tarimas/piso-tarima-ajedrez.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Pisos de Tarimas/piso-tarima-impreso.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Pisos de Tarimas/piso-tarima-plastico.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Pisos de Tarimas/piso-tarima-rampa-discapacitado.webp"
    ],
    description: "Variedad de acabados para superficies de escenarios, incluyendo madera barnizada, laminados, acrílicos con iluminación LED, plástico modular y rampas de acceso.",
  },
  {
    title: "Otros tipos de Tarima",
    category: "Tarimas",
    dimensions: "Personalizable",
    image: [
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Otros Tipos de Tarima/tarima-normal.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Otros Tipos de Tarima/tarima-espejo.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Otros Tipos de Tarima/tarima-carro.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Otros Tipos de Tarima/tarima-carro-2.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Otros Tipos de Tarima/tarima-vidrio.webp",
      "/imagenes/2_Estructuras_y_tarimas/Tarimas/Otros Tipos de Tarima/piso-tarima-exhibicion.webp"
    ],
    description: "Galería de montajes y configuraciones especiales de tarimas, tales como plataformas para vehículos, superficies con acabado espejo de alta reflexión, tarimas tradicionales y escenarios a nivel de piso.",
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
    image: [
      "/imagenes/2_Estructuras_y_tarimas/Estructuras/Estructura Octanorm/estructura-octanorm.webp",
      "/imagenes/2_Estructuras_y_tarimas/Estructuras/Estructura Octanorm/estructura-octanorm-2.webp"
    ],
    description: "El sistema por excelencia para ferias comerciales y exposiciones, permitiendo montajes rápidos, modulares y uniformes.",
  },
  {
    title: "Graderías",
    category: "Estructuras",
    dimensions: "Personalizable",
    image: [
      "/imagenes/2_Estructuras_y_tarimas/Estructuras/Graderias/estructuras-graderias.webp",
      "/imagenes/2_Estructuras_y_tarimas/Estructuras/Graderias/estructuras-graderias-2.webp",
      "/imagenes/2_Estructuras_y_tarimas/Estructuras/Graderias/estructuras-graderias-3.webp"
    ],
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
