const quoteForm = document.querySelector('#quote-form');
const formNote = document.querySelector('#form-note');

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(quoteForm).get('name');
  formNote.textContent = `Thanks, ${name}. Your inquiry is ready for the Revalto team.`;
  quoteForm.reset();
});
