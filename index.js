const width = 400;
const height = 400;

const canvas = document.querySelector("canvas");
canvas.width = width;
canvas.height = height;
canvas.style.border = "1px solid black";

var c = canvas.getContext("2d");

class Circle {
	constructor(x, y, dx, dy, radius) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
	}

	draw() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = "blue";
		c.stroke();
		c.closePath();
	}

	update() {
		if (this.x + this.radius > width || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > height || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
        this.y += this.dy;
        console.log("sa")
        this.draw();
	}
}



let c1 = new Circle(200, 70, 3, 3, 20);
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, width, height);
	c1.update();
}
animate();
