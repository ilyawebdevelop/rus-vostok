Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

document.querySelectorAll('.mainSlider').forEach(n => {
  const mySwiperInnerSlider = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 13,
    speed: 600,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: true,
    watchSlidesProgress: true,
    allowTouchMove: true,
    mousewheel: false,
    pagination: {
      el: n.querySelector('.pagination'),
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: n?.closest('.mainSlider').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.mainSlider').querySelector('.navArrowNext'),
    },
  });
});

let searchBtnClose = document.querySelector('.searchBtnClose');
let searchW = document.querySelector('.searchW');
let searchBtnAction = document.querySelector('.searchBtnAction');
searchBtnAction?.addEventListener('click', () => {
  searchW.classList.toggle('active');
});
searchBtnClose?.addEventListener('click', () => {
  searchW.classList.remove('active');
});


// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavClose');
const mobMenuOverlay = document.querySelector('.mob-menu-overlay');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const overlayToggle = function () {
  mobMenuOverlay.classList.toggle('active');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
  overlayToggle();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  overlayToggle();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_nav = target == menu || menu.contains(target);
  let overlay_is_active = mobMenuOverlay.classList.contains('active');

  if (!its_nav && overlay_is_active) {
    toggleMenu();
    toggleBurger();
    bodyOverflow();
    overlayToggle();
  }
});