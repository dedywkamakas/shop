
         // КАТАЛОГ

'use strict'

let filter__lable = document.querySelector('.filter__lable');
let filter__show = document.querySelector('.filter__show');
let filter__icon = document.querySelector('.filter__icon');
filter__icon.addEventListener('click', function() {
   filter__show.classList.toggle('hidden');
   filter__lable.classList.toggle('filter__lable-color');
   filter__icon.classList.toggle('filter__icon-color');

   if (filter__icon.getAttribute('src') === 'img_catalog/filtr.png') {
      filter__icon.setAttribute('src', 'img_catalog/filtr-hover.png')
   } else{
      filter__icon.setAttribute('src', 'img_catalog/filtr.png')
   }
});


let list__categoryHeader = document.querySelectorAll('.list__categoryHeader');
list__categoryHeader.forEach(function(header) {
   header.addEventListener('click', function(event) {
      event.target.nextElementSibling.classList.toggle('hidden');
   })
   
});

let trending__list = document.querySelector('.trending__list');
let right__trending = document.querySelector('.right__trending');
right__trending.addEventListener('click', function(){
   trending__list.classList.toggle('hidden');
});

let size__list = document.querySelector('.size__list');
let right__size = document.querySelector('.right__size');
right__size.addEventListener('click', function(){
   size__list.classList.toggle('hidden');
});

let price__list = document.querySelector('.price__list');
let right__prise = document.querySelector('.right__prise');
right__prise.addEventListener('click', function(){
   price__list.classList.toggle('hidden');
});
