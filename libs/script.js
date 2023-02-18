let moreButton = document.querySelector(".card-more-button-active");
let moreButtonChange = document.querySelector(".card-more-button-change");
let moreBlocks = document.querySelector(".more-blocks");
let bloggerItem = document.querySelectorAll(".blogger-name");
let guest = document.querySelectorAll(".guest");
let burger = document.querySelector(".burger");
let navList = document.querySelector(".burger-list");
let moreBlocksList = document.querySelector(".podcasts__card-list");

let whatIn = document.querySelector(".what-in");
let whatInInfo = document.querySelector(".musik-blocks");
let whatSvg = document.querySelector(".what-button");
let whatBlock = document.querySelector(".container-header-bottom");
let link = document.querySelectorAll(".nav__link-top");

whatIn.addEventListener("click", function () {
  whatInInfo.classList.toggle("musik-blocks--active");
  whatSvg.classList.toggle("what-button--active");
  whatBlock.classList.toggle("container-header-bottom--active");
});

link.forEach(function (elem) {
  elem.addEventListener("click", function () {
    document.body.classList.toggle("stop-scroll--active");
    burger.classList.toggle("burger--active");
    navList.classList.toggle("burger-list--active");
  });
});
burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  navList.classList.toggle("burger-list--active");
  document.body.classList.toggle("stop-scroll--active");
});

bloggerItem.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    bloggerItem.forEach(function (btn) {
      btn.classList.remove("blogger-name--active");
    });
    e.currentTarget.classList.add("blogger-name--active");

    guest.forEach(function (element) {
      element.classList.remove("guest--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("guest--active");
  });
});

moreButton.addEventListener("click", function () {
  moreBlocks.classList.add("more-blocks--active");
  moreButtonChange.classList.add("card-more-button-change--active");
  moreButton.classList.toggle("card-more-button");
  moreBlocksList.classList.toggle("podcasts__card-list--active");
});

moreButtonChange.addEventListener("click", function () {
  moreBlocks.classList.remove("more-blocks--active");
  moreButtonChange.classList.remove("card-more-button-change--active");
  moreButton.classList.toggle("card-more-button");
  moreBlocksList.classList.toggle("podcasts__card-list--active");
});

let searchButton = document.querySelector(".nav-button-top-search");
let searchButtonRemove = document.querySelector(".search-remove");
let form = document.querySelector(".input-search");

searchButtonRemove.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.toggle("input-search--active");
  searchButtonRemove.classList.toggle("search-remove--active");
});
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.toggle("input-search--active");
  searchButtonRemove.classList.toggle("search-remove--active");
});

let enterButton = document.querySelectorAll(".nav-button-top-enter");
let formEnter = document.querySelector(".form-enter");
let close = document.querySelector(".close");

enterButton.forEach(function (button) {
  button.addEventListener("click", function () {
    formEnter.classList.toggle("form-enter--active");
  });
});

close.addEventListener("click", function (e) {
  e.preventDefault();
  formEnter.classList.toggle("form-enter--active");
});

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate(".form");

  validation
    .addField(".name", [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Как Вас зовут?",
      },
      {
        rule: "maxLength",
        value: 20,
        errorMessage: "Слишком длинное имя",
      },
    ])
    .addField(".mail", [
      {
        rule: "required",
        errorMessage: "Введите E-mail",
      },
      {
        rule: "email",
        errorMessage: "E-mail введен некорректно",
      },
    ])
    .addField(".about-checkbox", [
      {
        rule: "required",
        errorMessage: " ",
      },
    ])
    .onSuccess((event) => {
      console.log("Validation passes and form submitted", event);

      let formData = new FormData(event.target);

      console.log(...formData);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Отправлено");
          }
        }
      };

      xhr.open("POST", "mail.php", true);
      xhr.send(formData);

      event.target.reset();
    });
});

moreButtonChange.addEventListener("click", function () {});

let swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    376: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
});

const element = document.querySelector(".select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  position: "bottom",
});

new Accordion(".accordion");
new Accordion(".guests__list", {
  elementClass: "guests__item-trigger",
  triggerClass: "guests__item",
  panelClass: "accordeon-guests",
  activeClass: "accordeon-guests--active",
});
