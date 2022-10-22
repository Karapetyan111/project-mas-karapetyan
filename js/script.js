'use strict'
var btn1 = document.getElementById("myid")

window.onscroll = function () {
    scrollfunction()
};
function scrollfunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        btn1.style.display = "none"
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}