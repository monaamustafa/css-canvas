// start canvas html code
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// Set canvas dimensions
canvas.width = window.innerWidth;   
canvas.height = window.innerHeight;
// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
// Mouse position tracking
const mouse = {
    x: 0,
    y: 0
};
canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

// create circle
function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// create random circle
function randomCircle() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 50 + 10; // radius between 10 and 60
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // random color
    drawCircle(x, y, radius, color);
}
// draw random circles
function drawRandomCircles(count) {
    for (let i = 0; i < count; i++) {
        randomCircle();
    }
}
//  class particle with speed
// Draw 100 random circles
// animate circles with mouse movement to follow the mouse cursor
function animateCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    drawRandomCircles(100); // draw random circles
    requestAnimationFrame(animateCircles); // call animateCircles again
}
// Start animation
animateCircles();