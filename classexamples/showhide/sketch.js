var puppy;

var showOrHide = false; //false is used to make comparisions

var show;
var hide;


//load all the media first, then go into the setup, then go into the draw
function preload(){

  puppy = loadImage("puppy.jpg");

  show = createButton("Show Puppy");

  show.mousePressed(function(){
    showOrHide = true;
  });

  hide = createButton("Hide Puppy");
  hide.mousePressed(function(){

    showOrHide = false;

  });


}

function setup() {
  // put setup code here
createCanvas (400,400);

}

function draw() {
  background(255);
  if(showOrHide == true){
    image(puppy,100,100,puppy.width/4,puppy.height/4);
  }
//message in quotes, x position, y position 
text("Click on the buttons to see a cute puppy",10,10);

}
