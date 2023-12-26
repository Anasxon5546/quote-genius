let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const url = 'https://api.quotable.io/random';

function randomQuote() {
  fetch(url)
  .then((data) => data.json())
  .then((item) => {
    quote.textContent = item.content;
    author.textContent = item.author;
  })
}

window.addEventListener('load', randomQuote);
