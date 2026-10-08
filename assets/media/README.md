# Medios de la landing

Coloca aquí las fotos y videos reales, y luego apunta a ellos desde `js/content.js`.

## Formatos recomendados

| Tipo | Formato | Notas |
|---|---|---|
| Foto | WebP o JPG, ~1600 px de lado largo, < 300 KB | Usa `loading="lazy"` (ya aplicado por el código). |
| Video | MP4 (H.264), vertical 9:16, 720–1080 px, < 4 MB | Sin audio necesario: se reproduce en silencio. |
| Poster | JPG/WebP del primer fotograma | Evita pantalla vacía mientras carga el video. |

## Cómo se usa

- `hero`: foto o video principal de Paulina (`type: "image"` o `"video"`).
- `showcase`: trabajos reales de la galería horizontal.
- `testimonials`: capturas, videos o texto de clientas reales. Vacío = sección oculta.
- `about.photo`: retrato de Paulina.

Un medio con `src` vacío muestra un espacio reservado. No se usan fotos de terceros.
