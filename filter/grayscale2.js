$(document).ready(function(){

  $("#effect-grayscale2").click(function() {

    $("#effect-warm").removeClass("buttonactive");
    $("#effect-sepia").removeClass("buttonactive");
    $("#effect-grayscale").removeClass("buttonactive");
    $("#effect-blur").removeClass("buttonactive");
    $("#effect-invert").removeClass("buttonactive");
    $("#effect-cool").removeClass("buttonactive");
    $("#effect-nightvis").removeClass("buttonactive");
    $("#effect-hue").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");

    $("#videoElement").removeClass();  
    $("#videoElement").toggleClass("grayscale2");
    $("#effect-grayscale2").toggleClass("buttonactive");
    });

  });