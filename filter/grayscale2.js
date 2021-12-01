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
    $("#effect-noeffect").removeClass("buttonactive");

    $("#videoElement").removeClass();
    $("#effect-grayscale2").toggleClass("buttonactive");

    var effectActive = $("#effect-grayscale2").hasClass("buttonactive")
    if (effectActive){
      $("#videoElement").toggleClass("grayscale2");
    } else {
      $("#videoElement").removeClass();
    }
    });
  });