$(document).ready(function(){

  $("#effect-grayscale").click(function() {

    $("#effect-warm").removeClass("buttonactive");
    $("#effect-sepia").removeClass("buttonactive");
    $("#effect-grayscale2").removeClass("buttonactive");
    $("#effect-blur").removeClass("buttonactive");
    $("#effect-invert").removeClass("buttonactive");
    $("#effect-cool").removeClass("buttonactive");
    $("#effect-nightvis").removeClass("buttonactive");
    $("#effect-hue").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");

    $("#videoElement").removeClass();  
    $("#videoElement").toggleClass("grayscale");
    $("#effect-grayscale").toggleClass("buttonactive");
    });

  });