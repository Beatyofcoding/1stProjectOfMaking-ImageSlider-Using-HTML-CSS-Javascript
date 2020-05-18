//Selecting Carousel Slide and Imgs
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelector(".carousel-slide img");
// Buttons Selction
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
// Making Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

// Buttons Listeners
nextBtn.addEventListener("click",()=>{
    carouselSlide.style.transition = "trasform 0.4s ease-in-out";
    counter++;
    console.log(counter)
})