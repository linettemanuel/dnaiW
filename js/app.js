let navMenu = document.querySelector(".navbar-nav");
let navMenuItems = navMenu.querySelectorAll(".nav-link");
let logo = document.querySelector(".dnai-logo");
let picturePaths = ["img/motor.png", "img/srdce.png"];
let carouselItems = document.querySelectorAll(".carousel-item");
let i = 0;
let current = document.querySelector(".active");
let state = "motor";
let windowWidht = window.innerWidth;

window.onload = () => {
    scaleVideo(state);
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
    if ((windowWidht < 900) && (state=="motor")) {
        document.querySelector(".promo-video").style.transform = "scale(2.1)";
    } else if ((windowWidht < 900) && (state=="srdce")) {
        document.querySelector(".promo-video").style.transform = "scale(1)";
    }
}

function changeVideo() { 
    carouselItems.forEach( item  => {
        if ((item.classList.contains("active")) && (item.children[0].alt == "motor")) {
            state = "srdce";
            document.querySelector(".promo-video").src = "./video/srdce.mp4";
            windowWidht = window.innerWidth;
            scaleVideo(state);
            changeColorOfActiveLinks("#D5392E");
        } else if ((item.classList.contains("active")) && (item.children[0].alt == "srdce")) {
            state = "motor";
            document.querySelector(".promo-video").src = "./video/motor.mp4";
            windowWidht = window.innerWidth;
            scaleVideo(state);
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

/*
window.onload = () => {
    setInterval(() => {
        i++;
        changePictures()
    }, 3000)
}
*/
