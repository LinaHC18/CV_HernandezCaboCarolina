const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const languageButtons = document.querySelectorAll('[data-language]');

const translations = {
  es: {
    'page.title': 'Carolina Hernández Cabo | Artista y programadora',
    'page.description': 'Portfolio de Carolina Hernández Cabo, artista de videojuegos y programadora.',
    'brand.home': 'Carolina Hernández Cabo, inicio',
    'menu.open': 'Abrir menú',
    'menu.close': 'Cerrar menú',
    'nav.label': 'Navegación principal',
    'nav.about': 'Sobre mí',
    'nav.tools': 'Herramientas',
    'nav.contact': 'Hablemos',
    'language.label': 'Seleccionar idioma',
    'language.spanish': 'Español',
    'language.english': 'Inglés',
    'hero.availability': 'DISPONIBLE PARA NUEVOS PROYECTOS',
    'hero.artist': 'Artista de videojuegos',
    'hero.programmer': 'programadora',
    'hero.intro': 'Doy forma a mundos jugables: del primer boceto a la última línea de código.',
    'hero.tools': 'Ver herramientas',
    'hero.contact': 'Contactar',
    'hero.portfolio': 'PORTFOLIO PERSONAL',
    'hero.sideNote': 'ARTE · CÓDIGO · JUEGO',
    'scene.label': 'Ilustración 3D de un entorno submarino',
    'scene.status': 'EN DESARROLLO',
    'scene.image': 'Escena submarina 3D con un refugio, peces y coral',
    'scene.caption': 'ARTE 3D · ENTORNO SUBMARINO',
    'about.label': '01 — PERFIL',
    'about.title': 'Ideas que se<br>pueden <em>jugar.</em>',
    'about.lead': 'Soy Carolina, artista y programadora en formación, con curiosidad por cada parte del proceso creativo.',
    'about.copy': 'Me gusta combinar ilustración, diseño de personajes y desarrollo para crear experiencias con personalidad. Disfruto tanto imaginando un universo como encontrando la lógica que lo hace funcionar.',
    'about.educationLabel': 'FORMACIÓN',
    'about.educationEsdip': 'Cómic y animación',
    'about.educationVoxel': 'Arte para videojuegos',
    'about.educationIes': 'Desarrollo de aplicaciones multiplataforma',
    'about.locationLabel': 'UBICACIÓN',
    'about.location': 'Tu ciudad, España',
    'about.languagesLabel': 'IDIOMAS',
    'about.languages': 'Español · Inglés',
    'toolkit.label': '02 — CAJA DE HERRAMIENTAS',
    'toolkit.title': 'Del píxel<br>al <em>prototipo.</em>',
    'toolkit.development': 'DESARROLLO',
    'toolkit.art': 'ARTE & DISEÑO',
    'contact.label': '03 — SIGUIENTE NIVEL',
    'contact.question': '¿TIENES UNA IDEA?',
    'contact.title': 'Hagamos algo<br><em>que se recuerde.</em>',
    'contact.emailLink': 'Enviar correo electrónico',
    'contact.emailLabel': 'Enviar correo',
    'contact.socials': 'También puedes encontrarme en',
    'footer.credit': 'DISEÑADO Y CONSTRUIDO POR CAROLINA HERNÁNDEZ CABO'
  },
  en: {
    'page.title': 'Carolina Hernández Cabo | Game Artist & Programmer',
    'page.description': 'Portfolio of Carolina Hernández Cabo, game artist and programmer.',
    'brand.home': 'Carolina Hernández Cabo, home',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'nav.label': 'Main navigation',
    'nav.about': 'About me',
    'nav.tools': 'Tools',
    'nav.contact': "Let's talk",
    'language.label': 'Select language',
    'language.spanish': 'Spanish',
    'language.english': 'English',
    'hero.availability': 'AVAILABLE FOR NEW PROJECTS',
    'hero.artist': 'Game artist',
    'hero.programmer': 'programmer',
    'hero.intro': 'I shape playable worlds: from the first sketch to the final line of code.',
    'hero.tools': 'View tools',
    'hero.contact': 'Get in touch',
    'hero.portfolio': 'PERSONAL PORTFOLIO',
    'hero.sideNote': 'ART · CODE · PLAY',
    'scene.label': '3D illustration of an underwater environment',
    'scene.status': 'IN DEVELOPMENT',
    'scene.image': '3D underwater scene with a shelter, fish, and coral',
    'scene.caption': '3D ART · UNDERWATER ENVIRONMENT',
    'about.label': '01 — PROFILE',
    'about.title': 'Ideas you can<br><em>play.</em>',
    'about.lead': "I'm Carolina, an artist and programmer in training, curious about every part of the creative process.",
    'about.copy': 'I like combining illustration, character design, and development to create experiences with personality. I enjoy imagining a universe as much as finding the logic that brings it to life.',
    'about.educationLabel': 'EDUCATION',
    'about.educationEsdip': 'Comics and animation',
    'about.educationVoxel': 'Video game art',
    'about.educationIes': 'Multiplatform application development',
    'about.locationLabel': 'LOCATION',
    'about.location': 'Your city, Spain',
    'about.languagesLabel': 'LANGUAGES',
    'about.languages': 'Spanish · English',
    'toolkit.label': '02 — TOOLKIT',
    'toolkit.title': 'From pixel<br>to <em>prototype.</em>',
    'toolkit.development': 'DEVELOPMENT',
    'toolkit.art': 'ART & DESIGN',
    'contact.label': '03 — NEXT LEVEL',
    'contact.question': 'HAVE AN IDEA?',
    'contact.title': "Let's make<br><em>something memorable.</em>",
    'contact.emailLink': 'Send an email',
    'contact.emailLabel': 'Send email',
    'contact.socials': 'You can also find me on',
    'footer.credit': 'DESIGNED AND BUILT BY CAROLINA HERNÁNDEZ CABO'
  }
};

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = dictionary[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = dictionary[element.dataset.i18nHtml];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', dictionary[element.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', dictionary[element.dataset.i18nAlt]);
  });

  document.title = dictionary['page.title'];
  document.querySelector('#page-description').content = dictionary['page.description'];
  const isMenuOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-label', dictionary[isMenuOpen ? 'menu.close' : 'menu.open']);
  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
}

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  const language = document.documentElement.lang;
  menuToggle.setAttribute('aria-label', translations[language][isExpanded ? 'menu.open' : 'menu.close']);
  mainNav.classList.toggle('is-open', !isExpanded);
});

mainNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', translations[document.documentElement.lang]['menu.open']);
    mainNav.classList.remove('is-open');
  }
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.language);
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', translations[document.documentElement.lang]['menu.open']);
    mainNav.classList.remove('is-open');
  });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
const contactEmail = [99, 97, 114, 111, 108, 105, 110, 97, 104, 99, 49, 49, 50, 57, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109]
  .map((code) => String.fromCharCode(code))
  .join('');
document.querySelector('#contact-email').href = `mailto:${contactEmail}`;
setLanguage('es');

