const burgerEl = document.querySelector('.menu-list__products');
const menuEl = document.querySelector('.nav');
burgerEl.addEventListener("click", function () {
  menuEl.classList.toggle('nav_show');
});

const burgerCl = document.querySelector('.menu-list__company');
const menuCl = document.querySelector('.nav1');
burgerCl.addEventListener("click", function () {
  menuCl.classList.toggle('nav1_show');
});

const burgerBl = document.querySelector('.burger');
const menuBl = document.querySelector('.menu-list');
burgerBl.addEventListener("click", function () {
  menuBl.classList.toggle('menu-list_show');
});