var edSoundClip = new Audio("sounds/ed-snake.m4a");
var obSoundClip = new Audio("sounds/OB-DWM.m4a");

$(".ob-pic").on("click", function() {
  obSoundClip.play();
});

$(".ed-pic").on("click", function() {
  edSoundClip.play();
});

$(".eric-pic").on("click", function() {
  $(".eric-pic").addClass("spin");
});
