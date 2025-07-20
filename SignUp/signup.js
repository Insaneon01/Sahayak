const videoOverlay = document.getElementById('videoOverlay');
const video = document.getElementById('video');
const capturedImage = document.getElementById('capturedImage');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const startCameraButton = document.getElementById('startCamera');
const captureOrResetButton = document.getElementById('captureOrReset');
const closeOverlayButton = document.getElementById('closeOverlay');
const selectButton = document.getElementById('select');
let stream;
let isCaptured = false;

startCameraButton.addEventListener('click', () => {
  videoOverlay.style.display = 'flex';
  isCaptured = false;
  captureOrResetButton.textContent = 'Capture Photo';
  capturedImage.style.display = 'none';
  selectButton.style.display = 'none';

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(mediaStream => {
      stream = mediaStream;
      video.srcObject = stream;
    })
    .catch(err => {
      console.error("Error accessing the camera: " + err);
    });
});

captureOrResetButton.addEventListener('click', () => {
  if (!isCaptured) {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    stream.getTracks().forEach(track => track.stop());

    const imageData = canvas.toDataURL('image/png');

    capturedImage.src = imageData;
    capturedImage.style.display = 'block';
    capturedImage.style.width = '60%';
    capturedImage.style.height = '60%';
    video.style.display = 'none';

    selectButton.style.display = 'inline-block';

    captureOrResetButton.textContent = 'Reset';
    canvas.style.display='none'

    isCaptured = true;
  } else {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(mediaStream => {
        stream = mediaStream;
        video.srcObject = stream;
        video.style.display = 'block';
        capturedImage.style.display = 'none';

        selectButton.style.display = 'none';

        captureOrResetButton.textContent = 'Capture Photo';

        isCaptured = false;
      })
      .catch(err => {
        console.error("Error accessing the camera: " + err);
      });
  }
});

selectButton.addEventListener('click', () => {
  alert('Photo selected!');
  videoOverlay.style.display = 'none';
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }
});

closeOverlayButton.addEventListener('click', () => {
  videoOverlay.style.display = 'none';
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }
});

// Function to start the camera
function startCamera() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Request access to the camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        // Get the video element
        const video = document.getElementById('video');
        
        // Set the video source to the camera stream
        video.srcObject = stream;
        video.play();
      })
      .catch(function(error) {
        console.error('Camera access denied or error occurred:', error);
        alert('Unable to access the camera. Please check your camera permissions.');
      });
  } else {
    alert('Your browser does not support camera access.');
  }
}

// Call this function when the user clicks the "Click Picture" button
document.getElementById('startCamera').addEventListener('click', function() {
  startCamera();
});
