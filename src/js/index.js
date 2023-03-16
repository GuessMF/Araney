let year = new Date().getFullYear();

const footerCurrentYear = (document.querySelector(
  ".footer__current-year"
).textContent = `${year} год`);

function disabledScroll() {
  document.body.style.cssText = ` overflow: hidden`;
}
const target = document.querySelector("#how-we-work");
function horizontalSkroll() {
  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0 && blockScroll == true) {
      target.scrollLeft += 700;
      console.log(target.scrollLeft + " Left");
    } else if (e.deltaY < 0 && blockScroll == true) {
      target.scrollLeft -= 700;
      console.log(target.scrollLeft + "Left");
    }
  });
}

const options = {
  threshold: 0.5,
  rootMargin: "0px 0px -48% 0px",
};

const target2 = document.querySelector(".step-4");
const callback = function (entries, observer) {
  entries.forEach((entry) => {
    const {isIntersecting} = entry;
    let blockScroll = false;
    console.log(isIntersecting + " is");
    direction = "";

    if (isIntersecting) {
      blockScroll = true;
      disabledScroll();
      console.log(blockScroll + "Block srooll srabotal");

      window.addEventListener("wheel", (e) => {
        if (e.deltaY < 0) {
          if (direction !== "up" || target.scrollLeft > 10) {
            console.log("up");
            target.scrollLeft -= 700;
            console.log(target.scrollLeft);
            target.scrollLeft < 10
              ? (document.body.style.cssText = ` overflow:scroll`)
              : null;
            direction = "up";
          }
        }
        if (e.deltaY > 0) {
          if (direction !== "down" || target.scrollLeft < 2080) {
            console.log("down");
            target.scrollLeft += 700;
            target.scrollLeft > 2080
              ? (document.body.style.cssText = ` overflow:scroll`)
              : null;
            direction = "down";
          }
        }
      });
    } else {
      blockScroll = false;
    }
    console.log(blockScroll);
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(target);

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
