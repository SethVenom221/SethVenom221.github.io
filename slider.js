var board = document.getElementsByTagName("canvas")[0];

var sliderR = document.createElement("input");
sliderR.id = "RED";
var sliderG = document.createElement("input");
sliderG.id = "GREEN";
var sliderB = document.createElement("input");
sliderB.id = "BLUE";
var colorSample = document.createElement("div");
colorSample.style.position = "absolute";
colorSample.style.width = 30 + "px";
colorSample.style.height = 30 + "px";


sliderR.style.position = "absolute";
sliderG.style.position = "absolute";
sliderB.style.position = "absolute";
sliderR.style.width = 130 + "px";
sliderG.style.width = 130 + "px";
sliderB.style.width = 130 + "px";

sliderR.style.left = 0 + 'px';
sliderG.style.left = parseInt(sliderR.style.width) + parseInt(sliderR.style.left) + 5 + "px";
sliderB.style.left = parseInt(sliderG.style.width) + parseInt(sliderG.style.left) + 5 + "px";
colorSample.style.left = parseInt(sliderB.style.left) + parseInt(sliderB.style.width) + 10 + "px";

sliderR.setAttribute("type", "range");
sliderG.setAttribute("type", "range");
sliderB.setAttribute("type", "range");
sliderR.setAttribute("min", 1);
sliderG.setAttribute("min", 1);
sliderB.setAttribute("min", 1);
sliderR.setAttribute("max", 255);
sliderG.setAttribute("max", 255);
sliderB.setAttribute("max", 255);
sliderR.setAttribute("value", (Math.random()*254) + 1);
sliderG.setAttribute("value", (Math.random()*254) + 1);
sliderB.setAttribute("value", (Math.random()*254) + 1);
colorSample.style.backgroundColor = "#"+parseInt(sliderR.value).toString(16)+parseInt(sliderG.value).toString(16)+parseInt(sliderB.value).toString(16)

document.body.appendChild(sliderR);
document.body.appendChild(sliderG);
document.body.appendChild(sliderB);
document.body.appendChild(colorSample);
