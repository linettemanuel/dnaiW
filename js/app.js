let navMenu = document.querySelector(".navbar-nav");
let navMenuItems = navMenu.querySelectorAll(".nav-link");
let logo = document.querySelector(".dnai-logo");
let picturePaths = ["img/motor.png", "img/srdce.png"];
let carouselItems = document.querySelectorAll(".carousel-item");
let i = 0;
let current = document.querySelector(".active");
let state = "motor";
let windowWidht = window.innerWidth;
let boldPic = document.querySelector(".strong-pic");
let lightPic = document.querySelector(".light-pic");
let twinPicArrTlusty = ["bar-chart", "bota_tlusta" ,"influence_tlusta" ,"kabel_tlusty", "360_tlusta"];
let twinPicArrTenky = ["bar-chart_tenka", "bota_tenka","influence_tenka" ,"kabel_tenky", "360_tenka"];
let twinSlider = document.querySelector(".slide-wrapper");
let marginXSlider = 435;
let readMoreBtns = document.querySelectorAll(".read-more-btn");
let carousel = document.querySelector("#carouselExampleIndicators");
let coverImgSize;
let copyParents = document.querySelectorAll(".tooltip");
let copy = document.querySelectorAll(".copy");
let copyIcon = document.querySelectorAll(".fa-copy");
let copyConfirm = document.querySelectorAll(".tooltiptext-confirm");
let hamburgerIcon = document.querySelector(".hamburger-icon");
let iconPath = ["img/hamburger.svg", "img/close.svg"];
let menuOpened = false;
let scewedMenu = document.querySelector(".scewedMenu");
let mainContent = document.querySelector(".main-content");

$(carousel).on('slide.bs.carousel',function(){
    $('.masthead-title').fadeOut(300);
});

$(carousel).on('slid.bs.carousel',function(){
    $('.masthead-title').fadeIn(600);
});

hamburgerIcon.onclick = (e) => {
    if(menuOpened) {
        e.target.src ="./" + `${iconPath[0]}`;
        e.target.style.width = "2.6vw";
        scewedMenu.style.transition = "transform 1.5s ease-in-out";
        navMenu.style.transition = "all 1s ease-in-out";
        scewedMenu.style.transform = "translateX(100%)";
        navMenu.style.transform = "translateX(200%)";
        scewedMenu.style.zIndex = -1;
        navMenu.style.zIndex = -1;
        menuOpened = false;
    } else {
        e.target.src ="./" + `${iconPath[1]}`;
        e.target.style.width = "1.35vw";
        scewedMenu.style.transform = "translateX(0%)";
        navMenu.style.transform = "translateX(0%)";
        scewedMenu.style.transition = "transform 1s ease-in-out";
        navMenu.style.transition = "transform 1.25s ease-in-out";
        scewedMenu.style.zIndex = 1001;
        navMenu.style.zIndex = 1002;
        menuOpened = true;
    }
} 

hamburgerIcon.onmouseover = (e) => {
    menuOpened = true;
    e.target.src ="./" + `${iconPath[1]}`;
    e.target.style.width = "1.35vw";
    scewedMenu.style.transform = "translateX(0%)";
    navMenu.style.transform = "translateX(0%)";
    scewedMenu.style.transition = "transform 1s ease-in-out";
    navMenu.style.transition = "transform 1.25s ease-in-out";
    scewedMenu.style.zIndex = 1001;
    navMenu.style.zIndex = 1002;

}

mainContent.onmouseover= (e) => {
    menuOpened = false;
    hamburgerIcon.src ="./" + `${iconPath[0]}`;
    hamburgerIcon.style.width = "2.6vw";
    scewedMenu.style.transition = "transform 1.5s ease-in-out";
    navMenu.style.transition = "all 1s ease-in-out";
    scewedMenu.style.transform = "translateX(100%)";
    navMenu.style.transform = "translateX(200%)";
    scewedMenu.style.zIndex = -1;
    navMenu.style.zIndex = -1;
}


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

function carouselAutoOnOrOff() {
    let rect = carousel.getBoundingClientRect();

}


window.onscroll = () => {
    scaleVideo(state);
    getCoverImageSize();
    carouselAutoOnOrOff();
    changeVideo();
    current = document.querySelector(".active");
    /*
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
    */
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

copyParents.forEach( (copyParent, index) => {
    copyParent.onclick = () => {
        copy[index].select();
        document.execCommand("copy");
        copyConfirm[index].style.visibility = "visible";
        setTimeout(() => {
            copyConfirm[index].style.visibility = "hidden";
        },1000);
    }
})
  
copy.forEach( (input, index) => {
    input.onclick = () => {
        input.select();
        document.execCommand("copy");
        copyConfirm[index].style.visibility = "visible";
        setTimeout(() => {
            copyConfirm[index].style.visibility = "hidden";
        },1000);
    }
});
  
copyIcon.forEach( icon => {
    changeColorOfIcon(icon);
});
  
function changeColorOfIcon(x) {
    x.onclick = () => {
        x.style.backgroundColor = "#54f9ba";
        setTimeout(() => {
            x.style.backgroundColor = "";
        },1100);
    }
}

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
            //changeColorOfActiveLinks("#D5392E");
            //changeColor0fReadMoreButtons("#D5392E");
            state = "srdce";
        } else if ((item.classList.contains("active")) && (item.children[0].alt == "motor")) {
            if ((document.querySelector(".given-video").src.includes("/video/srdce.mp4")) || (document.querySelector(".promo-video").src.includes("/video/srdce.mp4"))){
                document.querySelector(".promo-video").src = "./video/motor.mp4";
                document.querySelector(".given-video").src = "./video/motor.mp4";
            }
            windowWidht = window.innerWidth;
            scaleVideo(state);
            //cursorColor(state);
            //changeColorOfActiveLinks("#64a19d");
            //changeColor0fReadMoreButtons("#64a19d");
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
    //changePictures(boldPic, twinPicArrTlusty);
    //changePictures(lightPic, twinPicArrTenky);
    changeSlideMenu();
}
