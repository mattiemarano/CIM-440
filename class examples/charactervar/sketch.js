var pointX = 0; //doesnt have a value yet; haven't created the canvas yet
var pointY = 0;

//p5.js exists within the setup and the drawing; once outside there are no references/understanding of what the program is - but it does understand what variables are 


function setup() {
  // put setup code here
  createCanvas(1000,1000);
  background("DeepPink");
  pointX = width/2;
  pointY = height/2;

  console.log("pointX " + pointX + " pointY "+ pointY); //keep track of the values in the program
  //the + is adding to the message
}

function draw() {
  // put drawing code here

background("DeepPink");// flood the background: redraws the background every loop for a more fluid design
pointX = mouseX; //mouseX gives the position of the cursor
pointY = mouseY; //mouseY gives the position of the cursor

console.log("pointX " + pointX + " pointY "+ pointY);

rect(pointX-100,pointY-100,200,200); //head

ellipse(pointX,pointY,10,10); //nose

ellipse(pointX+20,pointY-20,30,30);//right eye
ellipse(pointX-20,pointY-20,30,30);//left eye
arc(pointX,pointY+10,50,50,0,PI);






}
