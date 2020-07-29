window.onscroll = function () {
    scrollFunction1()
}; 
function scrollFunction1() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById('vis_arrow').style.display = "block";
    }
    else {
        document.getElementById('vis_arrow').style.display = "none";
    }
}
