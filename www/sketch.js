/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginLeft = "500px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// $('.resume') .hide()
// $('a[href^="#"]').on('click', function(event) {
// $('.resume') .hide()
//     var target = $(this).attr('href');

//     $('.resume'+target).toggle();

// });