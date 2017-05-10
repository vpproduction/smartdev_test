
// Get the modal
var modal = document.getElementById('shopsModal');

// Get the button that opens the modal
var btn1 = document.getElementById("modalTrigger");
//Extra button in the footer
var btn2 =document.getElementById("modalTrigger2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn1.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//bxslider library usage for responsive slider
//bxSlider
$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode:'fade',
    speed:400,
    pagerCustom: '#bx-pager',
    controls: true,
    infiniteLoop: false,
    hideControlOnEnd: true,
  });

});


