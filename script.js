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
    'scene.label': 'Ilustración pixel-art de un pequeño mundo de videojuegos',
    'scene.status': 'EN DESARROLLO',
    'scene.canvas': 'Paisaje pixel-art con un personaje explorador',
    'scene.caption': 'UN MUNDO POR CONSTRUIR',
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
    'scene.label': 'Pixel-art illustration of a small video game world',
    'scene.status': 'IN DEVELOPMENT',
    'scene.canvas': 'Pixel-art landscape with an explorer character',
    'scene.caption': 'A WORLD TO BUILD',
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

const canvas = document.querySelector('#pixel-scene');
const context = canvas.getContext('2d');
const pixel = 4;
const colors = {
  sky: '#cbb8df', cloud: '#f5eff9', far: '#9985ad', hill: '#755b8a', grass: '#59416f',
  dirt: '#a27eb1', dirtShade: '#74527f', trunk: '#543d66', leaf: '#72548c', leafLight: '#a285bc',
  water: '#8767a7', waterLight: '#d4bce8', character: '#d19cf0', skin: '#efc3a8', dark: '#352542', flower: '#ead6fa'
};

function rect(x, y, width, height, color) {
  context.fillStyle = color;
  context.fillRect(x * pixel, y * pixel, width * pixel, height * pixel);
}

function drawScene(time = 0) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  rect(0, 0, 80, 60, colors.sky);
  rect(8, 8, 8, 2, colors.cloud); rect(6, 10, 12, 2, colors.cloud); rect(47, 13, 9, 2, colors.cloud); rect(45, 15, 13, 2, colors.cloud);
  rect(55, 7, 5, 5, colors.flower);

  rect(0, 27, 16, 5, colors.far); rect(12, 23, 18, 9, colors.far); rect(28, 27, 16, 5, colors.far);
  rect(41, 22, 21, 10, colors.far); rect(59, 27, 21, 5, colors.far);
  rect(0, 32, 80, 11, colors.hill); rect(0, 32, 10, 3, colors.grass); rect(23, 31, 18, 3, colors.grass); rect(55, 32, 25, 3, colors.grass);

  rect(0, 43, 80, 17, colors.dirt); rect(0, 43, 80, 2, colors.grass);
  rect(0, 51, 24, 9, colors.water); rect(0, 51, 24, 1, colors.waterLight);
  rect(5, 54, 6, 1, colors.waterLight); rect(17, 57, 5, 1, colors.waterLight);
  rect(27, 47, 2, 1, colors.dirtShade); rect(37, 55, 2, 1, colors.dirtShade); rect(69, 49, 3, 1, colors.dirtShade);

  rect(12, 31, 2, 12, colors.trunk); rect(8, 25, 10, 7, colors.leaf); rect(10, 22, 6, 5, colors.leafLight); rect(7, 28, 3, 4, colors.leafLight);
  rect(65, 30, 2, 13, colors.trunk); rect(61, 24, 10, 8, colors.leaf); rect(63, 21, 6, 5, colors.leafLight); rect(70, 27, 3, 4, colors.leafLight);
  rect(32, 39, 3, 2, colors.flower); rect(56, 46, 2, 2, colors.flower); rect(74, 39, 2, 2, colors.flower);

  const bounce = Math.sin(time / 360) > .85 ? 1 : 0;
  const x = 43;
  const y = 33 - bounce;
  rect(x, y, 4, 3, colors.skin); rect(x - 1, y + 3, 6, 5, colors.character);
  rect(x, y + 4, 2, 1, colors.dark); rect(x + 3, y + 4, 1, 1, colors.dark);
  rect(x, y + 8, 2, 3, colors.dark); rect(x + 3, y + 8, 2, 3, colors.dark);
  rect(x - 2, y + 4, 2, 3, colors.skin); rect(x + 5, y + 4, 2, 3, colors.skin);
  rect(x - 1, y - 1, 6, 1, colors.dark); rect(x, y - 2, 4, 1, colors.dark);

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.requestAnimationFrame(drawScene);
  }
}

drawScene();