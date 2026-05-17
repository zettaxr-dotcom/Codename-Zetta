/* =========================
   CODE NAME : ZETTA
   SCRIPT.JS
========================= */


/* =========================
   AUTO SLIDER
========================= */

const slider = document.getElementById("slider");

let scrollAmount = 0;

function autoSlide(){

    if(!slider) return;

    scrollAmount += 1;

    slider.scrollLeft = scrollAmount;

    if(scrollAmount >= slider.scrollWidth - slider.clientWidth){
        scrollAmount = 0;
    }

}

setInterval(autoSlide, 20);


/* =========================
   CLICK ANIMATION
========================= */

const buttons = document.querySelectorAll(
`
a,
button,
.link-box,
.content-card,
.slide-card,
.youtube-card,
.social-card,
.minecraft-card,
.shop-card
`
);

buttons.forEach(button => {

    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left =
        e.clientX - rect.left + "px";

        ripple.style.top =
        e.clientY - rect.top + "px";

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 700);

    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const hiddenElements =
document.querySelectorAll(
`
.link-box,
.slide-card,
.content-card,
.youtube-card,
.menu-buttons a,
.minecraft-card,
.shop-card,
.social-card
`
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.1
});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* =========================
   HOVER EFFECT
========================= */

const hoverItems = document.querySelectorAll(
`
.link-box,
.content-card,
.slide-card,
.youtube-card,
.minecraft-card,
.shop-card
`
);

hoverItems.forEach(item => {

    item.addEventListener("mouseenter", ()=>{

        item.style.transition =
        "all 0.35s ease";

    });

});


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});


/* =========================
   GLOW EFFECT ON MOVE
========================= */

document.addEventListener("mousemove",(e)=>{

    const cards =
    document.querySelectorAll(
    `
    .link-box,
    .content-card,
    .slide-card,
    .youtube-card,
    .minecraft-card,
    .shop-card
    `
    );

    cards.forEach(card=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.setProperty("--x",`${x}px`);
        card.style.setProperty("--y",`${y}px`);

    });

});


/* =========================
   PARALLAX PROFILE
========================= */

const profile =
document.querySelector(".profile-img");

document.addEventListener("mousemove",(e)=>{

    if(!profile) return;

    const x =
    (window.innerWidth / 2 - e.pageX) / 40;

    const y =
    (window.innerHeight / 2 - e.pageY) / 40;

    profile.style.transform =
    `translate(${x}px, ${y}px)`;

});


/* =========================
   LOADING EFFECT
========================= */

window.addEventListener("load", ()=>{

    document.body.classList.add("loaded");

});


/* =========================
   RANDOM FADE DELAY
========================= */

const animatedCards =
document.querySelectorAll(
`
.link-box,
.slide-card,
.content-card,
.youtube-card,
.minecraft-card,
.shop-card
`
);

animatedCards.forEach((card,index)=>{

    card.style.animationDelay =
    `${index * 0.1}s`;

});


/* =========================
   SEARCH POPUP
========================= */

const searchBtn =
document.querySelector(".nav-btn");

const searchPopup =
document.querySelector(".search-popup");

const closeSearch =
document.querySelector(".close-search");

if(searchBtn && searchPopup){

    searchBtn.addEventListener("click",()=>{

        searchPopup.classList.add("active");

    });

}

if(closeSearch){

    closeSearch.addEventListener("click",()=>{

        searchPopup.classList.remove("active");

    });

}


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
document.querySelectorAll(".nav-btn")[1];

const mobileMenu =
document.querySelector(".mobile-menu");

const closeMenu =
document.querySelector(".close-menu");

if(menuBtn && mobileMenu){

    menuBtn.addEventListener("click",()=>{

        mobileMenu.classList.add("active");

    });

}

if(closeMenu){

    closeMenu.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

    });

}


/* =========================
   ESC CLOSE
========================= */

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        if(searchPopup){
            searchPopup.classList.remove("active");
        }

        if(mobileMenu){
            mobileMenu.classList.remove("active");
        }

    }

});


/* =========================
   RIPPLE STYLE
========================= */

const style =
document.createElement("style");

style.innerHTML = `

.ripple{

    position:absolute;
    width:20px;
    height:20px;
    background:rgba(255,255,255,0.5);
    border-radius:50%;
    transform:translate(-50%,-50%);
    animation:rippleEffect 0.7s linear;
    pointer-events:none;

}

@keyframes rippleEffect{

    from{
        width:0;
        height:0;
        opacity:1;
    }

    to{
        width:500px;
        height:500px;
        opacity:0;
    }

}

.hidden{

    opacity:0;
    transform:translateY(40px);
    transition:
    all 1s ease;

}

.show{

    opacity:1;
    transform:translateY(0);

}

`;

document.head.appendChild(style);