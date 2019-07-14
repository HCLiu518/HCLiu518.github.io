window.onscroll = function() {scrollFunction();};
window.onload = function() {bgSlide()};

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
        if(flag){
            el.style.backgroundImage = "url('./images/banner-2.jpg')";
            flag = 0;
        }else{
            el.style.backgroundImage = "url('./images/banner-1.jpg')";
            flag = 1;
        }
        bgSlide();
    }, 10000);
}