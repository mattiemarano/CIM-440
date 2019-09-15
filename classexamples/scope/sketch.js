//variables outside of the functions = global variables - these are available throughout the program
var faceColor ="blue";
var pointX = 0;

function setup() {
  // put setup code here
//varibales within {} are only available within that block of code

var message = "Hello";

console.log(message);

//console.log(drawMessage); error not defien, becasue drawMessage's variable scope is inside of the draw loop

}

function draw() {
  // put drawing code here

  //console.log(message); Error: not defined, becasue message variable scope is only inside the setup

  var drawMessage = "this message is in the draw loop"; //this creates a new variable every time the draw loop happens
  console.log(drawMessage);
}
