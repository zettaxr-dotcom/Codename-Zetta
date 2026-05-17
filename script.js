/* =========================
   CODE NAME : ZETTA
   SCRIPT.JS
========================= */


/* =========================
   AUTO IKLAN SLIDER
========================= */

const slider = document.getElementById("autoSlider");

let sliderAmount = 0;

function autoSlide(){

    if(!slider) return;

    sliderAmount += 360;

    slider.scrollTo({
        left:sliderAmount,
        behavior:"smooth"
    });

    if(
        sliderAmount >=
        slider.scrollWidth - slider.clientWidth
    ){

        setTimeout(()=>{

            slider.scrollTo({
                left:0,
                behavior:"smooth"
            });

            sliderAmount = 0;

        },1000);

    }

}

setInterval(autoSlide, 4000);


/* =========================
   CATEGORY SCROLL
========================= */

const menuButtons =
document.getElementById("menuButtons");

const scrollLeftBtn =
document.getElementById("scrollLeft");

const scrollRightBtn =
document.getElementById("scrollRight");

if(scrollRightBtn){

    scrollRightBtn.onclick = () => {

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
   CONTENT DRAG
========================= */

const contentWrapper =
document.querySelector(".content-wrapper");

let isDown = false;
let startX;
let scrollLeft;

if(contentWrapper){

    contentWrapper.addEventListener(
    "mousedown",
    (e)=>{

        isDown = true;

        startX =
        e.pageX -
        contentWrapper.offsetLeft;

        scrollLeft =
        contentWrapper.scrollLeft;

    });

    contentWrapper.addEventListener(
    "mouseleave",
    ()=>{

        isDown = false;

    });

    contentWrapper.addEventListener(
    "mouseup",
    ()=>{

        isDown = false;

    });

    contentWrapper.addEventListener(
    "mousemove",
    (e)=>{

        if(!isDown) return;

        e.preventDefault();

        const x =
        e.pageX -
        contentWrapper.offsetLeft;

        const walk =
        (x - startX) * 2;

        contentWrapper.scrollLeft =
        scrollLeft - walk;

    });

}


/* =========================
   SEARCH TOP NAVBAR
========================= */

const topSearch =
document.getElementById("topSearch");

if(topSearch){

    topSearch.addEventListener(
    "keyup",
    ()=>{

        const value =
        topSearch.value.toLowerCase();

        const allCards =
        document.querySelectorAll(
        `
        .minecraft-card,
        .youtube-card,
        .shop-card,
        .popular-card
        `
        );

        allCards.forEach(card=>{

            const text =
            card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display =
                "block";

            }else{

                card.style.display =
                "none";

            }

        });

    });

}


/* =========================
   CONTENT SEARCH
========================= */

const contentSearch =
document.getElementById("contentSearch");

if(contentSearch){

    contentSearch.addEventListener(
    "keyup",
    ()=>{

        const value =
        contentSearch.value.toLowerCase();

        const contentCards =
        document.querySelectorAll(
        ".youtube-card"
        );

        contentCards.forEach(card=>{

            const text =
            card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display =
                "block";

            }else{

                card.style.display =
                "none";

            }

        });

    });

}


/* =========================
   SHOP PAGINATION
========================= */

const shopCards =
document.querySelectorAll(".shop-card");

const prevBtn =
document.getElementById("prevShop");

const nextBtn =
document.getElementById("nextShop");

let currentPage = 1;
const itemsPerPage = 6;

function showShopPage(page){

    const start =
    (page - 1) * itemsPerPage;

    const end =
    start + itemsPerPage;

    shopCards.forEach((card,index)=>{

        if(index >= start && index < end){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}

showShopPage(currentPage);

if(nextBtn){

    nextBtn.addEventListener(
    "click",
    ()=>{

        const totalPages =
        Math.ceil(
        shopCards.length /
        itemsPerPage
        );

        currentPage++;

        if(currentPage > totalPages){

            currentPage = 1;

        }

        showShopPage(currentPage);

    });

}

if(prevBtn){

    prevBtn.addEventListener(
    "click",
    ()=>{

        const totalPages =
        Math.ceil(
        shopCards.length /
        itemsPerPage
        );

        currentPage--;

        if(currentPage < 1){

            currentPage = totalPages;

        }

        showShopPage(currentPage);

    });

}


/* =========================
   CLICK RIPPLE EFFECT
========================= */

const buttons =
document.querySelectorAll(
`
a,
button,
.minecraft-card,
.youtube-card,
.shop-card,
.slide-card,
.popular-card
`
);

buttons.forEach(button => {

    button.addEventListener(
    "click",
    function(e){

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

        setTimeout(() => {

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
.minecraft-card,
.youtube-card,
.shop-card,
.slide-card,
.popular-card,
.menu-buttons a
`
);

const observer =
new IntersectionObserver((entries)=>{

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
   SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e){

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

document.addEventListener(
"mousemove",
(e)=>{

    const cards =
    document.querySelectorAll(
    `
    .minecraft-card,
    .youtube-card,
    .shop-card,
    .slide-card,
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

document.addEventListener(
"mousemove",
(e)=>{

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

window.addEventListener(
"load",
()=>{

    document.body.classList.add(
    "loaded"
    );

});


/* =========================
   RANDOM DELAY
========================= */

const animatedCards =
document.querySelectorAll(
`
.minecraft-card,
.youtube-card,
.shop-card,
.slide-card,
.popular-card
`
);

animatedCards.forEach(
(card,index)=>{

    card.style.animationDelay =
    `${index * 0.1}s`;

});


/* =========================
   STYLE EFFECT
========================= */

const style =
document.createElement("style");

style.innerHTML = `

.ripple{

    position:absolute;
    width:20px;
    height:20px;
    background:rgba(255,255,255,.4);
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