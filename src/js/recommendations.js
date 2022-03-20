import createItem from './item.js';
import carousel from './carousel.js';

const recommendations = [
  {
    thumbnail: 'src/img/thumbnail/recommendations/edm.jpg',
    title: 'EDM',
    subtitle: ['Alok', 'Cat Dealers', 'Vintage Culture', 'Chris Lake'],
  },
  {
    thumbnail: 'src/img/thumbnail/recommendations/trance.jpg',
    title: 'Trance',
    subtitle: ['Mandragora', 'Infected Mushroom', 'Astrix', 'Henrique Camacho'],
  },
  {
    thumbnail: 'src/img/thumbnail/recommendations/offbeat.jpg',
    title: 'Offbeat',
    subtitle: ['Phaxe', 'Querox', 'Morten Granau', 'Neelix', 'Durs'],
  },
  {
    thumbnail: 'src/img/thumbnail/recommendations/metal.jpg',
    title: 'Metal',
    subtitle: ['Rammstein', 'Metallica', 'Disturbed', 'Motörhead'],
  },
  {
    thumbnail: 'src/img/thumbnail/recommendations/alternative.jpg',
    title: 'Alternativa',
    subtitle: ['Young the Giant', 'Arctic Monkeys', 'Imagine Dragons', 'The Neighbourhood'],
  },
  {
    thumbnail: 'src/img/thumbnail/recommendations/rap.jpg',
    title: 'Rap',
    subtitle: ['Snoop Dogg', 'Eminem', 'Dr. Dre', '2Pac', 'Busta Rhymes'],
  },
  {
    thumbnail: 'src/img/thumbnail/recommendations/pop.jpg',
    title: 'Pop',
    subtitle: ['The Chainsmokers', 'Halsey', 'Lady Gaga', 'Dua Lipa', 'Lana Del Rey'],
  },
  {
    thumbnail: 'src/img/thumbnail/recommendations/funk.jpg',
    title: 'Funk',
    subtitle: ['Ludmilla', 'Anitta', 'MC Kevinho', 'Lexa', 'POCAH'],
  },
  {
    thumbnail: 'src/img/thumbnail/recommendations/chill.jpg',
    title: 'Chill',
    subtitle: ['SOMMA', 'Regard', 'ZHU', 'Bassnectar', 'Liquid Stranger'],
  },
  {
    thumbnail: 'src/img/thumbnail/recommendations/on-road.jpg',
    title: 'On the Road',
    subtitle: ['AC/DC', 'ZZ Top', 'Mötley Crüe', 'Ozzy Osbourne', 'The Black Keys'],
  },
];

function createRecommendationsOnDOM() {
  const carouselWrapper = document.querySelector('.home__recommendations-content') || {};
  recommendations.forEach((album) => {
    const albumDiv = createItem(album);
    carouselWrapper.appendChild(albumDiv);
  });
}

function initCarousel() {
  const prevBtn = document.querySelector('.home__prev-btn.recommendations') || {};
  const nextBtn = document.querySelector('.home__next-btn.recommendations') || {};
  const wrapper = document.querySelector('.home__recommendations-wrapper') || {};
  const content = document.querySelector('.home__recommendations-content') || {};

  carousel.init(prevBtn, nextBtn, wrapper, content);
}

export default {
  init() {
    createRecommendationsOnDOM();
    initCarousel();
  },
};
