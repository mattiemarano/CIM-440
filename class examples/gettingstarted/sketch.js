function setup() {
  // put setup code here

  createCanvas(500,500);
  background("DeepPink");
  background("LemonChiffon");
  background(127);//Medium gray color, gray scale goes from 0-255
  background(0);//black
  background(255);//white
  background(0,127);//black with a 127 or 50% opacity
  background("#FFFACD");//hexcode
  background(255,0,0);//red
  background(0,255,0);//green
  background(0,0,255);//blue
  background(0,128,128);//teal, playing with different amounts of colors
  


  fill(0);
  stroke("255,0,0");
  ellipse(50,50,50,50);//(x,y,w,h)

  fill(255);
  ellipse(100,100,25,25);

}
function draw() {
  // put drawing code here
}
