# 001 — Rediseño moderno de CloudWare MX

Estado: en implementación · Stack: Next.js 16 (App Router), react-bootstrap, CSS plano · Idioma: es-MX

Referencia de contenido: https://www.cloudwaremx.com/ (versión en vivo, 2026).
Referencia de diseño: skill ui-ux-pro-max (estilo *Soft UI Evolution*, patrón landing de conversión).

## 1. Objetivo

Convertir el sitio en una landing moderna, accesible y rápida cuyo único objetivo de negocio es: **que el visitante contrate un paquete o escriba por WhatsApp**. Se conserva la identidad de marca (morado + naranja) y las rutas `/`, `/nosotros`, `/paquetes`, `/contacto`.

No-objetivos: backend propio, CMS, cambiar el proveedor de correo (EmailJS), cambiar dominio.

## 2. Auditoría (estado inicial)

| # | Hallazgo | Severidad | Regla |
|---|----------|-----------|-------|
| A1 | Texto blanco sobre naranja `#F5A623` (~2:1) y sobre lila `#A58CBF` (~2.6:1) en cabeceras, badges y CTAs de paquetes | Crítica | color-contrast 4.5:1 |
| A2 | Emojis como iconos (📡 ⚡) en títulos de paquetes | Alta | no-emoji-icons |
| A3 | `Title` renderiza `<h1>` y se usa 3 veces en `/paquetes`; jerarquía rota | Alta | heading-hierarchy |
| A4 | Sin `<main>`, sin skip-link, sin `:focus-visible` propio | Alta | skip-links, focus-states |
| A5 | Animaciones sin `prefers-reduced-motion`; hover con `scale` + `translateY(-12px)` | Media | reduced-motion |
| A6 | `<img>` sin width/height; `logo.png` de 192 KB mostrado a 100 px alto | Alta | image-dimension, CLS |
| A7 | Poppins cargado por `<link>` externo (bloquea render) | Media | font-loading |
| A8 | Home sin CTA: solo dos párrafos y dos imágenes | Alta | primary-action |
| A9 | Datos de paquetes desactualizados vs. sitio en vivo (p. ej. fibra 30 Mbps/$300 vs 40 Mbps/$250) | Alta | contenido |
| A10 | Formulario sin `autocomplete`, sin tipo de servicio ni plan, pide "Empresa" (irrelevante para residencial) | Media | autofill-support, redundant-entry |
| A11 | Sin estadísticas, cobertura ni servicios que sí existen en la versión en vivo | Media | social-proof |
| A12 | CSS con `!important` y colores hex sueltos en vez de tokens | Baja | color-semantic |
| A13 | Cards "Popular" y "Lo quiero" sin estado de foco ni `aria-label` con el nombre del plan | Media | aria-labels |
| A14 | Inconsistencia de contacto en el sitio en vivo (teléfonos y correos distintos entre secciones) — **requiere decisión del dueño del negocio** | Info | — |

## 3. Sistema de diseño

**Estilo:** Soft UI Evolution sobre fondo oscuro morado. Superficies con borde sutil y sombra suave; sin glassmorphism pesado ni 3D.

### Tokens (en `src/app/globals.css`)

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#14101f` | fondo base |
| `--surface` | `#1e1830` | tarjetas |
| `--surface-2` | `#2a2142` | tarjeta elevada / hover |
| `--border` | `rgba(255,255,255,.10)` | bordes |
| `--text` | `#f4f1fb` | texto principal (≥ 14:1) |
| `--text-muted` | `#b9b0cf` | texto secundario (≥ 7:1 sobre `--bg`) |
| `--primary` | `#6C3FA0` | marca |
| `--primary-light` | `#A58CBF` | acentos suaves |
| `--accent` | `#F5A623` | CTA y datos clave |
| `--on-accent` | `#1a1a2e` | texto sobre naranja (≥ 8:1) |
| `--ring` | `#FFD080` | anillo de foco |

Escala de espaciado 4/8: `4 8 12 16 24 32 48 64 96`. Radios: `12` (controles), `20` (tarjetas), `999` (pills). Movimiento: `160ms` (feedback), `300ms` (entrada), una sola curva `cubic-bezier(.2,.8,.2,1)`.

**Tipografía:** Poppins vía `next/font/google` (400/500/600/700/800), base 16 px, interlineado 1.6, títulos con `text-wrap: balance`.

**Iconos:** react-icons (Bootstrap Icons), un solo set, `aria-hidden` cuando acompañan texto.

## 4. Requisitos

Formato: **R**equisito → criterio de aceptación verificable.

### Globales
- **R1** Estructura semántica: skip-link visible al enfocar, `<main id="contenido">`, un único `<h1>` por página. → Tab inicial enfoca "Saltar al contenido"; `document.querySelectorAll('h1').length === 1` en cada ruta.
- **R2** Foco visible en todo control interactivo con `--ring`. → Navegación solo con teclado recorre nav, tarjetas, formulario.
- **R3** `prefers-reduced-motion: reduce` desactiva animaciones y transforms de hover. → Con la preferencia activa no hay `animation`/`transition` de transform.
- **R4** Contraste ≥ 4.5:1 texto normal, ≥ 3:1 componentes. → Ningún texto blanco sobre naranja o lila.
- **R5** Imágenes con `next/image`, dimensiones declaradas; logo ≤ 20 KB servido. → CLS ≈ 0 en Lighthouse.
- **R6** Fuente con `next/font`, sin `<link>` a Google Fonts. → Sin request bloqueante a `fonts.googleapis.com`.
- **R7** Datos de contacto y paquetes en una sola fuente (`src/data`). → Cambiar un valor se refleja en todo el sitio.

### Home `/`
- **R8** Hero: `<h1>` "Soluciones de internet adaptadas a tus necesidades", subtítulo, CTA primario "Ver paquetes" y CTA secundario WhatsApp. → Un solo CTA primario visible sin scroll en 375 px.
- **R9** Franja de cifras (+2000 clientes, 99 % uptime, 5+ años, soporte) con números tabulares.
- **R10** Servicios en 3 tarjetas: Internet Hogar, Red Segura, Soporte Inmediato.
- **R11** Banda final de CTA hacia `/paquetes` y WhatsApp.

### Paquetes `/paquetes`
- **R12** Selector accesible Fibra / Inalámbrico (`role="tablist"`, flechas ← →). → Se puede operar solo con teclado; el panel activo tiene `aria-labelledby`.
- **R13** Tarjeta de plan: nombre, velocidad, precio MXN/mes, badge "Más popular", CTA "Lo quiero" con `aria-label` que incluye el plan. Texto oscuro sobre naranja.
- **R14** Datos = sitio en vivo: fibra 40/60/200/400/600 Mbps a $250/300/400/550/700; inalámbrico 10/15/20/25 Mbps a $250/300/350/400. Populares: Élite e Intermedio.

### Nosotros `/nosotros`
- **R15** Conserva copy actual; añade bloque de cobertura (4 municipios, 40+ comunidades, 2 tecnologías, 100 % red propia).

### Contacto `/contacto`
- **R16** Formulario: nombre, teléfono, correo, tipo de servicio (radio), mensaje opcional; `autocomplete` correcto (`name`, `tel`, `email`), `inputMode`, error y éxito anunciados (`aria-live`). Se elimina "Empresa".
- **R17** El modal de resultado pasa a mensaje inline `role="status"` (sin interrumpir foco).

## 5. Tareas

- [x] T0 Spec y auditoría
- [x] T1 Tokens, base CSS, `next/font`, skip-link, `<main>`, reduced-motion (R1–R4, R6)
- [x] T2 Datos: paquetes en vivo + constantes (R7, R14)
- [x] T3 `Title` → componente con nivel configurable; logo optimizado (R1, R5)
- [x] T4 Home: hero, cifras, servicios, CTA (R8–R11)
- [x] T5 Paquetes: tabs + tarjetas (R12–R13)
- [x] T6 Nosotros: cobertura (R15)
- [x] T7 Contacto: formulario (R16–R17)
- [ ] T8 Verificación: build OK, h1 único por ruta OK, capturas 375 y 1280 px OK; falta Lighthouse y prueba con teclado

## 6. Verificación

`npm run build` sin errores · revisión manual con teclado · viewport 375/768/1280 sin scroll horizontal · Lighthouse a11y ≥ 95, CLS < 0.1.

## 7. Preguntas abiertas

- Q1 ¿Cuál es el teléfono/WhatsApp y correo oficial? (A14) Se usan los de `src/data/constants.js` hasta decidir.
- Q2 ¿Se agrega mapa de cobertura interactivo? Fuera de alcance de esta spec.
