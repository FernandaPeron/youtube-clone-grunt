import createItem from './item.js';
import carousel from './carousel.js';

const artists = [
  {
    thumbnail: 'src/img/thumbnail/favorites/rammstein.jpg',
    title: 'Rammstein',
    subtitle: '5,68 mi de inscritos',
  },
  {
    thumbnail: 'src/img/thumbnail/favorites/metallica.jpg',
    title: 'Metallica',
    subtitle: '7,44 mi de inscritos',
  },
  {
    thumbnail: 'src/img/thumbnail/favorites/aura-vortex.jpg',
    title: 'Aura Vortex',
    subtitle: '5,82 mil inscritos',
  },
  {
    thumbnail: 'src/img/thumbnail/favorites/blazy.jpg',
    title: 'Blazy',
    subtitle: '53,3 mil inscritos',
  },
  {
    thumbnail: 'src/img/thumbnail/favorites/eminem.jpg',
    title: 'Eminem',
    subtitle: '48,3 mi de inscritos',
  },
  {
    thumbnail: 'src/img/thumbnail/favorites/alok.jpg',
    title: 'Alok',
    subtitle: '6,05 mi de inscritos',
  },
];

function initCarousel() {
  const prevBtn = document.querySelector('.home__prev-btn.favorites') || {};
  const nextBtn = document.querySelector('.home__next-btn.favorites') || {};
  const wrapper = document.querySelector('.home__favorites-wrapper') || {};
  const content = document.querySelector('.home__favorites-content') || {};

  carousel.init(prevBtn, nextBtn, wrapper, content);
}

function createFavoritesOnDOM() {
  const carouselWrapper = document.querySelector('.home__favorites-content') || {};
  artists.forEach((artist) => {
    const artistDiv = createItem(artist);
    carouselWrapper.appendChild(artistDiv);
  });
}

export default {
  init() {
    createFavoritesOnDOM();
    initCarousel();
  },
};
