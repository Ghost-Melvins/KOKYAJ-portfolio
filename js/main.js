const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

// Sur petit écran, le bouton ouvre ou ferme la navigation.
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  // Après le choix d’une section, le menu se referme sur mobile.
  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Ouvrir le menu');
      navigation.classList.remove('is-open');
    });
  });
}

// Le lien de navigation actif suit la section au centre de l’écran.
const sectionLinks = navigation
  ? [...navigation.querySelectorAll('a[href^="#"]')]
      .map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) }))
      .filter((item) => item.section)
  : [];

function updateActiveSection() {
  if (sectionLinks.length === 0) return;

  const headerHeight = document.querySelector('.site-header')?.offsetHeight ?? 0;
  const readingPosition = window.scrollY + headerHeight + window.innerHeight * 0.28;
  let current = sectionLinks[0];

  sectionLinks.forEach((item) => {
    if (item.section.offsetTop <= readingPosition) current = item;
  });

  const atPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  if (atPageBottom) current = sectionLinks[sectionLinks.length - 1];

  sectionLinks.forEach(({ link }) => {
    const isActive = link === current.link;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

let scrollUpdatePending = false;
window.addEventListener('scroll', () => {
  if (scrollUpdatePending) return;
  scrollUpdatePending = true;
  window.requestAnimationFrame(() => {
    updateActiveSection();
    scrollUpdatePending = false;
  });
}, { passive: true });
window.addEventListener('resize', updateActiveSection);
sectionLinks.forEach(({ link }) => link.addEventListener('click', updateActiveSection));
updateActiveSection();

// Le formulaire prépare un e-mail dans l’application choisie par le visiteur.
// Le site ne stocke ni n’envoie le message sans action de sa part.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const values = new FormData(contactForm);
    const subject = `[Portfolio KOKYAJ] ${values.get('subject')}`;
    const body = [
      `Nom : ${values.get('name')}`,
      `E-mail : ${values.get('email')}`,
      '',
      values.get('message'),
    ].join('\n');

    const mailto = `mailto:yannkoko08@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

// L’année du pied de page suit automatiquement l’année en cours.
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
