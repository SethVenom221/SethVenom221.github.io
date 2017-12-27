//get board element
var board = document.getElementsByTagName("canvas")[0];
//get canvas data
var draw = board.getContext("2d");

var sample = document.getElementsByTagName("div")[0];

//Color variables
var R = document.getElementById("RED").value;
var G = document.getElementById("GREEN").value;
var B = document.getElementById("BLUE").value;
//current mouse xy
var Cx;
var Cy;
//last position
var Px;
var Py;
//variable which tells me when the mouse is down false is up true down
var isMouseDown = false;
//update mouse position
onmousemove = function(e){
	Px = Cx;
	Py = Cy;
	Cx = e.pageX - parseInt(board.style.left);
	Cy = e.pageY - parseInt(board.style.top);
}

//tells me mouse is down
onmousedown = function(){
	isMouseDown = true;
}
//tells me mouse is up
onmouseup = function(){
	isMouseDown = false;
}
//update the colorSample color
var updateColorSample = function(sampleElement){
	sampleElement.style.backgroundColor = "#"+parseInt(R).toString(16)+parseInt(G).toString(16)+parseInt(B).toString(16);
}

//what to do while the mouse is down
var whileMouseDown = function(currentX, currentY){
	draw.beginPath();
	draw.moveTo(Px,Py);
	draw.strokeStyle = "#"+parseInt(R).toString(16)+parseInt(G).toString(16)+parseInt(B).toString(16);
	draw.lineTo(currentX, currentY);
	draw.stroke();
}
//what to do while muse is up
var whileMouseUp = function(currentX, currentY){
	draw.moveTo(currentX, currentY);
}
//reset RBG values
var updateRGBValues = function(){
	R = document.getElementById("RED").value;
	G = document.getElementById("GREEN").value;
	B = document.getElementById("BLUE").value;
}
draw.beginPath();
var update = function(){
	//all update functions and other things
	updateRGBValues();
	updateColorSample(sample);
	if(isMouseDown){
		whileMouseDown(Cx,Cy);
	}
	//request another frame
	requestAnimationFrame(update);
}
requestAnimationFrame(update);
