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
    $("#effect-noeffect").removeClass("buttonactive");

    $("#videoElement").removeClass();
    $("#effect-grayscale").toggleClass("buttonactive");

    var effectActive = $("#effect-grayscale").hasClass("buttonactive")
    if (effectActive){
      $("#videoElement").toggleClass("grayscale");
    } else {
      $("#videoElement").removeClass();
    }
    });
  });