let color__list = document.querySelector('.color__list');
let sort__color = document.querySelector('.sort__color');
sort__color.addEventListener('click', function(){
   color__list.classList.toggle('hidden');
});

let size__list = document.querySelector('.size__list');
let sort__size = document.querySelector('.sort__size');
sort__size.addEventListener('click', function(){
   size__list.classList.toggle('hidden');
});

let quantity__list = document.querySelector('.quantity__list');
let sort__quantity = document.querySelector('.sort__quantity');
sort__quantity.addEventListener('click', function(){
   quantity__list.classList.toggle('hidden');
});