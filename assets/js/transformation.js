/*================ BEFORE AFTER SLIDER ================*/

const slider = document.getElementById("compareSlider");

if(slider){

const before = document.querySelector(".before-wrapper");
const line = document.querySelector(".slider-line");
const button = document.querySelector(".slider-button");

function updateCompare(){

const value = slider.value;

before.style.width = value + "%";

line.style.left = value + "%";

button.style.left = value + "%";

}

slider.addEventListener("input", updateCompare);

updateCompare();

}