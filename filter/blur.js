$(document).ready(function(){

  $("#effect-blur").click(function() {

    $("#effect-warm").removeClass("buttonactive");
    $("#effect-sepia").removeClass("buttonactive");
    $("#effect-grayscale").removeClass("buttonactive");
    $("#effect-grayscale2").removeClass("buttonactive");
    $("#effect-invert").removeClass("buttonactive");
    $("#effect-cool").removeClass("buttonactive");
    $("#effect-nightvis").removeClass("buttonactive");
    $("#effect-hue").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-noeffect").removeClass("buttonactive");

    $("#videoElement").removeClass();
    $("#effect-blur").toggleClass("buttonactive");

    var effectActive2 = $("#effect-blur").hasClass("buttonactive")
    if (effectActive2){
      $("#videoElement").toggleClass("blur");
    } else {
      $("#videoElement").removeClass();
    }
    });
  });