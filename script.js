/* KevDevs — interacciones */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var I18N = {
  "es": {
    "nav.services": "Servicios",
    "nav.work": "Proyectos",
    "nav.stack": "Stack",
    "nav.path": "Trayectoria",
    "hero.badge": "Disponible para nuevos proyectos",
    "hero.kicker": "Inteligencia artificial · Automatización · Web · Apps",
    "hero.h1a": "Tienes la idea, te falta quien la construya.",
    "hero.h1b": "Tú pones la visión. Yo pongo el código para hacerla realidad.",
    "hero.typerLabel": "construyo",
    "hero.lead": "Automatizar un proceso, crear un asistente con IA o darle forma a una idea no tiene por qué ser complicado. Escucho lo que necesitas, te acompaño en cada paso y construyo la herramienta que tu negocio necesita para avanzar. Soy Kevin Gutiérrez, desarrollador full-stack con más de 5 años de experiencia, y estoy aquí para materializar tus ideas.",
    "cta.primary": "Escríbeme por WhatsApp",
    "cta.secondary": "Ver servicios",
    "pillar.0": "Asistentes con IA",
    "pillar.1": "Automatización",
    "pillar.2": "Páginas web",
    "pillar.3": "Apps para celular",
    "trust.0.title": "Todo es tuyo",
    "trust.0.body": "Al terminar recibes el código, los accesos y la documentación de tu proyecto.",
    "trust.1.title": "Comunicación clara",
    "trust.1.body": "Te explico cada paso sin tecnicismos y ves avances durante el proceso.",
    "trust.2.title": "Acompañamiento",
    "trust.2.body": "Sigo disponible después del lanzamiento para ajustes y soporte.",
    "services.title": "Lo que construyo para tu negocio.",
    "services.lead": "De asistentes con IA a páginas web y apps. Una sola persona responsable del proyecto, de principio a fin.",
    "svc.0.title": "Asistentes con IA",
    "svc.0.body": "Asistentes en WhatsApp y en tu web que responden a tus clientes y agendan citas, las 24 horas.",
    "svc.1.title": "Integraciones con IA y Claude",
    "svc.1.body": "Uso inteligencia artificial para leer documentos, resumir información y redactar contenido por ti.",
    "svc.2.title": "Automatización con n8n",
    "svc.2.body": "Conecto las herramientas que ya usas para que las tareas repetitivas se hagan solas.",
    "svc.3.title": "Desarrollo web a la medida",
    "svc.3.body": "Páginas y plataformas rápidas, fáciles de usar y pensadas para que tus visitantes se conviertan en clientes.",
    "svc.4.title": "Apps móviles con Flutter",
    "svc.4.body": "Tu aplicación para iPhone y Android, desde la idea hasta publicarla en las tiendas.",
    "svc.5.title": "Sistemas y bases de datos",
    "svc.5.body": "El motor que hace funcionar tu web o app: guarda tu información de forma segura y conecta tus sistemas.",
    "svc.6.title": "Mantenimiento y soporte",
    "svc.6.body": "Actualizaciones, mejoras y monitoreo para que tu producto siga funcionando sin sorpresas.",
    "svc.other.title": "¿Tienes otra idea?",
    "svc.other.body": "Cuéntamela por WhatsApp y vemos cómo hacerla realidad.",
    "process.kicker": "Proceso",
    "process.title": "Cuatro pasos, cero rodeos.",
    "step.0.n": "PASO 01",
    "step.0.title": "Diagnóstico",
    "step.0.body": "Entiendo tu negocio y defino qué problema vamos a resolver.",
    "step.1.n": "PASO 02",
    "step.1.title": "Propuesta",
    "step.1.body": "Alcance, tiempos y entregables claros antes de escribir código.",
    "step.2.n": "PASO 03",
    "step.2.title": "Construcción",
    "step.2.body": "Avances frecuentes que puedes ver y probar.",
    "step.3.n": "PASO 04",
    "step.3.title": "Lanzamiento",
    "step.3.body": "Publicación, entrega y soporte después de salir al aire.",
    "work.title": "En producción y en camino.",
    "p.app": "App móvil · Flutter",
    "p.web": "Sitio web",
    "p.dev": "En desarrollo",
    "p.live": "En producción",
    "p.visit": "Visitar credique.com",
    "p.soon": "Próximamente",
    "p.toctoc.name": "TocToc!",
    "p.toctoc.body": "Digitaliza los procesos de las unidades residenciales cerradas en una sola app.",
    "p.apnea.name": "Apnea: respiración consciente",
    "p.apnea.body": "Entrenamientos de respiración para mejorar la apnea, la meditación y la respiración consciente.",
    "p.credique.name": "Credique",
    "p.credique.body": "Sitio web publicado y en funcionamiento.",
    "mq.0": "Consultoría tecnológica",
    "mq.1": "Análisis de procesos",
    "mq.2": "Automatización de tareas repetitivas",
    "mq.3": "Comunicación clara",
    "mq.4": "Acompañamiento cercano",
    "mq.5": "Soporte y mantenimiento",
    "mq.6": "Entregas a tiempo",
    "mq.7": "Diagnóstico gratuito",
    "stack.title": "Herramientas que domino.",
    "stack.0.g": "IA y automatización",
    "stack.0.i": "Claude · n8n · Asistentes con IA",
    "stack.1.g": "Frontend",
    "stack.1.i": "React · Angular · TypeScript · JavaScript · Redux",
    "stack.2.g": "Móvil",
    "stack.2.i": "Flutter · iOS · Android",
    "stack.3.g": "Backend",
    "stack.3.i": "Node.js · .NET Core · GraphQL",
    "stack.4.g": "Datos",
    "stack.4.i": "MongoDB · SQL",
    "stack.5.g": "Nube y herramientas",
    "stack.5.i": "AWS · Git",
    "path.title": "Experiencia real en equipos reales.",
    "job.0.when": "2022 — Actual",
    "job.0.org": "Sigma Studios",
    "job.0.role": "Desarrollo full-stack",
    "job.0.body": "Proyectos con AWS, .NET Core, Angular, Node.js, TypeScript y MongoDB, en equipos multidisciplinarios y con plazos de entrega.",
    "job.1.when": "2022 — 2023",
    "job.1.org": "Indra Colombia",
    "job.1.role": "Desarrollo full-stack",
    "job.1.body": "Aplicaciones con bases de datos NoSQL, Polymer, LitElement y Cells, el framework interno de BBVA.",
    "job.2.when": "2020 — 2022",
    "job.2.org": "Hounsou International",
    "job.2.role": "Desarrollo full-stack",
    "job.2.body": "Frontend y backend con React, Redux, TypeScript, Node.js, MongoDB y GraphQL.",
    "contact.kicker": "Contacto",
    "contact.title": "Hablemos de tu proyecto.",
    "contact.lead": "Cuéntame qué quieres construir o qué tarea te quita tiempo. Te respondo con una propuesta clara.",
    "a11y.prev": "Anterior",
    "a11y.next": "Siguiente"
  },
  "en": {
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.stack": "Stack",
    "nav.path": "Experience",
    "hero.badge": "Available for new projects",
    "hero.kicker": "Artificial intelligence · Automation · Web · Apps",
    "hero.h1a": "You have the idea, you need someone to build it.",
    "hero.h1b": "You bring the vision. I bring the code to make it real.",
    "hero.typerLabel": "building",
    "hero.lead": "Automating a process, building an AI assistant or shaping an idea doesn't have to be complicated. I listen to what you need, stay with you at every step and build the tool your business needs to move forward. I'm Kevin Gutiérrez, a full-stack developer with more than 5 years of experience, and I'm here to bring your ideas to life.",
    "cta.primary": "Message me on WhatsApp",
    "cta.secondary": "See services",
    "pillar.0": "AI assistants",
    "pillar.1": "Automation",
    "pillar.2": "Websites",
    "pillar.3": "Mobile apps",
    "trust.0.title": "You own everything",
    "trust.0.body": "At the end you receive the code, access and documentation for your project.",
    "trust.1.title": "Clear communication",
    "trust.1.body": "I explain each step in plain language and you see progress along the way.",
    "trust.2.title": "Ongoing support",
    "trust.2.body": "I stay available after launch for adjustments and support.",
    "services.title": "What I build for your business.",
    "services.lead": "From AI assistants to websites and apps. One person accountable for your project, start to finish.",
    "svc.0.title": "AI assistants",
    "svc.0.body": "Assistants on WhatsApp and your website that answer customers and book appointments around the clock.",
    "svc.1.title": "AI and Claude integrations",
    "svc.1.body": "I use artificial intelligence to read documents, summarize information and write content for you.",
    "svc.2.title": "Automation with n8n",
    "svc.2.body": "I connect the tools you already use so repetitive tasks run on their own.",
    "svc.3.title": "Custom web development",
    "svc.3.body": "Fast, easy-to-use sites and platforms designed to turn visitors into customers.",
    "svc.4.title": "Mobile apps with Flutter",
    "svc.4.body": "Your app for iPhone and Android, from the idea to the app stores.",
    "svc.5.title": "Systems and databases",
    "svc.5.body": "The engine behind your site or app: it stores your information securely and connects your systems.",
    "svc.6.title": "Maintenance and support",
    "svc.6.body": "Updates, improvements and monitoring so your product keeps running without surprises.",
    "svc.other.title": "Have another idea?",
    "svc.other.body": "Tell me on WhatsApp and let's make it happen.",
    "process.kicker": "Process",
    "process.title": "Four steps, no detours.",
    "step.0.n": "STEP 01",
    "step.0.title": "Discovery",
    "step.0.body": "I learn how your business works and define the problem to solve.",
    "step.1.n": "STEP 02",
    "step.1.title": "Proposal",
    "step.1.body": "Clear scope, timeline and deliverables before any code is written.",
    "step.2.n": "STEP 03",
    "step.2.title": "Build",
    "step.2.body": "Frequent progress you can see and test.",
    "step.3.n": "STEP 04",
    "step.3.title": "Launch",
    "step.3.body": "Release, handover and support after going live.",
    "work.title": "Live and on the way.",
    "p.app": "Mobile app · Flutter",
    "p.web": "Website",
    "p.dev": "In development",
    "p.live": "Live",
    "p.visit": "Visit credique.com",
    "p.soon": "Coming soon",
    "p.toctoc.name": "TocToc!",
    "p.toctoc.body": "Digitizes the processes of gated residential communities in a single app.",
    "p.apnea.name": "Apnea: conscious breathing",
    "p.apnea.body": "Breathing training to improve breath-hold, meditation and conscious breathing.",
    "p.credique.name": "Credique",
    "p.credique.body": "Website published and running.",
    "mq.0": "Tech consulting",
    "mq.1": "Process analysis",
    "mq.2": "Automating repetitive tasks",
    "mq.3": "Clear communication",
    "mq.4": "Hands-on guidance",
    "mq.5": "Support and maintenance",
    "mq.6": "On-time delivery",
    "mq.7": "Free assessment",
    "stack.title": "Tools I master.",
    "stack.0.g": "AI and automation",
    "stack.0.i": "Claude · n8n · AI assistants",
    "stack.1.g": "Frontend",
    "stack.1.i": "React · Angular · TypeScript · JavaScript · Redux",
    "stack.2.g": "Mobile",
    "stack.2.i": "Flutter · iOS · Android",
    "stack.3.g": "Backend",
    "stack.3.i": "Node.js · .NET Core · GraphQL",
    "stack.4.g": "Data",
    "stack.4.i": "MongoDB · SQL",
    "stack.5.g": "Cloud and tools",
    "stack.5.i": "AWS · Git",
    "path.title": "Real experience on real teams.",
    "job.0.when": "2022 — Present",
    "job.0.org": "Sigma Studios",
    "job.0.role": "Full-stack development",
    "job.0.body": "Projects with AWS, .NET Core, Angular, Node.js, TypeScript and MongoDB, on multidisciplinary teams with delivery deadlines.",
    "job.1.when": "2022 — 2023",
    "job.1.org": "Indra Colombia",
    "job.1.role": "Full-stack development",
    "job.1.body": "Applications on NoSQL databases, Polymer, LitElement and Cells, BBVA's internal framework.",
    "job.2.when": "2020 — 2022",
    "job.2.org": "Hounsou International",
    "job.2.role": "Full-stack development",
    "job.2.body": "Frontend and backend with React, Redux, TypeScript, Node.js, MongoDB and GraphQL.",
    "contact.kicker": "Contact",
    "contact.title": "Let's talk about your project.",
    "contact.lead": "Tell me what you want to build or which task is eating your time. I'll reply with a clear proposal.",
    "a11y.prev": "Previous",
    "a11y.next": "Next"
  }
};
  var EXTRA = {
  "es": {
    "typer": [
      "asistentes con IA",
      "automatizaciones",
      "páginas web",
      "apps para celular"
    ],
    "wa": "Hola Kevin, vi tu portafolio KevDevs y quiero hablar de un proyecto.",
    "title": "KevDevs | Desarrollador web, apps y automatización con IA en Colombia",
    "desc": "Kevin Gutiérrez, desarrollador full-stack en Medellín, Colombia. Creo asistentes con IA para WhatsApp, automatizaciones con n8n, páginas web y apps móviles con Flutter para pymes y emprendedores."
  },
  "en": {
    "typer": [
      "AI assistants",
      "automations",
      "websites",
      "mobile apps"
    ],
    "wa": "Hi Kevin, I saw your KevDevs portfolio and I'd like to talk about a project.",
    "title": "KevDevs | Web, mobile apps and AI automation developer in Colombia",
    "desc": "Kevin Gutiérrez, full-stack developer in Medellín, Colombia. I build AI assistants for WhatsApp, n8n automations, websites and Flutter mobile apps for small businesses and entrepreneurs."
  }
};
  var PHONE = '573057414408';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Idioma ---------- */
  var lang = localStorage.getItem('kevdevs-lang') || 'es';
  var typer = null;

  function applyLang(l) {
    lang = I18N[l] ? l : 'es';
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.title = EXTRA[lang].title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', EXTRA[lang].desc);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-aria')];
      if (v != null) el.setAttribute('aria-label', v);
    });
    var href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(EXTRA[lang].wa);
    document.querySelectorAll('.js-wa').forEach(function (a) { a.href = href; });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
    localStorage.setItem('kevdevs-lang', lang);
    if (typer) typer.setWords(EXTRA[lang].typer);
  }
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.dataset.lang); });
  });

  /* ---------- Texto que se escribe solo ---------- */
  function Typer(el, words) {
    var i = 0, n = 0, del = false, timer;
    function tick() {
      var w = words[i % words.length];
      if (!del && n < w.length) n++;
      else if (!del) del = true;
      else if (n > 0) n--;
      else { del = false; i++; }
      el.textContent = words[i % words.length].slice(0, n);
      timer = setTimeout(tick, !del && n === w.length ? 1600 : del ? 40 : 85);
    }
    this.setWords = function (w) { words = w; i = 0; n = 0; del = false; clearTimeout(timer); tick(); };
    if (reduceMotion) el.textContent = words[0]; else tick();
  }
  var typerEl = document.getElementById('typer');

  /* ---------- Lluvia de código binario ---------- */
  function BinaryRain(canvas, rgb, density) {
    var ctx = canvas.getContext('2d'), fs = 16, cols = [], w = 0, h = 0, last = 0, raf;
    function size() {
      var dpr = window.devicePixelRatio || 1;
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Array.from({ length: Math.ceil(w / fs) }, function () { return Math.random() * -h / fs; });
    }
    function draw(ts) {
      raf = requestAnimationFrame(draw);
      if (ts - last < 55) return;
      last = ts;
      ctx.clearRect(0, 0, w, h);
      ctx.font = '600 ' + fs + 'px ui-monospace, Menlo, monospace';
      for (var i = 0; i < cols.length; i++) {
        if (i % density) continue;
        var y = cols[i], x = i * fs;
        for (var k = 0; k < 14; k++) {
          var yy = (y - k) * fs;
          if (yy < -fs || yy > h) continue;
          ctx.fillStyle = k === 0 ? 'rgba(230,240,248,0.95)' : 'rgba(' + rgb + ',' + (0.55 * (1 - k / 14)) + ')';
          ctx.fillText(((i * 7 + Math.floor(y) - k) & 1) ? '1' : '0', x, yy);
        }
        cols[i] = y > h / fs + 14 && Math.random() > 0.97 ? Math.random() * -10 : y + 0.5;
      }
    }
    size();
    if ('ResizeObserver' in window) new ResizeObserver(size).observe(canvas);
    else window.addEventListener('resize', size);
    if (reduceMotion) { draw(1000); cancelAnimationFrame(raf); } else raf = requestAnimationFrame(draw);
  }
  document.querySelectorAll('canvas[data-rain]').forEach(function (c) {
    new BinaryRain(c, '130,171,203', c.dataset.rain === 'hero' ? 2 : 4);
  });

  /* ---------- Carruseles ---------- */
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var track = root.querySelector('.carousel-track');
    var slides = root.querySelectorAll('.slide');
    var dots = root.querySelectorAll('.car-dots button');
    var cur = 0;
    function go(i) {
      cur = (i + slides.length) % slides.length;
      track.style.transform = 'translateX(' + (-100 * cur) + '%)';
      dots.forEach(function (d, k) { d.classList.toggle('is-active', k === cur); });
    }
    root.querySelector('.car-prev').addEventListener('click', function () { go(cur - 1); });
    root.querySelector('.car-next').addEventListener('click', function () { go(cur + 1); });
    dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); }); });
    var x0 = null;
    root.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
      x0 = null;
    });
    go(0);
  });
  // Si una imagen no existe, se quita y queda visible "Próximamente"
  document.querySelectorAll('.slide img').forEach(function (img) {
    function fail() { img.remove(); }
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener('error', fail);
  });

  /* ---------- Aparición al hacer scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Header: transparente arriba, blanco al hacer scroll ---------- */
  var header = document.querySelector('.header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 20); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Inicio ---------- */
  if (typerEl) typer = new Typer(typerEl, EXTRA[lang].typer);
  applyLang(lang);
})();
