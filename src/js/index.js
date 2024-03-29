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

    let isPlaceHolderBelowTop =
      containerInViewPort.offsetTop < document.documentElement.scrollTop;

    let isPlaceHolderBelowBottom =
      containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
      document.documentElement.scrollTop;

    let g_canScrollHorizontally =
      isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if (g_canScrollHorizontally) {
      containerInViewPort.querySelector("main").scrollLeft += evt.deltaY;
    }

    if (g_canScrollHorizontally && eventName == "touchmove") {
      offset = {};
      offset = start.y - evt.touches[0].clientY;
      started += (offset / 20) * 0.8;

      containerInViewPort.querySelector("main").scrollLeft += started;
    }
  }
})();

function mobileScroll() {
  const howWeWork = document.querySelector("#how-we-work");
  // const stickyContainer = document.querySelector(".sticky-container");
  // console.log(stickyContainer);
  const sections = document.querySelectorAll("section");

  if (window.screen.width < 450) {
    console.log("mobile");
    howWeWork.classList.remove("how-we-work");
    howWeWork.classList.add("how-we-work-mobile");
    howWeWork.childNodes[1].classList.remove("sticky-container");
    howWeWork.childNodes[1].classList.add("sections");

    // console.log(howWeWork.childNodes[1].childNodes[1].querySelectorAll('section'));
    sections.forEach((element) => {
      console.log(element);
      element.classList.add("section_item");
    });
  }
}
mobileScroll();

//console.log(sections);

//
//
// Нужно поймать кинетический скролл на мобильном устройстве, иначе он проскакиваем мимо нужного контейнера
//
//

// let item = document.querySelector(".sticky-container");
// const rect = item.getBoundingClientRect();
// console.log(rect.top);
// document.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   // document.body.style.overflow = "hidden";
// });

// document.getElementById("how-we-work").addEventListener(
//   "touchmove",
//   function (event) {
//     event.preventDefault();
//   },
//   false
// );

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset) {
//     //&& window.pageYOffset <= 3525
//     console.log("visible");
//     console.log(window.pageYOffset);
//     // document.body.style.overflow = "hidden";
//     // setTimeout(() => {
//     //   document.body.style.overflow = "visible";
//     // }, 1000);
//   }
// });

// const elem = document.querySelector(".parent"), // находим элемент по id
//   // info = document.getElementById("info"), // находим элемент по id
//   domRect = elem.getBoundingClientRect();
//console.log(domRect.y);

// window.addEventListener("scroll", function () {
//   //console.log(window.pageYOffset);
//   if (window.pageYOffset >= domRect.y - 100) {
//     //&& window.pageYOffset <= 3525
//     //console.log("visible");
//     //  document.body.style.overflow = "hidden";
//     //elem.style.overflow = "scroll";
//     // document.body.style.overflow = "hidden";
//     // setTimeout(() => {
//     //   document.body.style.overflow = "visible";
//     // }, 1000);
//   }
// });
// let scrollPage = 0;

// const options = {
//   //rootMargin: "-50px 0px -50px 0%",
//   // rootMargin: "100px 0px 10px 0px",
//   threshold: 1,
// };
// document.body.style.overfow = "hidden";

// const testWrappers = document.querySelectorAll(".test__wrapper");
// console.log(testWrappers[0]);

// const trueCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     const {isIntersecting} = entry;

//     if (isIntersecting) {
//       console.log("Need to stop");

// elem.addEventListener(
//   "touchstart",
//   function (event) {
//     touchstartX = event.changedTouches[0].screenX;
//     touchstartY = event.changedTouches[0].screenY;
//   },
//   false
// );
//     }
//   });
// };

// window.addEventListener(
//   "touchend",
//   function (event) {
//     touchendX = event.changedTouches[0].screenX;
//     touchendY = event.changedTouches[0].screenY;
//     handleGesture();
//   },
//   false
// );

// const observer = new IntersectionObserver(trueCallback, options);

// observer.observe(elem);
// const parent = document.querySelector(".parent");

// parent.addEventListener(
//   "touchstart",
//   function (event) {
//     touchstartX = event.changedTouches[0].screenX;
//     touchstartY = event.changedTouches[0].screenY;
//   },
//   false
// );

// parent.addEventListener(
//   "touchend",
//   function (event) {
//     touchendX = event.changedTouches[0].screenX;
//     touchendY = event.changedTouches[0].screenY;
//     handleGesture();
//   },
//   false
// );
// let touchstartX = 0;
// let touchstartY = 0;
// let touchendX = 0;
// let touchendY = 0;

// let scrollWay;
// elem.style.overflow = "hidden";

// let tests = document.querySelectorAll(".test__wrapper");
//let tests = document.querySelectorAll(".anchor");

// function checkUnlockDisplay() {
//   // console.log(scrollPage);
//   scrollPage == 4
//     ? (document.body.style.overflow = "visible")
//     : console.log("not else");
// }

// function handleGesture() {
//   // if (touchendX < touchstartX) {
//   //   scrollWay = "Left";
//   //   console.log("Left");
//   // }

//   // if (touchendX > touchstartX) {
//   //   scrollWay = "Right";
//   //   console.log("Right");
//   // }

//   if (touchendY < touchstartY) {
//     parent.scroll(200, 0);
//     scrollWay = "Up";
//     console.log("Up");
//   }

//   if (touchendY > touchstartY) {
//     scrollWay = "Down";
//     console.log("Down");
//   }

//   if (touchendY === touchstartY) {
//     // console.log("Tap");
//   }
// }
// document.querySelector("#test-" + scrollPage).scrollIntoView({
//   // behavior: "smooth",
// });

// switch (scrollWay) {
//   case "Up":
//     if (scrollPage >= 4) {
//       scrollPage = 4;
//     } else {
//       scrollPage++;
//     }
//     if (scrollPage < 4) {
//       tests[scrollPage].scrollIntoView();
//     }

//     console.log("Vverh");
//     break;
//   case "Down":
//     if (scrollPage <= 0) {
//       scrollPage = 0;
//     } else {
//       scrollPage--;
//     }
// }
//     tests[scrollPage].scrollIntoView();
// checkUnlockDisplay();

// console.log("Vniz");
// break;
// case "Left":
//   if (scrollPage >= 4) {
//     scrollPage = 4;
//   } else {
//     scrollPage++;
//   }
//   tests[scrollPage].scrollIntoView();

//   console.log("Levo");
//   break;

// case "Right":
//   if (scrollPage <= 0) {
//     scrollPage = 0;
//   } else {
//     scrollPage--;
//   }
//   tests[scrollPage].scrollIntoView();
//   console.log("Pravo");
//   break;

//     default:
//       // console.log("nothing");
//       break;
//   }
// }

// function smoothScroll() {
//   // let tests = document.querySelectorAll(".test__wrapper");
//   // tests.forEach((el) => console.log(el));
//   console.log("#test-" + scrollPage);

//   document.querySelector("#test-" + scrollPage).scrollIntoView({
//     // behavior: "smooth",
//   });
// }

// window.addEventListener("keyup", (e) => {
//   let code = e.keyCode;
//   switch (code) {
//     case 37:
//       if (scrollPage <= 0) {
//         scrollPage = 0;
//       } else {
//         scrollPage--;
//       }
//       tests[scrollPage].scrollIntoView();

//       console.log("Vniz");
//       break;
//     case 39:
//       if (scrollPage >= 4) {
//         scrollPage = 4;
//       } else {
//         scrollPage++;
//       }
//       tests[scrollPage].scrollIntoView();
//       console.log("Vverh");
//       break;
//     default:
//       break;
//   }
//   console.log(scrollPage);
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
