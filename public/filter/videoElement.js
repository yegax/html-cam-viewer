//get handles on video element.
var video = document.querySelector("#videoElement");
//loop to request access for video source.
if (navigator.mediaDevices.getUserMedia) {
  //stream video if navigator response is true.
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    //catch error if navigator response is false.
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}