var pointX = 0; //doesnt have a value yet; haven't created the canvas yet
var pointY = 0;
var faceColor = "purple";
// "" are called a string

var faceButton;

//p5.js exists within the setup and the drawing; once outside there are no references/understanding of what the program is - but it does understand what variables are


function setup() {
  // put setup code here
  createCanvas(500,500);
  background("DeepPink");
  pointX = width/2;
  pointY = height/2;

  console.log("pointX " + pointX + " pointY "+ pointY); //keep track of the values in the program
  //the + is adding to the message

  faceButton = createButton("Click to turn orange");
  //createButton - adds a button to the Screen
  //in the parenthesis add the message in the button
  faceButton.position(20,20); // default location is bottom right, but can adjust
  faceButton.mousePressed(function(){
      //your action goes in here - what you want to happen
      //the button mousepressed function is tied to the general mouspressed function
      faceColor = "orange";

  });
}

function draw() {
  // put drawing code here


// i want to change the background based, split screen vertically

if(mouseX < width/2){
  console.log("left hand side");
  background(255);// flood the background: redraws the background every loop for a more fluid design
  //delete background and it would then make the train (not fluid view)
}

if(mouseX > width/2){
  console.log("right hand side");
  background("DeepPink");

}


pointX = mouseX; //mouseX gives the position of the cursor
pointY = mouseY; //mouseY gives the position of the cursor

//console.log("pointX " + pointX + " pointY "+ pointY);

fill(faceColor);
rect(pointX-100,pointY-100,200,200); //head

ellipse(pointX,pointY,10,10); //nose

ellipse(pointX+20,pointY-20,30,30);//right eye
ellipse(pointX-20,pointY-20,30,30);//left eye
arc(pointX,pointY+10,50,50,0,PI);

} //end of draw



function mousePressed(){ // the actual action pressing the mouse
  //faceColor = "LemonChiffon"; //when you click on the mouse, the face color changed from purple to red
}

function mouseReleased(){
  //faceColor = "blue";
}

function keyPressed (){

  console.log("key " + key);
  console.log("keyCode " + keyCode);

  //if statement is true, then execute code inside { }
  // == if one side equals the other; comparision
  //if you press b then key becomes "b" == "b" which is true
  // key returns a character
  if(key == "b"){
    faceColor = "green";
  }

  //keyCode is represented by a number
  //if you press r, then keyCode becomes 82, 82 == 82 which is true
  // keycode returns a number
  if(keyCode == 82){
    faceColor = "red";
  }



}
