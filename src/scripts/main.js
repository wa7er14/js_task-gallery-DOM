'use strict';

const images = document.querySelectorAll('.list-item__link');
const largeImage = document.querySelector('#largeImg');

function handler(ev) {
  const currentImg = ev.currentTarget.firstElementChild;

  largeImage.src = currentImg.src.replace('-thumb', '').replace('jpeg', 'png');
  ev.preventDefault();
}

images.forEach(image => image.addEventListener('click', handler));
