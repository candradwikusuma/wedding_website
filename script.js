//* change navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let top = window.scrollY;
  let position = top > 200;
  // console.log(top);

  header.classList.toggle("scrolling-active", position);
});

//* smooth scrolling
function smoothScroll(target, duration) {
  let smoothTarget = document.querySelector(target);
  let TargetPosition = smoothTarget.getBoundingClientRect().top - 100;
  let startPosition = window.pageYOffset;
  // let distance = TargetPosition - startPosition;
  let startTime = null;
  console.log(TargetPosition);
  console.log(startPosition);
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, TargetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}
let section1 = document.querySelector(".section1");
section1.addEventListener("click", function () {
  smoothScroll(".jumbotron", 1000);
});
let section2 = document.querySelector(".section2");
section2.addEventListener("click", function () {
  smoothScroll(".about", 1000);
});
let port = document.querySelector(".jumbotron .button");
port.addEventListener("click", function () {
  smoothScroll(".portofolio", 1000);
});
let section3 = document.querySelector(".section3");
section3.addEventListener("click", function () {
  smoothScroll(".portofolio", 1000);
});
let section4 = document.querySelector(".section4");
section4.addEventListener("click", function () {
  smoothScroll(".price", 1000);
});
let section5 = document.querySelector(".section5");
section5.addEventListener("click", function () {
  smoothScroll(".contact", 1000);
});

//* navigation slide
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar ul");
  const navLinks = document.querySelectorAll(".navbar ul li");

  burger.addEventListener("click", () => {
    //*toggle nav
    nav.classList.toggle("nav-active");
    //*animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
        console.log(index / 5 + 0.2);
      }
    });
    //*burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();
