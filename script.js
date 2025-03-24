const images = [
  'img/lebron_cavs.jpg',
  'img/lebron_heat.jpg',
  'img/lebron_lakers.jpg'
];

let current = 0;
const imgElement = document.getElementById('slider-img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
  current = (current + 1) % images.length;
  imgElement.src = images[current];
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  imgElement.src = images[current];
});

const toggleBtn = document.querySelector('.toggle-quote-btn');
const quote = document.querySelector('.quote');

toggleBtn.addEventListener('click', () => {
  if (quote.style.display === 'block') {
    quote.style.display = 'none';
    toggleBtn.textContent = 'Show Quote';
  } else {
    quote.style.display = 'block';
    toggleBtn.textContent = 'Hide Quote';
  }
});
