//Selecting Carousel Slide and Imgs
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
// Buttons Selction
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
// Making Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

// Buttons Listeners
nextBtn.addEventListener("click",()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

});
prevBtn.addEventListener("click",()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

// Adding Transition End to Loop back to original picture
carouselSlide.addEventListener("transitionend", () => {
    // console.log(carouselImages[counter]);
    //TransitionEnd for at LastClone
    if (carouselImages[counter].id === "lastClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2 ;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    //TransitionEnd for at FirstClone
    if (carouselImages[counter].id === "firstClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter ;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
})