//переменные
const innerNav = document.querySelector('.inner-nav');
const navToggle = document.querySelector('.nav__toggle');
const toggleMain = document.querySelector('.nav__toggle');
const mapСontainer = document.querySelector('.page-footer__map');

innerNav.classList.remove('inner-nav--nojs');

navToggle.addEventListener('click', function() {
  if (innerNav.classList.contains('inner-nav--opened')) {
    innerNav.classList.remove('inner-nav--opened');
    innerNav.classList.add('inner-nav--hide');
  } else {
    innerNav.classList.add('inner-nav--opened');
    innerNav.classList.remove('inner-nav--hide');
  }
});

toggleMain.classList.remove('nav__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (toggleMain.classList.contains('nav__toggle-close')) {
    toggleMain.classList.remove('nav__toggle-close');
  } else {
    toggleMain.classList.add('nav__toggle-close');
  }
});

mapСontainer.classList.remove('page-footer__map--nojs');

//карта
const map = L.map('map')
  .setView({
    lat: 59.92749,
    lng: 30.31127,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/svg/sprites/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.92749,
    lng: 30.31127,
  },
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);


//Слайдер

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});




