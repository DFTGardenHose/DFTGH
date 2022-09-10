var edUrinalSoundClip = new Audio("sounds/ed-urinal.m4a");
var edGirldadSoundClip = new Audio("sounds/ed-girldad.m4a");
var edSnakeSoundClip = new Audio("sounds/ed-snake.m4a");
var edSnoreSoundClip = new Audio("sounds/ed-snore.m4a");
var edTravelSoundClip = new Audio("sounds/ed-travel.m4a");
var edKingSoundClip = new Audio("sounds/ed-king.m4a");
var obBoyDadSoundClip = new Audio("sounds/OB-boydad.m4a");
var obTesticsSoundClip = new Audio("sounds/OB-testics.m4a");
var obSwordsSoundClip = new Audio("sounds/OB-swords.m4a");
var obVacationSoundClip = new Audio("sounds/OB-vacation.m4a");
var obDWMSoundClip = new Audio("sounds/OB-DWM.m4a");
var obRawdogSoundClip = new Audio("sounds/OB-rawdog.m4a")


var ericSoundClip = new Audio("sounds/eric.m4a");


// Ed Audio

$(".ed-pic").on("click", function() {
  $(".ed-pic").toggleClass("spinEd");
  edUrinalSoundClip.play();
});

$("#ed-girldad").on("click", function() {
  $(".ed-pic").toggleClass("spinEd");
  edGirldadSoundClip.play();
});

$("#ed-snake").on("click", function() {
  $(".ed-pic").toggleClass("spinEd");
  edSnakeSoundClip.play();
});

$("#ed-snore").on("click", function() {
  $(".ed-pic").toggleClass("spinEd");
  edSnoreSoundClip.play();
});

$("#ed-travel").on("click", function() {
  $(".ed-pic").toggleClass("spinEd");
  edTravelSoundClip.play();
});

$("#ed-king").on("click", function() {
  $(".ed-pic").toggleClass("spinEd");
  edKingSoundClip.play();
});

// OB Audio

$(".ob-pic").on("click", function() {
  $(".ob-pic").toggleClass("spinOb");
  obTesticsSoundClip.play();
});

$("#ob-boydad").on("click", function() {
  $(".ob-pic").toggleClass("spinOb");
  obBoyDadSoundClip.play();
});


$("#ob-swords").on("click", function() {
  $(".ob-pic").toggleClass("spinOb");
  obSwordsSoundClip.play();
});

$("#ob-vacation").on("click", function() {
  $(".ob-pic").toggleClass("spinOb");
  obVacationSoundClip.play();
});

$("#ob-dwm").on("click", function() {
  $(".ob-pic").toggleClass("spinOb");
  obDWMSoundClip.play();
});

$("#ob-rawdog").on("click", function() {
  $(".ob-pic").toggleClass("spinOb");
  obRawdogSoundClip.play();
});

// Eric Audio

$(".eric-pic").on("click", function() {
  $(".eric-pic").toggleClass("spinEric");
  ericSoundClip.play();
});
