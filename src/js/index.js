let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let eventName = isMobile ? "touchmove" : "wheel";

console.log(eventName);

window.addEventListener("touchstart", touchStart, false);

let start = {y: 0};
let started = 0;
function touchStart(event) {
  start.y = event.touches[0].clientY;
}

(function () {
  init();
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
        // console.log(container.querySelector("main").scrollWidth);
        container.setAttribute(
          "style",
          "height: " + stikyContainerHeight + "px"
        );
        console.log(stikyContainerHeight + " stikyContainerHeight");
      });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    //console.log(rect.top + " rect.top");
    // console.log(rect.bottom + " rect.bottom");
    // console.log(
    //   document.documentElement.clientHeight +
    //     " document.documentElement.clientHeight"
    // );
    // return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight; рабочее на компе
    //  console.log("hello");
    return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }

  function wheelHandler(evt) {
    const containerInViewPort = Array.from(
      document.querySelectorAll(".sticky-container")
    ).filter(function (container) {
      return isElementInViewport(container);
    })[0];
    // if (containerInViewPort) {
    //   console.log("hello");
    //   const rect = el.getBoundingClientRect();
    //   console.log(rect.top);
    // }

    if (!containerInViewPort) {
      //console.log("no hello");
      return;
    }

    let isPlaceHolderBelowTop =
      containerInViewPort.offsetTop < document.documentElement.scrollTop;

    let isPlaceHolderBelowBottom =
      containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
      document.documentElement.scrollTop;
    //console.log(isPlaceHolderBelowBottom);

    let g_canScrollHorizontally =
      isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if (g_canScrollHorizontally) {
      containerInViewPort.querySelector("main").scrollLeft += evt.deltaY;
    }

    if (g_canScrollHorizontally && eventName == "touchmove") {
      // window.onscroll = () => window.scroll(0, 0);
      //рабочее
      offset = {};
      offset = start.y - evt.touches[0].clientY;
      // console.log(offset);
      started += (offset / 20) * 0.8;

      containerInViewPort.querySelector("main").scrollLeft += started;
      // console.log(started);
      // containerInViewPort.querySelector("main").scrollLeft += started;
      // console.log(containerInViewPort.querySelector("main").scrollLeft);
    }
  }
})();

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset >= rect.top) {
//     console.log(window.pageYOffset);
//   }
// });
//console.log(rect.top + " rect.top");

//console.log(document.querySelector(".sticky-container").scrollHeight);

//console.log(document.querySelector("main").scrollLeft);

// document.addEventListener("touchstart", function (e) {
//   console.log("Touch start:", e.touches[0].clientX, e.touches[0].clientY);
// });

// document.addEventListener("touchmove", function (e) {
//   console.log(
//     "Touch move:",
//     e.changedTouches[0].clientX,
//     e.changedTouches[0].clientY
//   );
// });
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
