$(document).ready(function(){

  $("#effect-hue").click(function() {

    $("#effect-warm").removeClass("buttonactive");
    $("#effect-sepia").removeClass("buttonactive");
    $("#effect-grayscale").removeClass("buttonactive");
    $("#effect-blur").removeClass("buttonactive");
    $("#effect-grayscale2").removeClass("buttonactive");
    $("#effect-cool").removeClass("buttonactive");
    $("#effect-nightvis").removeClass("buttonactive");
    $("#effect-invert").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-noeffect").removeClass("buttonactive");

    $("#videoElement").removeClass();
    $("#effect-hue").toggleClass("buttonactive");

    var effectActive = $("#effect-hue").hasClass("buttonactive")
    if (effectActive){
      $("#videoElement").toggleClass("hue");
    } else {
      $("#videoElement").removeClass();
    }
    });
  });