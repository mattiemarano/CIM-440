var eyeW =20;
var eyeH =25;
var leftfootX =110;
var leftfootY =380;
var pupilY =140;
var bodyColor = "blue";

function setup() {
  // put setup code here
  createCanvas(500,500);
  background (0,0,0);
  pointX = width/2;
  pointY = height/2;
}

function draw() {
  // put drawing code here

  if(mouseX < width/2){
    console.log("left hand side");
    background("black");// flood the background: redraws the background every loop for a more fluid design
    //delete background and it would then make the train (not fluid view)
  }

  if(mouseX > width/2){
    console.log("right hand side");
    background("white");

  }

  pointX = mouseX; //mouseX gives the position of the cursor
  pointY = mouseY; //mouseY gives the position of the cursor


//body
  fill(bodyColor);
  stroke("Blue");
  strokeWeight(3);
  ellipse(150,150,100,125);//head
  ellipse(150,275,125,200);//body


  //eyes
  fill("White");
  ellipse(135,140,eyeW,eyeH);//left eye
  ellipse(165,140,eyeW,eyeH);//right eye
  //pupils
  fill(0,0,0);//black
  stroke(0,0,0);//black
  strokeWeight(3);
  ellipse(135,pupilY,5,5);//left pupil
  ellipse(165,pupilY,5,5);//right pupil

//beak
  fill("Pink");
  stroke("Pink");
triangle(160,150,150,180,140,150);
  //point1=w/2,h/2
  //point2=w/2+10,h/2+10
  //point3=w/2-10,h/2+10


//feet
stroke("Pink");
strokeWeight(3);
//left foot
line(120,365,110,380); //leg
line(leftfootX,leftfootY,95,390); //left talon
line(leftfootX,leftfootY,110,400); //right talon
line(leftfootX,leftfootY,100,400); //middle talon
//right foot
line(180,365,190,380); //leg
line(190,380,205,390); //right talon
line(190,380,190,400); //left talon
line(190,380,200,400); //middle talon

//right wing
fill(bodyColor);
strokeWeight(1);
stroke("DarkBlue");
ellipse(200,260,40,110);

//left wing
fill(bodyColor);
strokeWeight(1);
stroke("DarkBlue");
ellipse(100,260,40,110);

} //end draw


function keyPressed (){

  if (key == "m"){
    bodyColor = "blue";
}

  if (key == "n"){
    bodyColor = "purple";
  }
}
