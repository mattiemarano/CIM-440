var puppy;


//load all the media first, then go into the setup, then go into the draw
function preload(){

  puppy = loadImage("puppy.jpg");


}

function setup() {
  // put setup code here
createCanvas (400,400);

}

function draw() {
  // put drawing code here
  //image var, x position, y position
image(puppy,0,0); // full scale
//when you divide by a #, the image will scale proportionatley
image(puppy,100,100,puppy.width/4,puppy.height/4);
//set exact dimensions
image(puppy,200,200,125,200);//setting exact dimensions scale to that pixel size


}
