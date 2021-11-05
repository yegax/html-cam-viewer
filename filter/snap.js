//get handles on the video and canvas elements
var video = document.querySelector('video');
var canvas = document.querySelector('canvas');
//get handle on the 2d context of the canvas element
var context = canvas.getContext('2d');
//other useful vars
var w, h, ratio;

//add listener to wait for the 'loadedmetadata' state so video size can be read
video.addEventListener('loadedmetadata', function() {
  //calculate ratio of video, w to h
  ratio = video.videoWidth / video.videoHeight;
  //define the required width as 100px smaller tha the actual video w
  w = video.videoWidth + 250;
  //calculate h based on width and ratio
  h = parseInt(w / ratio, 10);
  //set canvas values to the calc of w and h
  canvas.width = w;
  canvas.height = h;
}, false);

//takes a snapshot of the video
function snap() {
  //define the size of the rectangle that will be filled (entire element)
  context.fillRect(0, 0, w, h);
  //grab snapshot fro video feedback
  context.drawImage(video, 0, 0, w, h);
}