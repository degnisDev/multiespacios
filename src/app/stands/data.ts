import { IconType } from "react-icons";
import {
  FiGrid,
  FiStar,
  FiHexagon,
  FiLayers,
  FiSquare,
  FiBox,
  FiMonitor,
} from "react-icons/fi";

export interface Category {
  label: string;
  icon: IconType;
}

export interface Stand {
  title: string;
  category: string;
  dimensions: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  { label: "Todos", icon: FiGrid },
  { label: "Ferias", icon: FiStar },
  { label: "Especiales", icon: FiHexagon },
  { label: "Truss", icon: FiLayers },
  { label: "Blancos", icon: FiSquare },
  { label: "Panelería", icon: FiBox },
  { label: "Counters", icon: FiMonitor },
];

export const stands: Stand[] = [
  {
    title: "Stand para Ferias",
    category: "Ferias",
    dimensions: "Personalizable",
    image: "/imagenes/stands/Galerias 1.webp",
    description: "Estructura robusta y llamativa disenada para destacar la presencia de tu marca en exposiciones y eventos de gran escala.",
  },
  {
    title: "Stand Especial",
    category: "Especiales",
    dimensions: "Personalizable",
    image: "https://www.multiespacios.com.co/wp-content/uploads/2025/02/Stand-Datecsa.jpg",
    description: "Diseno exclusivo hecho a la medida con acabados premium y elementos arquitectonicos unicos.",
  },
  {
    title: "Stand de Scaffold",
    category: "Truss",
    dimensions: "Personalizable",
    image: "https://www.multiespacios.com.co/wp-content/uploads/2025/02/Stand-scaffold-1024x765.jpg",
    description: "Estructura modular tipo andamio (scaffold), ideal para disenos industriales o de alta resistencia.",
  },
  {
    title: "Stand Color",
    category: "Especiales",
    dimensions: "Personalizable",
    image: "https://www.multiespacios.com.co/wp-content/uploads/2025/02/STAND-COLOR-MOVILIARIO-PUBLICIDAD-PLASMA.jpg",
    description: "Stand vibrante con combinacion de colores corporativos, iluminacion LED integrada y zonas de exhibicion de producto.",
  },
  {
    title: "Stand en Truss",
    category: "Truss",
    dimensions: "Personalizable",
    image: "/imagenes/stands/Truss 1.webp",
    description: "Construido sobre una estructura modular de truss de aluminio, combinando resistencia y versatilidad visual.",
  },
  {
    title: "Stand Blanco",
    category: "Blancos",
    dimensions: "Personalizable",
    image: "/imagenes/stands/Octanorm 1.webp",
    description: "Diseno minimalista en tonos claros que resalta la sobriedad y elegancia de los productos expuestos.",
  },
  {
    title: "Stand Moda",
    category: "Especiales",
    dimensions: "Personalizable",
    image: "https://www.multiespacios.com.co/wp-content/uploads/2025/02/STAND-STEREOTIPOS-1024x768.jpg",
    description: "Disenado especialmente para pasarelas, showrooms de indumentaria y marcas del sector de la moda y estilo.",
  },
  {
    title: "Stand con Skyline",
    category: "Especiales",
    dimensions: "Personalizable",
    image: "https://www.multiespacios.com.co/wp-content/uploads/2025/02/STAND-CON-SKAY-LINE-Y-MOBILIARIO-1024x768.jpg",
    description: "Incorpora fondos escenograficos tipo skyline, creando una atmosfera urbana y moderna para captar la atencion.",
  },
  {
    title: "Stand Counter Panel",
    category: "Counters",
    dimensions: "Personalizable",
    image: "/imagenes/stands/Counter 1.webp",
    description: "Integra paneles publicitarios de gran formato con soportes para pantallas de plasma y counters de atencion.",
  },
  {
    title: "Estructura en Truss",
    category: "Truss",
    dimensions: "Personalizable",
    image: "/imagenes/stands/Truss 1.webp",
    description: "Montaje estructural de truss para soporte de iluminacion, sonido y banners publicitarios de gran tamano.",
  },
  {
    title: "Panelería y Cenefa",
    category: "Panelería",
    dimensions: "Personalizable",
    image: "/imagenes/stands/Paneles 1.webp",
    description: "Sistema modular de paneleria con cenefa superior para rotulacion e identificacion clara del expositor.",
  },
  {
    title: "Panelería Cerramiento",
    category: "Panelería",
    dimensions: "Personalizable",
    image: "/imagenes/stands/Cerramientos 1.webp",
    description: "Paneles divisorios ideales para separar pabellones, crear oficinas temporales o delimitar areas de eventos.",
  },
  {
    title: "Panelería para Ferias",
    category: "Panelería",
    dimensions: "Personalizable",
    image: "/imagenes/stands/Paneles 1.webp",
    description: "Configuracion estandar con divisiones de paneleria, ideal para ferias sectoriales y distribucion de expositores.",
  },
  {
    title: "Stands en Panelería",
    category: "Panelería",
    dimensions: "Personalizable",
    image: "/imagenes/stands/Paneles 1.webp",
    description: "Stands comerciales ligeros y funcionales basados en paneles de facil montaje y personalizacion grafica.",
  },
  {
    title: "Stand de 2x1.60 para Ferias",
    category: "Ferias",
    dimensions: "2m x 1.60m",
    image: "https://www.multiespacios.com.co/wp-content/uploads/2025/02/STAND-DE-2-X-1.60-e1739315221493.jpg",
    description: "Stand compacto y funcional, optimizado para espacios reducidos en ferias y centros comerciales.",
  },
];
