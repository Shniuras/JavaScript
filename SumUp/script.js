canvas.width = 500;
canvas.height = 500;

function draw() {

    var height = document.getElementById('height').value;
    var width = document.getElementById('width').value;
	var canvas = document.getElementById("canvas");
	var drawing = canvas.getContext("2d");
	var midHeight = canvas.height/2 - height/2;
	var midWidth = canvas.width/2 - width/2;

	canvas.width = 500;
	canvas.height = 500;
	
	drawing.rect(midWidth, midHeight, height, width);
	drawing.strokeStyle = "#FE9000";
	drawing.stroke();
}
