//Proceduralni

// let playBtn = document.querySelector("#play");
// let reloadBtn = document.querySelector("#reload");
// let video = document.querySelector("video");

// playBtn.addEventListener("click", playVideo);
// reloadBtn.addEventListener("click", reloadVideo);

// function playVideo() {
//   if (this.getAttribute("src") === "play-button.png") {
//     video.play();
//     this.setAttribute("src", "video-pause-button.png");
//   } else {
//     video.pause();
//     this.setAttribute("src", "play-button.png");
//   }
// }

// function reloadVideo() {
//   video.load();
//   playBtn.setAttribute("src", "play-button.png");
// }



//Object

(function () {
  let videoPlayer = {
    playBtn: document.querySelector("#play"),
    reloadBtn: document.querySelector("#reload"),
    video: document.querySelector("video"),
    init: function () {
      videoPlayer.playBtn.addEventListener("click", videoPlayer.playVideo);
      videoPlayer.reloadBtn.addEventListener("click", videoPlayer.reloadVideo);
    },
    playVideo: function () {
      if (this.getAttribute("src") === "play-button.png") {
        videoPlayer.video.play();
        this.setAttribute("src", "video-pause-button.png");
      } else {
        videoPlayer.video.pause();
        this.setAttribute("src", "play-button.png");
      }
    },
    reloadVideo: function () {
      videoPlayer.video.load();
      videoPlayer.playBtn.setAttribute("src", "play-button.png");
    },
  };

  videoPlayer.init();
})();
