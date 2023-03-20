// const element = document.querySelector(".step-3");

// element.scrollIntoView(false);

// window.addEventListener("wheel", function (e) {

// })

// let intElemScrollTop = window.scrollTop();
// console.log(intElemScrollTop);
/**
 * By Alvaro Trigo
 * Follow me on Twitter: https://twitter.com/imac2
 */
(function () {
  init();

  var g_containerInViewport;
  function init() {
    setStickyContainersSize();
    bindEvents();
  }

  function bindEvents() {
    window.addEventListener("wheel", wheelHandler);
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

    var isPlaceHolderBelowTop =
      containerInViewPort.offsetTop < document.documentElement.scrollTop;
    var isPlaceHolderBelowBottom =
      containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
      document.documentElement.scrollTop;
    let g_canScrollHorizontally =
      isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if (g_canScrollHorizontally) {
      containerInViewPort.querySelector("main").scrollLeft += evt.deltaY;
    }
  }
})();

// (function () {
//   init();

//   var g_containerInViewport;
//   function init() {
//     setStickyContainersSize();
//     bindEvents();
//   }

//   function bindEvents() {
//     window.addEventListener("wheel", wheelHandler);
//   }

//   function setStickyContainersSize() {
//     document.querySelectorAll(".how-we-work").forEach(function (container) {
//       const stikyContainerHeight =
//         container.querySelector(".wrapper-sticky").scrollWidth;
//       container.setAttribute("style", "height: " + stikyContainerHeight + "px");
//       console.log(stikyContainerHeight + "stikyContainerHeight");
//     });
//   }

//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
//   }

//   function wheelHandler(evt) {
//     const containerInViewPort = Array.from(
//       document.querySelectorAll(".how-we-work")
//     ).filter(function (container) {
//       //console.log(container);
//       return isElementInViewport(container);
//     })[0];
//     console.log(containerInViewPort);

//     if (!containerInViewPort) {
//       return;
//     }

//     let isPlaceHolderBelowTop =
//       containerInViewPort.offsetTop < document.documentElement.scrollTop;

//     // console.log(isPlaceHolderBelowTop + "isPlaceHolderBelowTop");
//     let isPlaceHolderBelowBottom =
//       containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
//       document.documentElement.scrollTop;
//     // console.log(isPlaceHolderBelowBottom + "isPlaceHolderBelowBottom");
//     let g_canScrollHorizontally =
//       isPlaceHolderBelowTop && isPlaceHolderBelowBottom;
//     //console.log(isPlaceHolderBelowBottom + "isPlaceHolderBelowBottom");

//     if (g_canScrollHorizontally) {
//       containerInViewPort.querySelector(".wrapper-sticky").scrollLeft +=
//         evt.deltaY;
//     }
//   }
// })();
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
//

// function disabledScroll() {
//   document.body.style.cssText = ` overflow: hidden`;
// }
// const target = document.querySelector("#how-we-work");
// function horizontalSkroll() {
//   window.addEventListener("wheel", function (e) {
//     if (e.deltaY > 0 && blockScroll == true) {
//       target.scrollLeft += 700;
//       console.log(target.scrollLeft + " Left");
//     } else if (e.deltaY < 0 && blockScroll == true) {
//       target.scrollLeft -= 700;
//       console.log(target.scrollLeft + "Left");
//     }
//   });
// }

// const options = {
//   threshold: 0.5,
//   rootMargin: "0px 0px -48% 0px",
// };

// const target2 = document.querySelector(".step-4");
// const howWeWork = document.querySelector(".how-we-work");
// const callback = function (entries, observer) {
//   entries.forEach((entry) => {
//     const {isIntersecting} = entry;
//     let blockScroll = false;
//     console.log(isIntersecting + " is");
//     direction = "";

// if (isIntersecting) {
//   blockScroll = true;
//   disabledScroll();
//   console.log(blockScroll + "Block srooll srabotal");
//   howWeWork.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     howWeWork.scrollLeft += evt.deltaY;
//     console.log(howWeWork.scrollLeft);
//     if (howWeWork.scrollLeft > 2080) {
//       evt.preventDefault();
//       document.body.style.cssText = ` overflow:scroll`;
//       window.scrollDown += evt.deltaY;
//     }
//   });

// window.addEventListener("wheel", (e) => {
//   if (e.deltaY < 0) {
//     if (direction !== "up" || target.scrollLeft > 10) {
//       console.log("up");
//       target.scrollLeft -= 100;
//       console.log(target.scrollLeft);
//       target.scrollLeft < 10
//         ? (document.body.style.cssText = ` overflow:scroll`)
//         : null;
//       direction = "up";
//     }
//   }
//   if (e.deltaY > 0) {
//     if (direction !== "down" || target.scrollLeft < 2080) {
//       console.log("down");
//       target.scrollLeft += 100;
//       target.scrollLeft > 2080
//         ? (document.body.style.cssText = ` overflow:scroll`)
//         : null;
//       direction = "down";
//     }
//   }
// });
//     } else {
//       blockScroll = false;
//     }
//     console.log(blockScroll);
//   });
// };

// const observer = new IntersectionObserver(callback, options);
// observer.observe(target);

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
