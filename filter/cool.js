$(document).ready(function(){

  $("#effect-cool").click(function() {
    $("#videoElement").removeClass();
    $("#videoElement").toggleClass("cool");
    $("#effect-cool").toggleClass("buttonElement:active");
    });
    
  });