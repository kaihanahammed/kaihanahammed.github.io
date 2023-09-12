
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_bar").hidden=false;
  } else {
    var width_of_nav_bar = 
    document.getElementById("nav_bar").scrollWidth;
    //document.getElementById("nav_bar").style.top = "-"+width_of_nav_bar+"px";
    document.getElementById("nav_bar").hidden=true;
  }
  prevScrollpos = currentScrollPos;
}