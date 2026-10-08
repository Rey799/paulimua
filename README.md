# Paulimua · Landing de Paulina Moreno

Página estática (HTML, CSS y JavaScript sin dependencias ni paso de compilación).
Se puede alojar en Netlify, Vercel, GitHub Pages o cualquier hosting de archivos estáticos.

## Estructura

| Archivo / carpeta | Qué contiene |
|---|---|
| `index.html` | Estructura de la página y metadatos (SEO, Open Graph). |
| `css/styles.css` | Diseño: colores, tipografías, móvil y escritorio, animaciones. |
| `js/config.js` | **Contacto:** número de WhatsApp, enlace de Instagram y mensajes prellenados. |
| `js/content.js` | **Contenido:** galería de casos, testimonios, servicios, preguntas frecuentes. |
| `js/main.js` | Comportamiento: galerías en movimiento, carga de medios, botones. |
| `assets/paulina/` | Fotos de Paulina (hero y retrato). |
| `assets/casos/` | Fotos de los casos de éxito. Cada una tiene una versión `-sm` para móvil. |
| `assets/testimonios/` | Capturas de mensajes de clientas. |
| `assets/fonts/` | Tipografías: Tempting (títulos) y Bebas Neue (textos). |
| `assets/favicon.svg` | Ícono de la pestaña del navegador. |
| `_headers` | Cabeceras de Netlify: caché y seguridad. |

## Cambios frecuentes

- **Número de WhatsApp o enlace de Instagram:** `js/config.js`. Se cambia en un solo lugar.
- **Casos de éxito, testimonios, servicios o preguntas:** `js/content.js`.
- **Foto nueva en la galería:** guarda la versión grande (960 px de alto) y la versión `-sm` (600 px de alto) en `assets/casos/`, y añade la entrada en `js/content.js` con `src`, `sm`, `smW` y `w`.

## Ver la página en tu computadora

Haz doble clic en `index.html`. No hace falta instalar nada.

## Pendientes antes de publicar

- **Tempting:** el archivo incluido es la versión demo ("PERSONAL USE ONLY"). Hay que reemplazarlo por la versión con licencia comercial, con el mismo nombre de archivo, o cambiar la fuente.
- **Capturas de testimonios:** muestran nombres de clientas en algunos mensajes. Confirma que tienen permiso para publicarlas.
- **Autorización:** confirma que Paulina aprobó la publicación de la página con su nombre y sus fotos.

## Licencias

- **Bebas Neue:** SIL Open Font License 1.1 (uso comercial permitido).
- **Tempting:** ver el punto de pendientes.
- **Fotos y capturas:** propiedad de Paulina y de sus clientas. Publícalas solo con su permiso.
