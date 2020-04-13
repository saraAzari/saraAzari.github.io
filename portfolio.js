var btn = document.querySelector("#scroll");
btn.addEventListener("click", function() {
	//scroll down the page
	scrollWin(0, 800);
});

function scrollWin(x, y) {
  window.scrollBy(x, y);
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navtop") {
    x.className += "responsive";
  } else {
    x.className = "navtop";
  }
}