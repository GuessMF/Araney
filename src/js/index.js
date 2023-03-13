let year = new Date().getFullYear();

const footerCurrentYear = (document.querySelector(
  ".footer__current-year"
).textContent = `${year} год`);
