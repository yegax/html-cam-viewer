$(document).ready(function(){

  $("#effect-sepia").click(function() {

    $("#effect-warm").removeClass("buttonactive");
    $("#effect-grayscale").removeClass("buttonactive");
    $("#effect-grayscale2").removeClass("buttonactive");
    $("#effect-blur").removeClass("buttonactive");
    $("#effect-invert").removeClass("buttonactive");
    $("#effect-cool").removeClass("buttonactive");
    $("#effect-nightvis").removeClass("buttonactive");
    $("#effect-hue").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-noeffect").removeClass("buttonactive");

    var effectActive = $("#effect-sepia").hasClass("buttonactive")
    if (effectActive){
      $("#videoElement").toggleClass("sepia");
    } else {
      $("#videoElement").removeClass();
    }
    });
  });