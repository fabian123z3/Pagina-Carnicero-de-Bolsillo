<div align="center">

  # Carnicero de Bolsillo — Página Web

  <p align="center">
    Landing page oficial de la aplicación. Moderna, rápida y 100 % responsive.
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </p>

</div>

---

## Sobre la página

Esta es la landing page de **Carnicero de Bolsillo**, la app que lleva el conocimiento del carnicero a tu bolsillo. La página fue diseñada para ser una experiencia visual atractiva que refleje fielmente la identidad de la aplicación: colores cálidos, interfaz limpia y contenido centrado en los amantes de la carne.

A través de esta página los usuarios pueden conocer todas las funcionalidades que ofrece la app antes de descargarla.

---

## Lo que muestra la página

- **Hero con mockup animado** — Vista previa interactiva de la app con transiciones automáticas entre las pantallas principales.
- **Características clave** — Catálogo de cortes, recetas guiadas, diagrama interactivo, Chat IA, juegos educativos y más.
- **Cortes populares** — Tarjetas con los cortes más buscados y sus categorías.
- **Juegos educativos** — Presentación de los 4 minijuegos: Quiz Maestro, Memoria Express, Corta Carne y Rompecabezas.
- **Demo del Chat IA** — Simulación animada de una conversación con el Carnicero IA.
- **Mitos y Realidades** — Sección informativa que desmiente creencias comunes sobre la carne.
- **Gamificación** — Logros, sistema de XP y rachas de aprendizaje.
- **Contacto y apoyo** — Canal directo para enviar recetas, sugerencias o donar un café.

---

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| **React** | Biblioteca para construir la interfaz |
| **TypeScript** | Tipado estático para código más seguro |
| **Vite** | Entorno de desarrollo rápido y build optimizado |
| **Tailwind CSS** | Estilos utilitarios para un diseño consistente y responsive |
| **shadcn/ui** | Componentes base reutilizables (Button, Card, Badge) |
| **Lucide React** | Iconografía moderna y ligera, sin emojis |

---

## Estructura del proyecto

```
src/
  components/ui/   # Componentes shadcn/ui (Button, Card, Badge)
  lib/utils.ts     # Utilidades (cn para clases condicionales)
  pages/
    CarniceroDeBolsillo.tsx   # Página principal (única ruta)
  App.tsx          # Punto de entrada
  index.css        # Estilos globales y Tailwind
```

---

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la aplicación para producción |
| `npm run preview` | Previsualiza el build generado |
| `npm run lint` | Revisa el código con ESLint |

---

## Paleta de colores

La página utiliza los mismos colores de la aplicación para mantener una identidad visual unificada:

| Color | Hex | Uso |
|-------|-----|-----|
| Beige cálido | `#F5E6D3` | Fondo principal |
| Coral | `#E8774A` | Acentos, botones, badges |
| Texto oscuro | `#1F2937` | Títulos y contenido |
| Texto suave | `#6B7280` | Descripciones y etiquetas |

---

<div align="center">

  Hecho con cariño para los amantes de la buena carne.

  &copy; 2025 Carnicero de Bolsillo

</div>
