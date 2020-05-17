//Selecting Carousel Slide and Imgs
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelector(".carousel-slide img");
// Buttons Selction
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
// Making Counter
let counter = 1;
const size = carouselImages[0].clientWidth;