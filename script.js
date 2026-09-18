const quoteForm = document.querySelector('#quote-form');
const formNote = document.querySelector('#form-note');
const siteHeader = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteHeader.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

mainNav.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;

  siteHeader.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
});

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(quoteForm).get('name');
  formNote.textContent = `Thanks, ${name}. Your inquiry is ready for the Revalto team.`;
  quoteForm.reset();
});
