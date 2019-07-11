let navMenu = document.querySelector(".navbar-nav");
let navMenuItems = navMenu.querySelectorAll(".nav-link");
let logo = document.querySelector(".dnai-logo");
let picturePaths = ["img/motor.png", "img/srdce.png"];
let carouselItems = document.querySelectorAll(".carousel-item");
let i = 0;
let current = document.querySelector(".active");
let state = "motor";
let windowWidht = window.innerWidth;
let join = document.querySelector(".move-team-item");

window.onload = () => {
    scaleVideo(state);
    cursorColor(state);
}

window.onscroll = () => {
    current = document.querySelector(".active");
    if(current) {
        if(state == "srdce") {
            navMenuItems.forEach( item => {
                item.classList.remove("active-red");
            })
            current.classList.add("active-red");
        } else if (state == "motor") {
            if(current.classList.contains("active-red")){
                current.classList.remove("active-red"); 
            }
            navMenuItems.forEach( item => {
                if(current.classList.contains("active-red")) {
                    item.classList.remove("active-red");
                }
            })
        } 

        if(current.innerHTML == "team") {
            navMenuItems.forEach( item => {
                item.style.color = "#1f1f21";
                if(item.innerHTML == "team"){
                    if(state=="srdce") {
                        item.style.color = "#D5392E";
                    } else if(state=="motor") {
                        item.style.color = "#64a19d";
                    }
                }         
            })
            logo.src = "img/dnai_dark.svg";
            logo.style.width = "47%";
        } else {
            navMenuItems.forEach( item => {
                if(item.innerHTML != current) {
                    item.style.color = "";
                }   
            })
            logo.src = "img/dnai.svg";
            logo.style.width = "";
        }
    }
}

function changePictures() {
    if(i % 2 == 0) {
        document.querySelector(".masthead").style.background = `url(${picturePaths[0]})`;
        document.querySelector(".masthead").style.backgroundSize = "cover";
        document.querySelector(".masthead").style.animation = "3s fadeOut forward linear";
        document.querySelector(".masthead-title").innerHTML = "Manufacturing";

    } else {
        document.querySelector(".masthead").style.background = `url(${picturePaths[1]})`;
        document.querySelector(".masthead").style.backgroundSize = "cover";
        document.querySelector(".masthead").style.animation = "3s fadeOut forward linear";
        document.querySelector(".masthead-title").innerHTML = "Healthcare";
    }

}

let controls = document.querySelectorAll(".car-con");

controls.forEach( control => {
    control.onclick = () => {
        changeVideo();
    }
})

function scaleVideo(state) {
    if ((windowWidht < 700) && (state=="motor")) {
        document.querySelector(".promo-video").style.transform = "scale(2.1)";
        if(windowWidht < 700) {
            document.querySelector(".about-section").style.padding = "13rem 0rem 2rem";
        }
    } else if ((windowWidht < 700) && (state=="srdce")) {
        document.querySelector(".promo-video").style.transform = "scale(1)";
        if(windowWidht < 700) {
            document.querySelector(".about-section").style.padding = "";
        }
    } else {
        document.querySelector(".about-section").style.padding = "";
    }
}

function changeVideo() { 
    carouselItems.forEach( item  => {
        if ((item.classList.contains("active")) && (item.children[0].alt == "motor")) {
            state = "srdce";
            document.querySelector(".promo-video").src = "./video/srdce.mp4";
            windowWidht = window.innerWidth;
            scaleVideo(state);
            cursorColor(state);
            changeColorOfActiveLinks("#D5392E");
        } else if ((item.classList.contains("active")) && (item.children[0].alt == "srdce")) {
            state = "motor";
            document.querySelector(".promo-video").src = "./video/motor.mp4";
            windowWidht = window.innerWidth;
            scaleVideo(state);
            cursorColor(state);
            changeColorOfActiveLinks("#64a19d");
        }
    })
}

function changeColorOfActiveLinks(color) {
    navMenuItems.forEach( item => {
        item.onmouseenter = () => {
            item.style.color = color;
        }
        item.onmouseleave = () => {
            item.style.color = "";
        }  
    })
}

function cursorColor(x) {
    if(x=="motor") {
        console.log("Jsem tu! Motor!")
        join.onmouseenter = () => {
            join.style.cursor = "url(./img/cursor_blue.png), pointer";
        }
        join.onmouseleave = () => {
            join.style.cursor = "auto";
        }
    } else if (x=="srdce") {
        console.log("Jsem tu! Srdce!")
        join.onmouseenter = () => {
            join.style.cursor = "url(./img/cursor_red.png), pointer";
        }
        join.onmouseleave = () => {
            join.style.cursor = "auto";
        }
    }
}

window.onload = () => {
    document.querySelector(".anim-logo-dn").style.transform = "translateX(52.85%)";
    document.querySelector(".anim-logo-ai").style.transform = "translateX(-52.85%)";
    setTimeout(() => {
        document.querySelector(".proloader-cap").style.opacity = 1;
        disappearPreloaderBack();
    }, 2750)
}

function disappearPreloaderBack() {
    setTimeout(() => {
        document.querySelector("#preloader").style.zIndex = -10;
        document.querySelector("#preloader").style.opacity = 0;
    }, 3000)
}