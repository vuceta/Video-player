let playBtn = document.querySelector("#play");
let reloadBtn = document.querySelector("#reload");
let video = document.querySelector("video");

playBtn.addEventListener("click", playVideo);

function playVideo() {
  if (this.getAttribute("src") === "play-button.png") {
    video.play();
    this.setAttribute("src", "video-pause-button.png");
  } else {
    video.pause();
    this.setAttribute("src", "play-button.png");
  }
}
