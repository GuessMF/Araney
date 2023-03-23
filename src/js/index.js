// const element = document.querySelector(".step-3");

// element.scrollIntoView(false);

// window.addEventListener("wheel", function (e) {

// })

// let intElemScrollTop = window.scrollTop();
// console.log(intElemScrollTop);

let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let eventName = isMobile ? "touchmove" : "wheel";
// document.addEventListener(eventName, (e) => {
//   let delta = e.deltaY || e.touches[0].clientY - startY;
//   // do something with delta
// });
console.log(eventName);

// let check = null;

// document.addEventListener("touchstart", function (e) {
//   check = e;
// });
// document.addEventListener("touchmove", function (e) {
//   if (check) {
//     // console.log("Move delta: " + (e.touches[0].pageY - check.touches[0].pageY));
//   }
// });
// document.addEventListener("touched", function (e) {
//   check = null;
// });
// window.addEventListener("touchstart", touchStart, false);
// window.addEventListener("touchmove", touchMove, false);

// var start = {x: 0, y: 0};

// function touchStart(event) {
//   start.x = event.touches[0].pageX;
//   start.y = event.touches[0].pageY;
// }

// function touchMove(event) {
//   offset = {};

//   offset.x = start.x - event.touches[0].pageX;
//   offset.y = start.y - event.touches[0].pageY;
//   //console.log(offset.y);
//   return offset;
// }
// console.log(offset.y);

window.addEventListener("touchstart", touchStart, false);
//window.addEventListener("touchmove", touchMove, false);

let start = {y: 0};
let started = 0;
function touchStart(event) {
  start.y = event.touches[0].clientY;
}

// function touchMove(event) {
//   //event.preventDefault();
//   offset = {};
//   // console.log("start" + start.y);
//   offset = start.y - event.touches[0].clientY;
//   return offset;
// }

(function () {
  init();

  //let g_containerInViewport;
  function init() {
    setStickyContainersSize();
    bindEvents();
  }

  function bindEvents() {
    window.addEventListener(eventName, wheelHandler);
  }

  function setStickyContainersSize() {
    document
      .querySelectorAll(".sticky-container")
      .forEach(function (container) {
        const stikyContainerHeight =
          container.querySelector("main").scrollWidth;
        container.setAttribute(
          "style",
          "height: " + stikyContainerHeight + "px"
        );
      });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    // console.log(rect.top);
    return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }

  function wheelHandler(evt) {
    const containerInViewPort = Array.from(
      document.querySelectorAll(".sticky-container")
    ).filter(function (container) {
      return isElementInViewport(container);
    })[0];

    if (!containerInViewPort) {
      return;
    }

    let isPlaceHolderBelowTop =
      containerInViewPort.offsetTop < document.documentElement.scrollTop;
    // console.log(isPlaceHolderBelowTop + "isPlaceHolderBelowTop");

    let isPlaceHolderBelowBottom =
      containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
      document.documentElement.scrollTop;

    let g_canScrollHorizontally =
      isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if (g_canScrollHorizontally) {
      containerInViewPort.querySelector("main").scrollLeft += evt.deltaY;
      console.log(containerInViewPort.querySelector("main").scrollLeft);
    }

    if (g_canScrollHorizontally && eventName == "touchmove") {
      offset = {};

      offset = start.y - evt.touches[0].clientY;
      // console.log(offset);
      started += offset / 10;
      // console.log(started + "  started");
      containerInViewPort.querySelector("main").scrollLeft += started;
    }
  }
})();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//Закрытие гамбургер меню
const items = document.querySelector(".menu-items");
items.addEventListener("click", (e) => {
  const {target} = e;
  if (target.matches("a")) {
    checkToggle = document.getElementById("toggle");
    checkToggle.checked = false;
  }
});

//Появляющиеся элементы в Избранных кейсах
const addButton = document.querySelector(".selected-cases__add");
const bicycleCity = document.querySelector(".selected-cases__bicycle-city");
const peterhof = document.querySelector(".selected-cases__peterhof");
const glonass = document.querySelector(".selected-cases__glonass");
const alfaMk = document.querySelector(".selected-cases__alfa-mk");

addButton.addEventListener("click", () => {
  if (glonass.style.display == "inherit") {
    alfaMk.style.display = "inherit";
    addButton.style.display = "none";
  }
  bicycleCity.style.display = "inherit";
  peterhof.style.display = "inherit";
  glonass.style.display = "inherit";
  document.querySelector(".selected-cases__add-text-h3").textContent =
    "Нажмите, чтобы загрузить еще 1 работу";
  addButton.style.margin = "20px 0 0 0";
});

//Текущая дата в футере
let year = new Date().getFullYear();
const footerCurrentYear = (document.querySelector(
  ".footer__current-year"
).textContent = `${year} год`);
