// start canvas html code
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// Set canvas dimensions
canvas.width = window.innerWidth;   
canvas.height = window.innerHeight;
let hue=0
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
canvas.addEventListener('click', (event) => {
   
init(20)

});
canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
init(20)

});

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 7 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue},100%, 50%)`;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size>.2) this.size -= 0.1;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
const particles = [];
// draw random circles
function init(count) {
    for (let i = 0; i < count; i++) {
         particles.push(new Particle()); 
    }
}
function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if(particles[i].size <= 0.3){
            particles.splice(i, 1);
            i--;
        }
    }
}
//  class particle with speed
// Draw 100 random circles
// animate circles with mouse movement to follow the mouse cursor
function animateCircles() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height); // clear canvas
    handleParticles(); // draw random circles
hue++
    requestAnimationFrame(animateCircles); // call animateCircles again
}
// Start animation
animateCircles();