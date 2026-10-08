/*
 * Contenido editable de la landing.
 *
 * Reglas de este archivo:
 * - Un medio con `src` vacío se muestra como espacio reservado. Al tener
 *   foto o video real, basta con completar `src` (y `poster` para videos).
 * - `type` puede ser "image" o "video". Los videos cargan solo al acercarse
 *   a la pantalla y se reproducen en silencio en bucle.
 * - `w` y `h` son las dimensiones reales de la imagen: evitan saltos de
 *   diseño mientras carga.
 * - `sm` es una versión más ligera de la misma foto (para móvil). `smW` es su
 *   ancho en píxeles. Si no hay `sm`, se usa `src` en todos los casos.
 * - `testimonials` vacío oculta la sección. No añadir testimonios que no
 *   sean reales.
 * - No añadir precios, años de experiencia, cifras ni certificaciones hasta
 *   que Paulina los confirme.
 */
window.CONTENT = {
  hero: {
    type: "image",
    src: "assets/paulina/paulina-02-perfil.jpg",
    sm: "assets/paulina/paulina-02-perfil-800.jpg",
    smW: 800,
    w: 1200,
    h: 1600,
    sizes: "(min-width: 900px) 50vw, 100vw",
    poster: "",
    alt: "Paulina Moreno de perfil, mirando a cámara, con el cabello suelto",
    placeholder: "Foto o video principal pendiente"
  },

  // Galería en movimiento "Así se ve el resultado".
  // Dos filas con estas mismas piezas, en direcciones opuestas.
  showcase: [
    { type: "image", src: "assets/casos/caso-01.jpg", sm: "assets/casos/caso-01-sm.jpg", smW: 489, w: 782, alt: "Maquillaje con flor en el cabello y rizos naturales" },
    { type: "image", src: "assets/casos/caso-02.jpg", sm: "assets/casos/caso-02-sm.jpg", smW: 534, w: 854, alt: "Maquillaje glam con labios mate y cabello con ondas" },
    { type: "image", src: "assets/casos/caso-03.jpg", sm: "assets/casos/caso-03-sm.jpg", smW: 540, w: 864, alt: "Maquillaje con labial rojo y cabello liso" },
    { type: "image", src: "assets/casos/caso-04.jpg", sm: "assets/casos/caso-04-sm.jpg", smW: 539, w: 863, alt: "Maquillaje en tonos claros con el cabello recogido" },
    { type: "image", src: "assets/casos/caso-05.jpg", sm: "assets/casos/caso-05-sm.jpg", smW: 498, w: 797, alt: "Maquillaje de novia con labial rojo, cabello en ondas y collar" },
    { type: "image", src: "assets/casos/caso-06.jpg", sm: "assets/casos/caso-06-sm.jpg", smW: 489, w: 782, alt: "Maquillaje con labial rojo y media coleta con ondas" },
    { type: "image", src: "assets/casos/caso-07.jpg", sm: "assets/casos/caso-07-sm.jpg", smW: 494, w: 790, alt: "Maquillaje natural con ondas largas" },
    { type: "image", src: "assets/casos/caso-08.jpg", sm: "assets/casos/caso-08-sm.jpg", smW: 462, w: 739, alt: "Primer plano de maquillaje de ojos con delineado" },
    { type: "image", src: "assets/casos/caso-09.jpg", sm: "assets/casos/caso-09-sm.jpg", smW: 494, w: 791, alt: "Maquillaje con cabello recogido de lado y rizos" },
    { type: "image", src: "assets/casos/caso-10.jpg", sm: "assets/casos/caso-10-sm.jpg", smW: 499, w: 799, alt: "Maquillaje con ondas largas y blusa amarilla" },
    { type: "image", src: "assets/casos/caso-11.jpg", sm: "assets/casos/caso-11-sm.jpg", smW: 487, w: 779, alt: "Maquillaje cálido sobre fondo marrón" },
    { type: "image", src: "assets/casos/caso-12.jpg", sm: "assets/casos/caso-12-sm.jpg", smW: 576, w: 922, alt: "Maquillaje con ondas largas y vestido blanco" },
    { type: "image", src: "assets/casos/caso-13.jpg", sm: "assets/casos/caso-13-sm.jpg", smW: 498, w: 796, alt: "Sesión fotográfica con ondas y blusa marrón" },
    { type: "image", src: "assets/casos/caso-14.jpg", sm: "assets/casos/caso-14-sm.jpg", smW: 488, w: 780, alt: "Sesión fotográfica con vestido de lentejuelas" },
    { type: "image", src: "assets/casos/caso-15.jpg", sm: "assets/casos/caso-15-sm.jpg", smW: 494, w: 790, alt: "Look de quinceañera con corona y vestido azul" },
    { type: "image", src: "assets/casos/caso-16.jpg", sm: "assets/casos/caso-16-sm.jpg", smW: 496, w: 794, alt: "Maquillaje con labial rojo y blusa de lunares" },
    { type: "image", src: "assets/casos/caso-17.jpg", sm: "assets/casos/caso-17-sm.jpg", smW: 494, w: 790, alt: "Maquillaje con labial rojo y ondas en el cabello" }
  ],

  // Servicios. `message` es el texto prellenado de WhatsApp para ese servicio.
  services: [
    {
      id: "social",
      title: "Maquillaje social",
      text: "Para bodas, cumpleaños, cenas y eventos de noche. Un look que se ve bien en persona y en las fotos.",
      featured: true,
      message: "Hola Paulina, vi tu landing y quisiera información sobre maquillaje social para un evento."
    },
    {
      id: "novias",
      title: "Novias",
      text: "Tu día más fotografiado, con un maquillaje pensado para acompañarte durante toda la jornada.",
      featured: false,
      message: "Hola Paulina, vi tu landing y quisiera consultar disponibilidad para maquillaje de novia."
    },
    {
      id: "quinceaneras",
      title: "Quinceañeras",
      text: "Un look que combine con tu vestido, tu tema y tu energía durante toda la fiesta.",
      featured: false,
      message: "Hola Paulina, vi tu landing y quisiera consultar disponibilidad para maquillaje de quinceañera."
    },
    {
      id: "sesiones",
      title: "Sesiones fotográficas",
      text: "Maquillaje pensado para la cámara: luz, primer plano y cambios de vestuario.",
      featured: false,
      message: "Hola Paulina, vi tu landing y quisiera consultar disponibilidad para maquillaje de sesión fotográfica."
    },
    {
      id: "piel-madura",
      title: "Piel madura",
      text: "Técnica y productos adecuados a tu piel, para un acabado uniforme y luminoso.",
      featured: false,
      message: "Hola Paulina, vi tu landing y quisiera información sobre maquillaje para piel madura."
    }
  ],

  // Testimonios reales: capturas de mensajes que enviaron las clientas.
  // Se muestran en la misma galería en movimiento que los casos.
  // Vacío = la sección se oculta.
  testimonials: [
    { type: "image", src: "assets/testimonios/testimonio-01.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 356 },
    { type: "image", src: "assets/testimonios/testimonio-02.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 517 },
    { type: "image", src: "assets/testimonios/testimonio-03.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 446 },
    { type: "image", src: "assets/testimonios/testimonio-04.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 630, h: 537 },
    { type: "image", src: "assets/testimonios/testimonio-05.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 463 },
    { type: "image", src: "assets/testimonios/testimonio-06.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 792 },
    { type: "image", src: "assets/testimonios/testimonio-07.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 376 },
    { type: "image", src: "assets/testimonios/testimonio-08.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 345 },
    { type: "image", src: "assets/testimonios/testimonio-09.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 693 },
    { type: "image", src: "assets/testimonios/testimonio-10.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 244 },
    { type: "image", src: "assets/testimonios/testimonio-11.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 378 },
    { type: "image", src: "assets/testimonios/testimonio-12.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 505 },
    { type: "image", src: "assets/testimonios/testimonio-13.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 375 },
    { type: "image", src: "assets/testimonios/testimonio-14.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 343 },
    { type: "image", src: "assets/testimonios/testimonio-15.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 438 },
    { type: "image", src: "assets/testimonios/testimonio-16.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 343 },
    { type: "image", src: "assets/testimonios/testimonio-17.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 300 },
    { type: "image", src: "assets/testimonios/testimonio-18.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 432 },
    { type: "image", src: "assets/testimonios/testimonio-19.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 343 },
    { type: "image", src: "assets/testimonios/testimonio-20.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 404 },
    { type: "image", src: "assets/testimonios/testimonio-21.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 375 },
    { type: "image", src: "assets/testimonios/testimonio-22.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 263 },
    { type: "image", src: "assets/testimonios/testimonio-23.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 328 },
    { type: "image", src: "assets/testimonios/testimonio-24.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 349 },
    { type: "image", src: "assets/testimonios/testimonio-25.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 335 },
    { type: "image", src: "assets/testimonios/testimonio-26.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 199 },
    { type: "image", src: "assets/testimonios/testimonio-27.jpg", alt: "Captura de un mensaje de agradecimiento de una clienta", w: 800, h: 539 }
  ],

  about: {
    photo: {
      type: "image",
      src: "assets/paulina/paulina-01-labial.jpg",
      alt: "Paulina Moreno, maquilladora profesional, sosteniendo un labial y mirando a cámara",
      placeholder: "Retrato de Paulina pendiente"
    }
  },

  // Preguntas solo con respuestas que ya se pueden afirmar.
  faq: [
    {
      q: "¿Dónde se realizan las citas?",
      a: "Estoy ubicada en Mara, estado Zulia. Si necesitas la dirección exacta, te la comparto por WhatsApp al confirmar tu cita."
    },
    {
      q: "¿Trabajas a domicilio?",
      a: "Escríbeme con la ubicación de tu evento y te confirmo si puedo acompañarte allí."
    },
    {
      q: "¿Cómo puedo reservar?",
      a: "Escríbeme por WhatsApp con la fecha, el tipo de servicio y el lugar de tu evento. Desde ahí coordinamos los detalles."
    },
    {
      q: "¿Con cuánto tiempo debo reservar?",
      a: "Depende de la fecha que tengas en mente. Escríbeme y revisamos la disponibilidad."
    },
    {
      q: "¿Cuánto cuesta?",
      a: "Los precios dependen del servicio y de los detalles de tu evento. Escríbeme por WhatsApp y te los comparto."
    },
    {
      q: "¿Qué servicios de maquillaje realizas?",
      a: "Maquillaje social, novias, quinceañeras, sesiones fotográficas, maquillaje para piel madura y cursos de maquillaje."
    },
    {
      q: "¿También haces maquillaje para novias?",
      a: "Sí, maquillo novias. Escríbeme con tu fecha y tu idea de look."
    },
    {
      q: "¿Ofreces cursos?",
      a: "Sí. Escríbeme y te comparto la información disponible."
    }
  ]
};
