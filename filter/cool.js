$(document).ready(function(){
  
  $("#effect-cool").click(function() {
    
    $("#effect-sepia").removeClass("buttonactive");
    $("#effect-grayscale").removeClass("buttonactive");
    $("#effect-grayscale2").removeClass("buttonactive");
    $("#effect-blur").removeClass("buttonactive");
    $("#effect-invert").removeClass("buttonactive");
    $("#effect-warm").removeClass("buttonactive");
    $("#effect-nightvis").removeClass("buttonactive");
    $("#effect-hue").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");
    $("#effect-test").removeClass("buttonactive");

    $("#videoElement").removeClass();
    $("#videoElement").toggleClass("cool");
    $("#effect-cool").toggleClass("buttonactive");

    });
});