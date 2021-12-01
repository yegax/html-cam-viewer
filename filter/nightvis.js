$(document).ready(function(){

  $("#effect-nightvis").click(function() {

    $("#effect-warm").removeClass("buttonactive");
    $("#effect-sepia").removeClass("buttonactive");
    $("#effect-grayscale").removeClass("buttonactive");
    $("#effect-blur").removeClass("buttonactive");
    $("#effect-grayscale2").removeClass("buttonactive");
    $("#effect-cool").removeClass("buttonactive");
    $("#effect-invert").removeClass("buttonactive");
    $("#effect-hue").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-noeffect").removeClass("buttonactive");

    var effectActive = $("#effect-nightvis").hasClass("buttonactive")
    if (effectActive){
      $("#videoElement").toggleClass("nightvis");
    } else {
      $("#videoElement").removeClass();
    }
    });
  });