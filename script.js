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
.minecraft-card,
.shop-card
`
);

buttons.forEach(button => {

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
.popular-card
`
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

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
.shop-card,
.popular-card
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
    .shop-card,
    .popular-card
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
.shop-card,
.popular-card
`
);

animatedCards.forEach((card,index)=>{

    card.style.animationDelay =
    `${index * 0.1}s`;

});


/* =========================
   CATEGORY SCROLL
========================= */

const menuButtons =
document.getElementById("menuButtons");

const scrollRight =
document.getElementById("scrollRight");

const scrollLeftBtn =
document.getElementById("scrollLeft");

if(scrollRight){

    scrollRight.onclick = () => {

        menuButtons.scrollBy({

            left:200,
            behavior:"smooth"

        });

    };

}

if(scrollLeftBtn){

    scrollLeftBtn.onclick = () => {

        menuButtons.scrollBy({

            left:-200,
            behavior:"smooth"

        });

    };

}


/* =========================
   MENU TOGGLE
========================= */

const menuToggle =
document.getElementById("menuToggle");

const menuPopup =
document.getElementById("menuPopup");

if(menuToggle){

    menuToggle.onclick = () => {

        menuPopup.classList.toggle("active");

    };

}


/* =========================
   SEARCH TOGGLE
========================= */

const searchToggle =
document.getElementById("searchToggle");

const searchPopup =
document.getElementById("searchPopup");

if(searchToggle){

    searchToggle.onclick = () => {

        searchPopup.classList.toggle("active");

    };

}


/* =========================
   CLOSE POPUP OUTSIDE
========================= */

document.addEventListener("click",(e)=>{

    if(
        menuPopup &&
        !menuPopup.contains(e.target)
        &&
        menuToggle &&
        !menuToggle.contains(e.target)
    ){

        menuPopup.classList.remove("active");

    }

    if(
        searchPopup &&
        !searchPopup.contains(e.target)
        &&
        searchToggle &&
        !searchToggle.contains(e.target)
    ){

        searchPopup.classList.remove("active");

    }

});


/* =========================
   SEARCH SYSTEM
========================= */

const searchData = [

    {
        keyword:"shader",
        url:"shader1.html"
    },

    {
        keyword:"texture",
        url:"texture1.html"
    },

    {
        keyword:"texturepack",
        url:"texture1.html"
    },

    {
        keyword:"mod",
        url:"mps.html"
    },

    {
        keyword:"minecraft",
        url:"mps.html"
    },

    {
        keyword:"modpack",
        url:"mps.html"
    },

    {
        keyword:"shop",
        url:"shop.html"
    }

];


/* =========================
   SEARCH BUTTON
========================= */

const searchBtn =
document.getElementById("searchBtn");

if(searchBtn){

    searchBtn.onclick = runSearch;

}


/* =========================
   ENTER SEARCH
========================= */

const navbarSearch =
document.getElementById("navbarSearch");

if(navbarSearch){

    navbarSearch.addEventListener(
    "keypress",
    (e)=>{

        if(e.key === "Enter"){

            runSearch();

        }

    });

}


/* =========================
   RUN SEARCH
========================= */

function runSearch(){

    const input =
    document.getElementById("navbarSearch");

    if(!input) return;

    const value =
    input.value
    .toLowerCase()
    .trim();

    if(value === ""){

        alert("Masukkan pencarian");

        return;

    }

    const found =
    searchData.find(item => 
        value.includes(item.keyword)
    );

    if(found){

        window.location.href =
        found.url;

    }

    else{

        alert("Content tidak ditemukan");

    }

}


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