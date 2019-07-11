window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var el = document.getElementById("banner");
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