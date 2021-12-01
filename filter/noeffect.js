$(document).ready(function(){

  $("#effect-noeffect").click(function() {

    $("#effect-warm").removeClass("buttonactive");
    $("#effect-sepia").removeClass("buttonactive");
    $("#effect-grayscale").removeClass("buttonactive");
    $("#effect-blur").removeClass("buttonactive");
    $("#effect-grayscale2").removeClass("buttonactive");
    $("#effect-cool").removeClass("buttonactive");
    $("#effect-invert").removeClass("buttonactive");
    $("#effect-hue").removeClass("buttonactive");
    $("#effect-nightvis").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");


    $("#videoElement").removeClass();
    $("#effect-noeffect").toggleClass("buttonactive");

    var effectActive = $("#effect-noeffect").hasClass("buttonactive")
    if (effectActive){
      $("#videoElement").removeClass();
    } else {
      $("#videoElement").removeClass();
    }
    });
  });