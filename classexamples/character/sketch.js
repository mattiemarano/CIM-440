var eyeSize =40;
var mouthX =80;
var mouthY =150;



function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,255,0);
}

function draw() {
  // put drawing code here

  //default drawing parameters
  fill("white");
  stroke(0);
  strokeWeight(1);


  fill("Blue");
  strokeWeight(2);//need to reset the stroke weight to 1 since the code runs in a loop
  ellipse(100,100,eyeSize,eyeSize);//left eye
  ellipse(140,100,eyeSize,eyeSize);//right eye

  fill(255,0,0); //RGB color
  rect(mouthX,mouthY,83,20);//(starting poing x,starting point y,width, length)mouth

  fill(255); //grayscale notation
  strokeWeight(5);
  point(72,382);

  strokeWeight(1);
  line(80,160,163,160);//split of the mouth

  //width and height

  //can find out what changes have been made with console.log (javascript function to print a value)
  //console.log("width " + width); commenting out the console
  //console.log("height " + height); commenting out the console


  triangle(width/2,height/2,width/2+10,height/2+10,width/2-10,height/2+10);
  //point1=w/2,h/2
  //point2=w/2+10,h/2+10
  //point3=w/2-10,h/2+10
  // letting the program set the center point --> why using the width and height

  triangle(100,400,120,420,80,420)
  //(point 1 x, point 1 y, point 2 x, point 2 y, point 3 x, point 3 y)


arc(300,300,50,50,0,PI);
//(x,y,w,h,start,stop)
//PI=special word that P5 uses; 180 degrees
arc(400,400,50,50,PI+HALF_PI,0); //ear shaped arc
arc(250,250,50,50,0,TWO_PI);//circle

//x,y,w,h,start,stop

//HALF_PI = 1/4 circle
//PI = semi circle
//PI+HALF_PI = 3/4 circle
//2PI = circle

arc(100,300,50,50,HALF_PI,PI+HALF_PI); // "ear shape"
arc(150,300,50,50,0,PI); //smiley face
arc(200,300,50,50,0,PI+HALF_PI);// 75% of a circle
arc(400,100,50,50,PI,0); //upside down smiley face


line(100,300,200,300); //horizontal line, use a common y value
line(100,200,100,300); //vertical line, use a common x value 






}//end of draw
