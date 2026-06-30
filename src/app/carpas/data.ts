import { IconType } from "react-icons";
import { FiGrid, FiHexagon, FiTriangle, FiMaximize } from "react-icons/fi";

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
  { label: "Pagodas", icon: FiHexagon },
  { label: "Polos", icon: FiTriangle },
  { label: "Pabellones", icon: FiMaximize },
];

export const stands: Stand[] = [
  {
    title: "Carpa Pagoda",
    category: "Pagodas",
    dimensions: "Personalizable",
    image: "/imagenes/1_carpas/carpa-pagoda.webp",
    description: "Carpa de diseño elegante y techo puntiagudo, perfecta para eventos al aire libre, recepciones y activaciones de marca pequeñas.",
  },
  {
    title: "Carpa Polo",
    category: "Polos",
    dimensions: "Personalizable",
    image: "/imagenes/1_carpas/carpa-polo.webp",
    description: "Estructura tradicional soportada por postes centrales, ofreciendo un amplio espacio cubierto con un toque clásico y festivo.",
  },
  {
    title: "Carpa Pabellón",
    category: "Pabellones",
    dimensions: "Personalizable",
    image: [
      "/imagenes/1_carpas/carpa-pabellón.webp",
      "/imagenes/1_carpas/Demostración Pabellón 1.webp",
      "/imagenes/1_carpas/Demostración Pabellón 2.webp"
    ],
    description: "Estructura modular de gran formato ideal para exposiciones, ferias o eventos corporativos masivos, ofreciendo máxima amplitud sin columnas intermedias.",
  },
];
