/*================ REVIEW SLIDER ================*/

const reviewTrack = document.querySelector(".review-track");
const reviewCards = document.querySelectorAll(".review-card");
const reviewNext = document.getElementById("reviewNext");
const reviewPrev = document.getElementById("reviewPrev");

if(reviewTrack){

let index = 0;

function updateSlider(){

let cardWidth = reviewCards[0].offsetWidth + 30;

reviewTrack.style.transform =
`translateX(-${index * cardWidth}px)`;

}

reviewNext.addEventListener("click",()=>{

if(window.innerWidth>768){

index++;

if(index>reviewCards.length-3){
index=0;
}

}else{

index++;

if(index>reviewCards.length-1){
index=0;
}

}

updateSlider();

});

reviewPrev.addEventListener("click",()=>{

index--;

if(index<0){

if(window.innerWidth>768){
index=reviewCards.length-3;
}else{
index=reviewCards.length-1;
}

}

updateSlider();

});

window.addEventListener("resize",updateSlider);

updateSlider();

setInterval(()=>{

reviewNext.click();

},5000);

}