var edUrinalSoundClip = new Audio("sounds/ed-urinal.m4a");
var edGirldadSoundClip = new Audio("sounds/ed-girldad.m4a");
var edSnakeSoundClip = new Audio("sounds/ed-snake.m4a");
var edSnoreSoundClip = new Audio("sounds/ed-snore.m4a");
var edTravelSoundClip = new Audio("sounds/ed-travel.m4a");
var edKingSoundClip = new Audio("sounds/ed-king.m4a");
var edGiselleSoundClip = new Audio("sounds/ed-giselle.m4a");
var edSantaSoundClip = new Audio("sounds/ed-santa.m4a");
var edToesSoundClip = new Audio("sounds/ed-toes.m4a");
var obBoyDadSoundClip = new Audio("sounds/OB-boydad.m4a");
var obTesticsSoundClip = new Audio("sounds/OB-testics.m4a");
var obSwordsSoundClip = new Audio("sounds/OB-swords.m4a");
var obVacationSoundClip = new Audio("sounds/OB-vacation.m4a");
var obDWMSoundClip = new Audio("sounds/OB-DWM.m4a");
var obRawdogSoundClip = new Audio("sounds/OB-rawdog.m4a")
var obBearSoundClip = new Audio("sounds/OB-bear.m4a");
var obSockieSoundClip = new Audio("sounds/OB-sockie.m4a");


var ericSoundClip = new Audio("sounds/eric.m4a");


// Ed Audio

$(".ed-pic").on("click", function() {
   $(".ed-pic").toggleClass("spinEd");
   edUrinalSoundClip.play();
});

$("#ed-girldad, #ed-girldad-2").on("click", function() {
  $(".ed-pic").toggleClass("spinEdGirlDad");
  edGirldadSoundClip.play();
});

$("#ed-snake, #ed-snake-2").on("click", function() {
  $(".ed-pic").toggleClass("spinEdSnake");
  edSnakeSoundClip.play();
});

$("#ed-snore, #ed-snore-2").on("click", function() {
  $(".ed-pic").toggleClass("spinEdSnore");
  edSnoreSoundClip.play();
});

$("#ed-travel, #ed-travel-2").on("click", function() {
  $(".ed-pic").toggleClass("spinEdTravel");
  edTravelSoundClip.play();
});

$("#ed-king, #ed-king-2").on("click", function() {
  $(".ed-pic").toggleClass("spinEdKing");
  edKingSoundClip.play();
});

$("#ed-giselle, #ed-giselle-2").on("click", function() {
  $(".ed-pic").toggleClass("spinEdGiselle");
  edGiselleSoundClip.play();
});

$("#ed-santa, #ed-santa-2").on("click", function() {
  $(".ed-pic").toggleClass("spinEdSanta");
  edSantaSoundClip.play();
});

// OB Audio

$(".ob-pic").on("click", function() {
  $(".ob-pic").toggleClass("spinOb");
  obTesticsSoundClip.play();
});


$("#ob-boydad, #ob-boydad-2").on("click", function() {
  $(".ob-pic").toggleClass("spinObBoyDad");
  obBoyDadSoundClip.play();
});


$("#ob-swords, #ob-swords-2").on("click", function() {
  $(".ob-pic").toggleClass("spinObSwords");
  obSwordsSoundClip.play();
});

$("#ob-vacation, #ob-vacation-2").on("click", function() {
  $(".ob-pic").toggleClass("spinObVacation");
  obVacationSoundClip.play();
});

$("#ob-dwm, #ob-dwm-2").on("click", function() {
  $(".ob-pic").toggleClass("spinObDWM");
  obDWMSoundClip.play();
});

$("#ob-rawdog, #ob-rawdog-2").on("click", function() {
  $(".ob-pic").toggleClass("spinObRawdog");
  obRawdogSoundClip.play();
});

$("#ob-bear, #ob-bear-2").on("click", function() {
  $(".ob-pic").toggleClass("spinObBear");
  obBearSoundClip.play();
});

$("#ob-sockie, #ob-sockie-2").on("click", function() {
  $(".ob-pic").toggleClass("spinObSockie");
  obSockieSoundClip.play();
});

// Eric Audio

$(".eric-pic").on("click", function() {
  $(".eric-pic").toggleClass("spinEric");
  ericSoundClip.play();
});

