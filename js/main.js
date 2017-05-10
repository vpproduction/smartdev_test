
// Get the modal
var modal = document.getElementById('shopsModal');

// Get the button that opens the modal
var btn = document.getElementById("modalTrigger");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
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
$('.bxslider').bxSlider({
  buildPager: function(slideIndex){
  	auto:true;
    switch(slideIndex){
      case 0:
        return '<img src="img/content/thumbs/dress-1.jpg">';
      case 1:
        return '<img src="img/content/thumbs/dress-2.jpg">';
      case 2:
        return '<img src="img/content/thumbs/dress-3.jpg">';
        case 3:
        return '<img src="img/content/thumbs/dress-4.jpg">';
    }
  }

});