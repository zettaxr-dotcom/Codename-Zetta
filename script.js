/* =========================
   AUTO SLIDER IKLAN SMOOTH
========================= */

const slider = document.getElementById("autoSlider");

let autoSlide = 0;

function smoothSlider(){

    const cards = document.querySelectorAll(".slide-card");

    if(cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 18;

    autoSlide++;

    if(autoSlide >= cards.length){

        autoSlide = 0;

    }

    slider.scrollTo({
        left:autoSlide * cardWidth,
        behavior:"smooth"
    });

}

setInterval(smoothSlider, 4000);


/* =========================
   CATEGORY SCROLL
========================= */

const menuButtons = document.getElementById("menuButtons");

document.getElementById("scrollRight").addEventListener("click", () => {

    menuButtons.scrollBy({
        left:220,
        behavior:"smooth"
    });

});

document.getElementById("scrollLeft").addEventListener("click", () => {

    menuButtons.scrollBy({
        left:-220,
        behavior:"smooth"
    });

});


/* =========================
   SEARCH CONTENT
========================= */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const filter = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".youtube-card");

    cards.forEach(card => {

        const title = card.querySelector(".content-title")
        .innerText
        .toLowerCase();

        if(title.includes(filter)){

            card.style.display = "flex";

            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
            },50);

        } else {

            card.style.opacity = "0";
            card.style.transform = "scale(.9)";

            setTimeout(() => {
                card.style.display = "none";
            },200);

        }

    });

});


/* =========================
   ANIMATION SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
".section-box, .minecraft-card, .youtube-card, .shop-card, .popular-card"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 80){

            el.classList.add("active-reveal");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================
   PARALLAX HERO
========================= */

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    const hero = document.querySelector(".hero-section");

    hero.style.transform = `translateY(${scrollY * 0.08}px)`;

});


/* =========================
   HOVER EFFECT CARD
========================= */

const hoverCards = document.querySelectorAll(
".youtube-card, .shop-card, .popular-card, .minecraft-card"
);

hoverCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((y / rect.height) - 0.5) * -8;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-6px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

});


/* =========================
   SMOOTH BUTTON EFFECT
========================= */

const buttons = document.querySelectorAll(
".nav-btn, .scroll-btn, .page-btn"
);

buttons.forEach(btn => {

    btn.addEventListener("mousedown", () => {

        btn.style.transform = "scale(.92)";

    });

    btn.addEventListener("mouseup", () => {

        btn.style.transform = "scale(1)";

    });

});


/* =========================
   REVEAL CLASS AUTO STYLE
========================= */

const style = document.createElement("style");

style.innerHTML = `

.active-reveal{
    animation:fadeUp .7s ease forwards;
}

@keyframes fadeUp{

    from{
        opacity:0;
        transform:translateY(40px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }

}

.section-box,
.minecraft-card,
.youtube-card,
.shop-card,
.popular-card{
    opacity:0;
}

`;

document.head.appendChild(style);