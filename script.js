"use strict";

const navigationItem = document.querySelectorAll(".navigation-nav__item");
const subMenu = Array.from(document.querySelectorAll(".sub-menu"));

navigationItem.forEach((item) => {
  subMenu.forEach((item) => item.classList.add("hidden"));

  item.addEventListener("click", () => {
    if (item.classList.contains("navigation-nav__item--1")) {
      subMenu[0].classList.toggle("hidden");
      subMenu[1].classList.add("hidden");
      subMenu[2].classList.add("hidden");
    }

    if (item.classList.contains("navigation-nav__item--2")) {
      subMenu[1].classList.toggle("hidden");
      subMenu[0].classList.add("hidden");
      subMenu[2].classList.add("hidden");
    }

    if (item.classList.contains("navigation-nav__item--3")) {
      subMenu[2].classList.toggle("hidden");
      subMenu[0].classList.add("hidden");
      subMenu[1].classList.add("hidden");
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 720) {
    document.querySelector(".navigation__checkbox").checked = false;
    subMenu.forEach(item => item.classList.add("hidden"));
  }
});
