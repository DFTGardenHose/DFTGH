var edSoundClip = new Audio("sounds/ed-snake.m4a");
var obSoundClip = new Audio("sounds/OB-DWM.m4a");
var ericSoundClip = new Audio("sounds/eric.m4a");

$(".ob-pic").on("click", function() {
  $(".ob-pic").toggleClass("spinOb");
  obSoundClip.play();
});

$(".ed-pic").on("click", function() {
  $(".ed-pic").toggleClass("spinEd");
  edSoundClip.play();
});

$(".eric-pic").on("click", function() {
  $(".eric-pic").toggleClass("spinEric");
  ericSoundClip.play();
});
