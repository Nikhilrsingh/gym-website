/* =========================
   SCROLL TO TOP ON RELOAD
========================= */

history.scrollRestoration = "manual";

window.addEventListener("pageshow", () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, 100);
});

/* =========================
   ELEMENTS
========================= */

const scrollBtn = document.getElementById("scrollBtn");
const scrollIcon = document.getElementById("scrollIcon");

const whatsappBtn = document.getElementById("whatsappBtn");
const instaBtn = document.getElementById("instaBtn");

/* =========================
   SCROLL BUTTON
========================= */

let atBottom = false;

if (scrollBtn) {

  scrollBtn.addEventListener("click", () => {

    if (!atBottom) {

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });

      if (scrollIcon) {
        scrollIcon.classList.remove("fa-arrow-down");
        scrollIcon.classList.add("fa-arrow-up");
      }

      atBottom = true;

    } else {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      if (scrollIcon) {
        scrollIcon.classList.remove("fa-arrow-up");
        scrollIcon.classList.add("fa-arrow-down");
      }

      atBottom = false;
    }

  });

  window.addEventListener("scroll", () => {

    if (window.scrollY > 200) {
      scrollBtn.style.opacity = "1";
    } else {
      scrollBtn.style.opacity = "0";
    }

  });

}

/* =========================
   ACTIVE NAVBAR LINK
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active-link");

    if (
      link.getAttribute("href") === `#${current}`
    ) {
      link.classList.add("active-link");
    }

  });

});

/* =========================
   FLOATING BUTTONS
========================= */

function showButtons() {

  if (!whatsappBtn || !instaBtn || !phoneBtn) return;

  whatsappBtn.classList.add("show-float");
  instaBtn.classList.add("show-float");
  phoneBtn.classList.add("show-float");

  setTimeout(() => {

    whatsappBtn.classList.remove("show-float");
    instaBtn.classList.remove("show-float");
    phoneBtn.classList.remove("show-float");
    
  }, 7000);

}

setTimeout(showButtons, 5000);

setInterval(showButtons, 12000);


window.addEventListener("scroll", () => {

  const progress =
    (window.scrollY /
    (document.documentElement.scrollHeight -
    window.innerHeight)) * 100;

  document.getElementById("scroll-progress").style.width =
    progress + "%";

});


/* =========================
   MOBILE MENU
========================= */

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if(navToggle){
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if(navClose){
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Close menu after clicking link */

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyA0gyn4NaOVHGOzwB4UBmBVklOu9oTLmIkrIITvkudpyuPGg6WRu7c5U5wiMHiYhyZ/exec";

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", async (e) => {

e.preventDefault();

const submitBtn = form.querySelector("button[type='submit']");

submitBtn.disabled = true;
submitBtn.innerText = "Submitting...";

const formData = {
first_name: form.querySelector('[name="first_name"]').value,
last_name: form.querySelector('[name="last_name"]').value,
email: form.querySelector('[name="email"]').value,
phone: form.querySelector('[name="phone"]').value,
message: form.querySelector('[name="message"]').value
};

try{

const response = await fetch(SCRIPT_URL,{
method:"POST",
body:JSON.stringify(formData)
});

console.log(await response.text());

const whatsappMessage = `
🏆 REBORN FITNESS - INQUIRY

━━━━━━━━━━━━━━━

👤 Name:
${formData.first_name} ${formData.last_name}

📞 Phone:
${formData.phone}

📧 Email:
${formData.email}

💬 Message:
${formData.message}

━━━━━━━━━━━━━━━

🌐 Submitted from Reborn Fitness Website

💪 UNLEASH THE BULL.
🏆 BUILD YOUR LEGACY.
`;

window.open(
`https://wa.me/918010267189?text=${encodeURIComponent(whatsappMessage)}`,
"_blank"
);

showPopup();

form.reset();

}catch(error){

alert("Something went wrong. Please try again.");

}

submitBtn.disabled = false;
submitBtn.innerText = "BOOK FREE CONSULTATION";

});

}



function showPopup(){
document
.getElementById("successPopup")
.classList.add("show");
}

function closePopup(){
document
.getElementById("successPopup")
.classList.remove("show");
}