let year = new Date().getFullYear();

const footerCurrentYear = (document.querySelector(
  ".footer__current-year"
).textContent = `${year} год`);

function disabledScroll() {
  document.body.style.cssText = ` overflow: hidden`;
}

const options = {
  threshold: 0,
  rootMargin: "-50% 0% -50% 0%",
};

// const target = document.querySelector("#how-we-work");
// const target2 = document.querySelector(".step-4");
// const callback = function (entries, observer) {
//   entries.forEach((entry) => {
//     const {isIntersecting} = entry;
//     console.log(isIntersecting);
//     if (isIntersecting) {
//       window.addEventListener("wheel", function (e) {
//         if (e.deltaY > 0) {
//           target.scrollLeft += 700;
//         } else {
//           target.scrollLeft -= 700;
//         }
//       });
//       disabledScroll();
//     } else {
//       console.log("No");
//     }
//   });
// };
// const observer = new IntersectionObserver(callback, options);

//observer.observe(target);

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
});
