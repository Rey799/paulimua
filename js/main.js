/*
 * Render de contenido, enlaces de WhatsApp y comportamiento de la página.
 * Sin dependencias. Los datos vienen de config.js (SITE) y content.js (CONTENT).
 */
(function () {
  'use strict';

  var SITE = window.SITE;
  var CONTENT = window.CONTENT;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canObserve = 'IntersectionObserver' in window;

  var DRIFT_SPEED = 40; // píxeles por segundo en las filas en movimiento
  // Ancho aproximado que ocupa una foto de la galería según la pantalla (ver styles.css).
  var DRIFT_SIZES = '(max-width: 719px) 240px, (max-width: 1023px) 340px, 370px';

  document.documentElement.classList.add('js');

  /* ---------- Utilidades ---------- */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function waUrl(text) {
    var base = SITE.whatsappNumber ? 'https://wa.me/' + SITE.whatsappNumber : 'https://wa.me/';
    return base + '?text=' + encodeURIComponent(text);
  }

  /* ---------- Medios con carga diferida ---------- */

  // Los videos solo cargan y reproducen cuando están cerca de la pantalla.
  var videoObserver = canObserve ? new IntersectionObserver(onVideoVisibility, { rootMargin: '200px 0px' }) : null;

  function onVideoVisibility(entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      if (entry.isIntersecting) {
        if (!video.getAttribute('src')) video.src = video.dataset.src;
        if (!reduceMotion) video.play().catch(function () {});
      } else {
        video.pause();
      }
    });
  }

  // Devuelve una <figure> con imagen, video o espacio reservado.
  function createMedia(item, className) {
    var figure = el('figure', 'media ' + (className || ''));

    if (!item || !item.src) {
      figure.classList.add('media--placeholder');
      var ph = el('div', 'media__ph', (item && item.placeholder) || 'Espacio para tu trabajo real');
      figure.appendChild(ph);
      return figure;
    }

    if (item.type === 'video') {
      var video = document.createElement('video');
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'none';
      video.setAttribute('aria-label', item.alt || '');
      if (item.poster) video.poster = item.poster;
      if (reduceMotion) video.controls = true;
      video.dataset.src = item.src;
      figure.appendChild(video);
      if (videoObserver) {
        videoObserver.observe(video);
      } else {
        video.src = item.src;
      }
    } else {
      var img = document.createElement('img');
      img.loading = 'lazy';
      img.decoding = 'async';
      img.alt = item.alt || '';
      // Las dimensiones evitan saltos de diseño mientras la imagen carga.
      if (item.w && item.h) {
        img.width = item.w;
        img.height = item.h;
      }
      // Versión ligera para pantallas pequeñas: el navegador elige la que
      // corresponde según el ancho real y la densidad de la pantalla.
      if (item.sm) {
        img.srcset = item.sm + ' ' + (item.smW || Math.round(item.w * 0.625)) + 'w, ' +
          item.src + ' ' + item.w + 'w';
        img.sizes = item.sizes || DRIFT_SIZES;
      }
      img.src = item.src;
      figure.appendChild(img);
    }
    return figure;
  }

  /* ---------- Secciones ---------- */

  function renderHero() {
    var slot = document.querySelector('[data-slot="hero"]');
    if (!slot) return;
    var media = createMedia(CONTENT.hero, 'hero__media-inner');
    // La imagen del hero es el LCP: no debe cargarse en diferido.
    var img = media.querySelector('img');
    if (img) {
      img.loading = 'eager';
      img.fetchPriority = 'high';
    }
    slot.appendChild(media);
  }

  /*
   * Filas en movimiento (galería y testimonios): dos filas con las mismas
   * piezas, una hacia la izquierda y otra hacia la derecha. Cada fila tiene
   * dos bloques idénticos para que el desplazamiento sea continuo: el segundo
   * es decorativo (aria-hidden) y se anima a la misma velocidad.
   */
  function buildDriftSet(items, itemClass, decorative) {
    var set = el('div', 'drift__set');
    if (decorative) set.setAttribute('aria-hidden', 'true');
    items.forEach(function (item) {
      var media = createMedia(item, itemClass);
      var img = media.querySelector('img');
      if (img) {
        // Las fotos de la galería cargan de inmediato: en modo diferido las
        // que están fuera de la vista se quedaban en blanco al moverse.
        img.loading = 'eager';
        img.fetchPriority = 'low';
        if (decorative) img.alt = '';
      }
      set.appendChild(media);
    });
    return set;
  }

  function buildDriftRow(items, itemClass, direction) {
    var row = el('div', 'drift__row drift__row--' + direction);
    var track = el('div', 'drift__track');
    track.appendChild(buildDriftSet(items, itemClass, false));
    track.appendChild(buildDriftSet(items, itemClass, true));
    row.appendChild(track);
    return row;
  }

  // Ajusta la duración para que la velocidad sea la misma en cualquier pantalla.
  function updateDriftSpeed(root) {
    var set = root.querySelector('.drift__set');
    if (!set) return;
    var distance = set.getBoundingClientRect().width;
    if (!distance) return;
    root.style.setProperty('--drift-duration', Math.round(distance / DRIFT_SPEED) + 's');
  }

  function renderDrift(root, items, itemClass) {
    if (!root || !items.length) return;
    // Dos filas: la de la izquierda usa el orden original; la otra, el inverso.
    root.appendChild(buildDriftRow(items, itemClass, 'left'));
    root.appendChild(buildDriftRow(items.slice().reverse(), itemClass, 'right'));
    updateDriftSpeed(root);
  }

  // Pausa propia de cada galería y recálculo de velocidad al cambiar el ancho.
  function wireDrift(root) {
    if (!root) return;

    var button = root.querySelector('[data-action="toggle-motion"]');
    if (button) {
      button.addEventListener('click', function () {
        var paused = root.classList.toggle('is-paused');
        button.setAttribute('aria-pressed', String(paused));
        button.textContent = paused ? 'Reanudar movimiento' : 'Pausar movimiento';
      });
    }

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { updateDriftSpeed(root); }, 150);
    });
  }

  function renderShowcase() {
    var root = document.querySelector('[data-slot="showcase"]');
    if (!root) return;
    renderDrift(root, CONTENT.showcase, 'drift__item');
    wireDrift(root);
  }

  // La sección solo aparece si hay testimonios reales cargados.
  function renderTestimonials() {
    var section = document.querySelector('[data-section="testimonials"]');
    var root = document.querySelector('[data-slot="testimonials"]');
    if (!section || !root || !CONTENT.testimonials.length) return;
    // Primero se muestra la sección: un elemento oculto no tiene ancho que medir.
    section.hidden = false;
    renderDrift(root, CONTENT.testimonials, 'drift__item drift__item--shot');
    wireDrift(root);
  }

  function renderAbout() {
    var slot = document.querySelector('[data-slot="about-photo"]');
    if (slot) slot.appendChild(createMedia(CONTENT.about.photo, 'about__media'));
  }

  function renderServices() {
    var grid = document.querySelector('[data-slot="services"]');
    if (!grid) return;
    CONTENT.services.forEach(function (service) {
      var card = el('article', 'service reveal' + (service.featured ? ' service--featured' : ''));
      card.appendChild(el('h3', 'service__title', service.title));
      card.appendChild(el('p', 'service__text', service.text));
      var link = el('a', 'service__link', 'Consultar por WhatsApp');
      link.href = waUrl(service.message);
      link.setAttribute('aria-label', 'Consultar por WhatsApp sobre ' + service.title);
      card.appendChild(link);
      grid.appendChild(card);
    });
  }

  function renderFaq() {
    var box = document.querySelector('[data-slot="faq"]');
    if (!box) return;
    CONTENT.faq.forEach(function (item) {
      var details = el('details', 'faq__item');
      details.appendChild(el('summary', 'faq__q', item.q));
      details.appendChild(el('p', 'faq__a', item.a));
      box.appendChild(details);
    });
  }

  /* ---------- Enlaces de contacto (una sola fuente: SITE) ---------- */

  function wireWhatsApp() {
    document.querySelectorAll('[data-wa]').forEach(function (link) {
      var key = link.getAttribute('data-wa');
      var text = SITE.messages[key] || SITE.messages.general;
      link.href = waUrl(text);
    });
  }

  function wireInstagram() {
    document.querySelectorAll('[data-ig]').forEach(function (link) {
      link.href = SITE.instagramUrl;
      link.target = '_blank';
      link.rel = 'noopener';
    });
  }

  /* ---------- Comportamiento ---------- */

  function wireReveal() {
    var items = document.querySelectorAll('.reveal');
    if (reduceMotion || !canObserve) {
      items.forEach(function (item) { item.classList.add('is-in'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (item) { observer.observe(item); });
  }

  // La barra flotante aparece al salir del hero y se oculta en la sección final.
  function wireFloatingCta() {
    var cta = document.querySelector('.float-cta');
    var hero = document.getElementById('inicio');
    var end = document.getElementById('contacto');
    if (!cta || !hero || !end) return;

    if (!canObserve) {
      cta.classList.add('is-shown');
      return;
    }

    var state = { pastHero: false, atEnd: false };
    function update() {
      cta.classList.toggle('is-shown', state.pastHero && !state.atEnd);
    }

    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { state.pastHero = !entry.isIntersecting; });
      update();
    }).observe(hero);

    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { state.atEnd = entry.isIntersecting; });
      update();
    }).observe(end);
  }

  // Cada título flota con un retraso distinto para que no suban y bajen a la vez.
  function wireFloatingTitles() {
    document.querySelectorAll('h1, h2, h3').forEach(function (title, i) {
      title.style.animationDelay = ((i * 0.6) % 7).toFixed(1) + 's';
    });
  }

  /* ---------- Inicio ---------- */

  renderHero();
  renderShowcase();
  renderServices();
  renderTestimonials();
  renderAbout();
  renderFaq();
  wireWhatsApp();
  wireInstagram();
  wireReveal();
  wireFloatingCta();
  wireFloatingTitles();

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
