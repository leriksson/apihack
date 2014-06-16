// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/apiplayer?enablejsapi=1&version=3";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubePlayerAPIReady() {

}

var player;

function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementById("first");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  
  var pauseButton = document.getElementById("second");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
  
}