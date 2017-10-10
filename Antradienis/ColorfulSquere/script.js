canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c = canvas.getContext("2d");

window.addEventListener("mousemove", function(event){
	mouse.x = event.x;
	mouse.y = event.y;
});

var mouse = {
	x:0,
	y:0
}

function draw_circle(is_touched) {
	this.draw = function(){
	c.beginPath();
	c.arc((window.innerWidth / 2), (window.innerHeight/2), 50,0,2*Math.PI);
	c.fillStyle = (is_touched) ? "orange" : "green";
	c.fill();
	}
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth, innerHeight);

	var touching = false;

	if (
		(mouse.x <= (window.innerWidth/2) < 50 && 
		(mouse.y )) {
		touching = true;
	}

	draw_circle((window.innerWidth/2),(window.innerHeight/2), touching);
}

animate();



