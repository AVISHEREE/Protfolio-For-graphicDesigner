
const video = document.getElementById('myVideo');
const mutedIndicator = document.getElementById('mutedIndicator');

// Function to mute the video
function muteVideo() {
  video.muted = true;
  mutedIndicator.style.display = 'block';
}

// Function to unmute the video
function unmuteVideo() {
  video.muted = false;
  mutedIndicator.style.display = 'none';
}

// Event listener for scroll
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;

  // Adjust this threshold based on when you want the video to be muted
  if (scrollPosition > 200) {
    muteVideo();
  } else {
    unmuteVideo();
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.getElementById("click");
  const video = document.getElementById("myVideo");

  toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      video.style.display = "none"; // Hide the video
    } else {
      video.style.display = "block"; // Show the video
    }
  });
});
