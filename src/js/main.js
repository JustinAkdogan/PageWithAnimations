//Variablen
var el = document.getElementById("learnMore");

//Mobile Menu
$(document).ready(function() {
    $('.menubutton').click(function () {
        $('.nav').slideToggle('slow');
    });
});


//Scroll Function
if (el.addEventListener) {
    el.addEventListener("click", function() {
        scrollTo(0, 1270);
    }, false);
} else { //IE8 support
    el.attachEvent("onclick", function() {
        scrollTo(0, 1270);
    });
}