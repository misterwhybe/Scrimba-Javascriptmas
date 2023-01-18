const player = document.getElementById("player")

var isClicked = false;
function highlight(id) {
   var element = document.getElementById("player");
   element.className = (element.className == "opacityClicked") ? "opacityDefault" : "opacityClicked";
}
function playSong(id) {
  let temp = "https://www.youtube.com/embed/" + id + "?autoplay=1"
  player.src = temp  
}