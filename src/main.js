window.onscroll = function() {
    scrollFunction();
};
window.onload = function() {
    bgSlide();
};

var el = document.getElementById("banner");
var flag = 1;

function scrollFunction() {
    var elNav = document.getElementById("nav");
    var heightNav = elNav.getBoundingClientRect().height;
    var height = el.getBoundingClientRect().height - heightNav;
    
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        elNav.className = "navbar fixed-top navbar-expand-sm navbar-light";
        elNav.style.backgroundColor = "#E6E6FA";
    } else {
        elNav.className = "navbar fixed-top navbar-expand-sm navbar-dark bg-dark";
    }
}

function paperClick(url) {
    window.open(url, "new-tab");
}

function bgSlide() {
    setTimeout(function(){
        if(flag > 5)
            flag = 0;
        if(flag == 0){
            if(window.innerWidth > 767)
                el.style.backgroundImage = "url('./images/banner-1.jpg')";
            else
                el.style.backgroundImage = "url('./images/banner-1-mobile.jpg')";
            flag++;
        }else if(flag == 1){
            if(window.innerWidth > 767)
                el.style.backgroundImage = "url('./images/banner-2.jpg')";
            else
                el.style.backgroundImage = "url('./images/banner-2-mobile.jpg')";
            flag++;
        }/*else if(flag == 2){
            if(window.innerWidth > 767)
                el.style.backgroundImage = "url('./images/banner-3.jpg')";
            else
                el.style.backgroundImage = "url('./images/banner-3-mobile.jpg')";
            flag++;
        }else if(flag == 3){
            if(window.innerWidth > 767)
                el.style.backgroundImage = "url('./images/banner-4.jpg')";
            else
                el.style.backgroundImage = "url('./images/banner-4-mobile.jpg')";
            flag++;
        }else if(flag == 4){
            if(window.innerWidth > 767)
                el.style.backgroundImage = "url('./images/banner-5.jpg')";
            else
                el.style.backgroundImage = "url('./images/banner-5-mobile.jpg')";
            flag++;
        }else if(flag == 5){
            if(window.innerWidth > 767)
                el.style.backgroundImage = "url('./images/banner-6.jpg')";
            else
                el.style.backgroundImage = "url('./images/banner-6-mobile.jpg')";
            flag++;
        }*/
        bgSlide();
    }, 10000);
}

function preloader() {
    if (document.getElementById) {
        document.getElementById("p1").style.background = "url('./images/Facilities/f-1.jpg') no-repeat";
        document.getElementById("p2").style.background = "url('./images/Facilities/f-2.jpg') no-repeat";
        document.getElementById("p3").style.background = "url('./images/Facilities/f-3.jpg') no-repeat";
        document.getElementById("p4").style.background = "url('./images/Facilities/f-4.jpg') no-repeat";
        document.getElementById("p5").style.background = "url('./images/Facilities/f-5.jpg') no-repeat";
        document.getElementById("p6").style.background = "url('./images/Facilities/f-6.jpg') no-repeat";
        document.getElementById("p7").style.background = "url('./images/cwt-profile.jpg') no-repeat";
        document.getElementById("p8").style.background = "url('./images/card-1.jpg') no-repeat";
        document.getElementById("p9").style.background = "url('./images/card-2.jpg') no-repeat";
        document.getElementById("p10").style.background = "url('./images/card-3.jpg') no-repeat";
        document.getElementById("p11").style.background = "url('./images/banner-1.jpg') no-repeat";
        document.getElementById("p12").style.background = "url('./images/banner-1-mobile.jpg') no-repeat";
        document.getElementById("p13").style.background = "url('./images/banner-2.jpg') no-repeat";
        document.getElementById("p14").style.background = "url('./images/banner-2-mobile.jpg') no-repeat";
        /*document.getElementById("p15").style.background = "url('./images/banner-3.jpg') no-repeat";
        document.getElementById("p16").style.background = "url('./images/banner-3-mobile.jpg') no-repeat";
        document.getElementById("p17").style.background = "url('./images/banner-4.jpg') no-repeat";
        document.getElementById("p18").style.background = "url('./images/banner-4-mobile.jpg') no-repeat";
        document.getElementById("p19").style.background = "url('./images/banner-5.jpg') no-repeat";
        document.getElementById("p20").style.background = "url('./images/banner-5-mobile.jpg') no-repeat";
        document.getElementById("p21").style.background = "url('./images/banner-6.jpg') no-repeat";
        document.getElementById("p22").style.background = "url('./images/banner-6-mobile.jpg') no-repeat";
    */ }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

addLoadEvent(preloader);