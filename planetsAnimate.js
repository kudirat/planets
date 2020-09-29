function setup() { "use strict";
                  
  var canvas = document.getElementById('myCanvas');
  var slider1 = document.getElementById('slider1');
  slider1.value = -25;
  var slider2 = document.getElementById('slider2');
  slider2.value = 0;

function draw(){
var canvas = document.getElementById('circle');
var context = canvas.getContext('2d');
  canvas.width = canvas.width;
var theta1 = slider1.value*0.005*Math.PI;
var phi1 = slider2.value*0.005*Math.PI;
  
function outerRings (x, y, r){

  
context.beginPath();
context.arc(x, y, r, 0, 2 * Math.PI, false);
context.lineWidth = 3;
context.strokeStyle = "black";
context.stroke();

}
    
function planet(color, outlineClr){
var X = canvas.width / 2;
var Y = canvas.height / 2;
var R = 40;
context.beginPath();
context.arc(X, Y, R, 0, 2 * Math.PI, false);
context.lineWidth = 7;
context.strokeStyle = outlineClr;
context.stroke();
context.fillStyle = color;
context.fill();
}
    
 function smallerPlts ( r, color, outlineClr){
   
var x = canvas.width / 2;
var y = canvas.height / 2;
context.beginPath();
context.arc(x, y, r, 0, 2 * Math.PI, false);
context.lineWidth = 3;
context.strokeStyle = outlineClr;
context.stroke();
context.fillStyle = color;
context.fill();
}   
    
    context.translate(-200, -200);
    //draws the black outer rings
    outerRings(canvas.width, canvas.height, 200);
    outerRings(canvas.width, canvas.height, 170);
    outerRings(canvas.width, canvas.height, 150);
    outerRings(canvas.width, canvas.height, 120);
    outerRings(canvas.width, canvas.height, 100);
    outerRings(canvas.width, canvas.height, 70);
    context.save();
    //This is drawing what I think is the sun, haha
    context.translate(200, 200);
    planet("#FF7A18", "#DB2520");
    smallerPlts(25, "#FFC74A", "#FFC74A");
    context.save();
    //draw the smaller planets
    context.translate(-60, 20);
    smallerPlts(15,"#0d2a64", "#c07ff9");
    context.translate(-50, 20);
    smallerPlts(15, "black", "black");
  context.save();
    context.rotate(theta1);
    context.translate(-60, -35);
    smallerPlts(20, "#DB2520", "#FFC74A");
  
  context.rotate(phi1);
    context.translate(-100, 250);
    smallerPlts(20, "#697590", "black");
  
  context.restore();
  context.restore();
    
  }
  slider1.addEventListener("input",draw);
  draw();
}
window.onload = setup;


