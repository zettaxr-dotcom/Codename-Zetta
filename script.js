/* =========================
   CODE NAME : ZETTA
   SCRIPT.JS
========================= */


/* =========================
   AUTO IKLAN SLIDER
========================= */

const slider =
document.getElementById("autoSlider");

let autoScroll = 0;

function autoSlide(){

    if(!slider) return;

    autoScroll += 1;

    slider.scrollLeft = autoScroll;

    if(
        autoScroll >=
        slider.scrollWidth - slider.clientWidth
    ){

        autoScroll = 0;

    }

}

setInterval(autoSlide,15);


/* =========================
   POPULAR AUTO SCROLL
========================= */

const popularSlider =
document.querySelector(".popular-scroll");

let popularScroll = 0;

function autoPopular(){

    if(!popularSlider) return;

    popularScroll += 1;

    popularSlider.scrollLeft =
    popularScroll;

    if(
        popularScroll >=
        popularSlider.scrollWidth -
        popularSlider.clientWidth
    ){

        popularScroll = 0;

    }

}

setInterval(autoPopular,20);


/* =========================
   CONTENT DRAG SCROLL
========================= */

const contentWrapper =
document.querySelector(".content-wrapper");

let isDown = false;
let startX;
let scrollLeft;

if(contentWrapper){

    contentWrapper.addEventListener("mousedown",(e)=>{

        isDown = true;

        startX =
        e.pageX - contentWrapper.offsetLeft;

        scrollLeft =
        contentWrapper.scrollLeft;

    });

    contentWrapper.addEventListener("mouseleave",()=>{

        isDown = false;

    });

    contentWrapper.addEventListener("mouseup",()=>{

        isDown = false;

    });

    contentWrapper.addEventListener("mousemove",(e)=>{

        if(!isDown) return;

        e.preventDefault();

        const x =
        e.pageX - contentWrapper.offsetLeft;

        const walk =
        (x - startX) * 2;

        contentWrapper.scrollLeft =
        scrollLeft - walk;

    });

}


/* =========================
   CATEGORY BUTTON SCROLL
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

            left:220,
            behavior:"smooth"

        });

    };

}

if(scrollLeftBtn){

    scrollLeftBtn.onclick = () => {

        menuButtons.scrollBy({

            left:-220,
            behavior:"smooth"

        });

    };

}


/* =========================
   CLICK RIPPLE EFFECT
========================= */

const buttons = document.querySelectorAll(
`
a,
button,
.slide-card,
.youtube-card,
.social-card,
.minecraft-card,
.shop-card,
.popular-card
`
);

buttons.forEach(button => {

    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.addEventListener("click",function(e){

        const ripple =
        document.createElement("span");

        ripple.classList.add("ripple");

        const rect =
        button.getBoundingClientRect();

        ripple.style.left =
        e.clientX - rect.left + "px";

        ripple.style.top =
        e.clientY - rect.top + "px";

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const hiddenElements =
document.querySelectorAll(
`
.slide-card,
.youtube-card,
.menu-buttons a,
.minecraft-card,
.shop-card,
.social-card,
.popular-card
`
);

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.12
});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click",function(e){

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
   GLOW EFFECT
========================= */

document.addEventListener("mousemove",(e)=>{

    const cards =
    document.querySelectorAll(
    `
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

        card.style.setProperty(
            "--x",
            `${x}px`
        );

        card.style.setProperty(
            "--y",
            `${y}px`
        );

    });

});


/* =========================
   PROFILE PARALLAX
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

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/* =========================
   RANDOM FADE DELAY
========================= */

const animatedCards =
document.querySelectorAll(
`
.slide-card,
.youtube-card,
.minecraft-card,
.shop-card,
.popular-card
`
);

animatedCards.forEach((card,index)=>{

    card.style.animationDelay =
    `${index * 0.08}s`;

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
    background:rgba(255,255,255,.45);
    border-radius:50%;
    transform:translate(-50%,-50%);
    animation:rippleEffect .7s linear;
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
    transition:all 1s ease;

}

.show{

    opacity:1;
    transform:translateY(0);

}

`;

document.head.appendChild(style);