var btn = document.querySelector("#scroll");
btn.addEventListener("click", function() {
	//scroll down the page
	scrollWin(0, 800);
});

function scrollWin(x, y) {
  window.scrollBy(x, y);
}