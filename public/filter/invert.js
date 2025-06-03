$(document).ready(function(){

  $("#effect-invert").click(function() {

    $("#effect-warm").removeClass("buttonactive");
    $("#effect-sepia").removeClass("buttonactive");
    $("#effect-grayscale").removeClass("buttonactive");
    $("#effect-blur").removeClass("buttonactive");
    $("#effect-grayscale2").removeClass("buttonactive");
    $("#effect-cool").removeClass("buttonactive");
    $("#effect-nightvis").removeClass("buttonactive");
    $("#effect-hue").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-noeffect").removeClass("buttonactive");

    $("#videoElement").removeClass();
    $("#effect-invert").toggleClass("buttonactive");

    var effectActive = $("#effect-invert").hasClass("buttonactive")
    if (effectActive){
      $("#videoElement").toggleClass("invert");
    } else {
      $("#videoElement").removeClass();
    }
  });
});