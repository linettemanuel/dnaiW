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
let boldPic = document.querySelector(".strong-pic");
let lightPic = document.querySelector(".light-pic");
let twinPicArrTlusty = ["bar-chart", "bota_tlusta" ,"influence_tlusta" ,"kabel_tlusty", "360_tlusta"];
let twinPicArrTenky = ["bar-chart_tenka", "bota_tenka","influence_tenka" ,"kabel_tenky", "360_tenka"];
let twinSlider = document.querySelector(".slide-wrapper");
let marginXSlider = 435;
let readMoreBtns = document.querySelectorAll(".read-more-btn");
let carousel = document.querySelector("#carouselExampleIndicators");
let coverImgSize;

let hasVisited = sessionStorage.getItem('washere');
checkIfVisitedForFirstTime();
getCoverImageSize();

function getCoverImageSize() {
    carouselItems.forEach( item  => {
        if (item.classList.contains("active")) {
            coverImgSize = (item.children[0].height - 50);
        }
        item.children[1].style.height = coverImgSize + "px";
        if (window.innerWidth >= 500 && window.innerWidth < 1000) {
            item.children[1].children[0].style.top = (coverImgSize / 10 * 2) + "px";
        } else {
            item.children[1].children[0].style.top = (coverImgSize / 10 * 6) + "px";  
        }
    })

}

function makeReadMoreTouchable() {
    readMoreBtns.forEach ( btn => {
        btn.ontouchstart = (e) => {
           if(e.target.nextSibling.classList.contains("read-more")) {
                e.target.nextSibling.style.transition = "3s ease";
                e.target.nextSibling.style.display = "inline";
                e.target.style.opacity = 0;
           }
        }
    })
}

function checkIfVisitedForFirstTime() {
    if ( ! hasVisited ) {
        document.querySelector("#preloader").style.zIndex = 100000;
        document.querySelector("#preloader").style.opacity = 1;
        setTimeout(() => {
            document.querySelector(".proloader-cap").style.opacity = 1;
            disappearPreloaderBack();
        }, 2750)
        sessionStorage.setItem('washere', true);
    } else {
        document.querySelector("#preloader").style.zIndex = -10;
        document.querySelector("#preloader").style.opacity = 0;
    }
}

function carouselAutoOnOrOff() {
    let rect = carousel.getBoundingClientRect();

}


window.onscroll = () => {
    scaleVideo(state);
    getCoverImageSize();
    carouselAutoOnOrOff();
    changeVideo();
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
                /*item.style.color = "#1f1f21";*/
                if(item.innerHTML == "team"){
                    if(state=="srdce") {
                        item.style.color = "#D5392E";
                    } else if(state=="motor") {
                        item.style.color = "#64a19d";
                    }
                }         
            })
            /*
            logo.src = "img/dnai_dark.svg";
            logo.style.width = "47%";
            */
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

readMoreBtns.forEach( readBtn => {
    readBtn.onclick = (e) => {
        e.target.nextSibling.style.transition = "3s ease";
        e.target.nextSibling.style.display = "inline";
        e.target.style.display = "none";
    }
})

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
        if ((item.classList.contains("active")) && (item.children[0].alt == "srdce")) {
            if ((document.querySelector(".given-video").src.includes("/video/motor.mp4")) || (document.querySelector(".promo-video").src.includes("/video/motor.mp4"))){
                document.querySelector(".promo-video").src = "./video/srdce.mp4";
                document.querySelector(".given-video").src = "./video/srdce.mp4";
            }
            windowWidht = window.innerWidth;
            scaleVideo(state);
            cursorColor(state);
            changeColorOfActiveLinks("#D5392E");
            changeColor0fReadMoreButtons("#D5392E");
            state = "srdce";
        } else if ((item.classList.contains("active")) && (item.children[0].alt == "motor")) {
            if ((document.querySelector(".given-video").src.includes("/video/srdce.mp4")) || (document.querySelector(".promo-video").src.includes("/video/srdce.mp4"))){
                document.querySelector(".promo-video").src = "./video/motor.mp4";
                document.querySelector(".given-video").src = "./video/motor.mp4";
            }
            windowWidht = window.innerWidth;
            scaleVideo(state);
            cursorColor(state);
            changeColorOfActiveLinks("#64a19d");
            changeColor0fReadMoreButtons("#64a19d");
            state = "motor";
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

function changeColor0fReadMoreButtons(color) {
    readMoreBtns.forEach( readMoreBtn => {
        readMoreBtn.style.color = color;
    })
}

function cursorColor(x) {
    if(x=="motor") {
        join.onmouseenter = () => {
            join.style.cursor = "url(./img/cursor_blue.png), pointer";
        }
        join.onmouseleave = () => {
            join.style.cursor = "auto";
        }
    } else if (x=="srdce") {
        join.onmouseenter = () => {
            join.style.cursor = "url(./img/cursor_red.png), pointer";
        }
        join.onmouseleave = () => {
            join.style.cursor = "auto";
        }
    }
}

function changePictures(pic, arr) {
    for(let i = 0; i < 6; i++){
        setTimeout(()=> {
            if(i === 5) {
                changePictures(pic, arr);
            } else {
                pic.src = `./img/${arr[i]}.svg`;
            }   
        }, 6000 * i)
    }
}

function changeSlideMenu() {
    for(let i = 0; i < 6; i++){
        setTimeout(()=> {
            if(i === 5) {
                marginXSlider = 435;
                changeSlideMenu()
            } else {
                marginXSlider -= 435;
                twinSlider.style.marginLeft = marginXSlider + "px";
            }
        }, 6000 * i)
    }
}

window.onresize = () =>{
    scaleVideo(state);
    getCoverImageSize();
}

window.onload = () => {
    getCoverImageSize();
    makeReadMoreTouchable();
    scaleVideo(state);
    cursorColor(state);
    changePictures(boldPic, twinPicArrTlusty);
    changePictures(lightPic, twinPicArrTenky);
    changeSlideMenu();
    document.querySelector(".anim-logo-dn").style.transform = "translateX(52.85%)";
    document.querySelector(".anim-logo-ai").style.transform = "translateX(-52.85%)";
}

function disappearPreloaderBack() {
    setTimeout(() => {
        document.querySelector("#preloader").style.zIndex = -10;
        document.querySelector("#preloader").style.opacity = 0;
        document.querySelector("#preloader").style.transition = "3s all ease";
    }, 3000)
}