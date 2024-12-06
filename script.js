//your JS code here. If required.
// Initialize the rotation angle
let angle = 0;

// Function to rotate the line
function rotateLine() {
  const line = document.getElementById('line');
  angle += 2; // Increase the angle by 2 degrees
  line.style.transform = `rotate(${angle}deg)`; // Apply rotation
}

// Set an interval to update the rotation every 20 milliseconds
setInterval(rotateLine, 20);

