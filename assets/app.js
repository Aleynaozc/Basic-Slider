const carouselSlide = document.querySelector(".carousel_slide");
const controls = document.querySelector(".controls");
const carouselImages = document.querySelectorAll(".carousel_slide img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let counter = 0;

for (let i = 0; i < carouselImages.length; i++) {
  controls.innerHTML += `<button class="dot"></button>`;
}

const dot = document.querySelectorAll(".dot");
function dotClear() {
  dot.forEach((e) => e.classList.remove("active"));
  dot[counter].classList.add("active");
}
dotClear();

const size = carouselImages[0].clientWidth;

function transform() {
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
}

dot.forEach((dotBtn, index) => {
  dotBtn.addEventListener("click", () => {
    counter = index;
    dotClear();
    dotBtn.classList.add("active");
    transform();
  });
});

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) counter = -1;
  counter++;
  transform();
  dotClear();
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) counter = carouselImages.length;
  counter--;
  transform();
  dotClear();
});
