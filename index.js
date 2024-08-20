function toggle() {
  let sound = document.getElementById("audio");
  if (sound.paused) sound.play();
  else sound.pause();
}
