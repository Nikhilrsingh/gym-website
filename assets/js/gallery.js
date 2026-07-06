/*================ GALLERY LIGHTBOX ================*/

document.addEventListener("DOMContentLoaded", () => {

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("galleryLightbox");
const preview = document.getElementById("galleryPreview");
const closeBtn = document.getElementById("galleryClose");
const prevBtn = document.getElementById("galleryPrev");
const nextBtn = document.getElementById("galleryNext");
const counter = document.getElementById("galleryCounter");

if(!galleryItems.length || !lightbox) return;

let currentImage = 0;

galleryItems.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentImage=index;
preview.src=img.src;
counter.innerHTML=`${currentImage+1} / ${galleryItems.length}`;
lightbox.classList.add("show");
lightbox.setAttribute("tabindex", "-1");
lightbox.focus();

});

});

closeBtn.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

nextBtn.addEventListener("click",()=>{

currentImage++;

if(currentImage>=galleryItems.length){
currentImage=0;
}

preview.src=galleryItems[currentImage].src;
counter.innerHTML=`${currentImage+1} / ${galleryItems.length}`;

});

prevBtn.addEventListener("click",()=>{

currentImage--;

if(currentImage<0){
currentImage=galleryItems.length-1;
}

preview.src=galleryItems[currentImage].src;
counter.innerHTML=`${currentImage+1} / ${galleryItems.length}`;

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){
lightbox.classList.remove("show");
}

});






document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("show")) return;

    // Prevent browser back/scroll behavior
    if (["ArrowLeft", "ArrowRight", "Escape"].includes(e.key)) {
        e.preventDefault();
    }

    if (e.key === "ArrowRight") {

        currentImage++;

        if (currentImage >= galleryItems.length) {
            currentImage = 0;
        }

        preview.src = galleryItems[currentImage].src;
        counter.textContent = `${currentImage + 1} / ${galleryItems.length}`;
    }

    if (e.key === "ArrowLeft") {

        currentImage--;

        if (currentImage < 0) {
            currentImage = galleryItems.length - 1;
        }

        preview.src = galleryItems[currentImage].src;
        counter.textContent = `${currentImage + 1} / ${galleryItems.length}`;
    }

    if (e.key === "Escape") {
        lightbox.classList.remove("show");
    }

});




/*================ MOBILE SWIPE =================*/

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart",(e)=>{

touchStartX = e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend",(e)=>{

touchEndX = e.changedTouches[0].screenX;

handleSwipe();

});

function handleSwipe(){

const diff = touchStartX - touchEndX;

if(Math.abs(diff) < 50) return;

if(diff > 0){

currentImage++;

if(currentImage >= galleryItems.length){
currentImage = 0;
}

}else{

currentImage--;

if(currentImage < 0){
currentImage = galleryItems.length - 1;
}

}

preview.src = galleryItems[currentImage].src;

counter.innerHTML = `${currentImage + 1} / ${galleryItems.length}`;

}
});