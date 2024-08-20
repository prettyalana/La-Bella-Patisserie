// let sound = document.createElement("audio");
// sound.src = "assets/Vaporwave.mp3"
// sound.setAttribute("preload", "auto");
// sound.setAttribute("controls", "none");
// sound.style.display = "none";
// let play = function(){
//   sound.play();
// }
// let stop = function(){
//   sound.pause();
// } 


function toggle() {
  let sound = document.getElementById
  ("audio");
  if (sound.paused)
    sound.play();
  else sound.pause();
}

