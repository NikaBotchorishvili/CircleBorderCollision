const width = 400;
const height = 400;

const canvas = document.querySelector("canvas");
canvas.width = width;
canvas.height = height;
canvas.style.border = "1px solid black";

var c = canvas.getContext("2d");

class Circle {
	constructor(x, y, dx, dy, radius, color) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
        this.color = color
    }

	draw() {
        c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = `#${this.color}`;
        
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
		this.draw();
	}
}

let circleArray = [];

for (let i = 0; i < 100; i++) {
	let radius = 20;
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
	let x = Math.random() * (width - radius * 2) + radius;
	let y = Math.random() * (height - radius * 2) + radius;
	let dx = Math.round((Math.random() - 0.5) * 5);
	let dy = Math.round((Math.random() - 0.5) * 5);

	circleArray.push(new Circle(x, y, dx, dy, radius, randomColor));
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, width, height);

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}
animate();
