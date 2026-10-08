/*
 * Configuración central del sitio.
 * Este es el único lugar donde se define el contacto. Si cambia el número,
 * solo se edita whatsappNumber aquí.
 */
window.SITE = {
  name: "Paulina Moreno",
  location: "Mara, Zulia, Venezuela",
  instagramHandle: "paulimua",
  instagramUrl: "https://www.instagram.com/paulimua?vrfl=MTZtMTUyMDF1dW5vaA==",

  // PENDIENTE: número de WhatsApp con código de país y solo dígitos.
  // Ejemplo de formato: "584121234567". Mientras esté vacío, el enlace abre
  // WhatsApp sin número destino (el usuario elige el contacto).
  whatsappNumber: "584246063966",

  // Mensajes prellenados según la intención de la clienta.
  messages: {
    reserva: "Hola Paulina, vi tu landing y me gustaría consultar disponibilidad para maquillaje. Quisiera información sobre mi evento.",
    curso: "Hola Paulina, vi que también dictas cursos de maquillaje y quisiera recibir información.",
    general: "Hola Paulina, vi tu página y quisiera más información."
  }
};
