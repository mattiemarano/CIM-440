var instructions = "Type out the word WINTER to draw a picture";
var message = "Click the mouse to sweep away the snow";

var backgroundImage;
var snowImage;
var snowmanImage;
var iglooImage;
var penguinImage;
var santaImage;
var snowman2Image;
var gingerbreadImage;
var gingerbreadhouseImage;

var snowX = []; //empty array
var snowY = [];//empty array
var snowAmount = 300;

var showsnowman = false;
var showsnowman2 = false;
var showgingerbread = false;
var showsnow = false;
var showigloo = false;
var showpenguin = false;
var showsanta = false;
var showgingerbreadhouse = false;

var showmessage = false;

// var interval = 1000;
// var prevMillis = 0;
// var counter = 0;

function preload(){
  backgroundImage =loadImage("background.jpg");
  snowImage = loadImage("snowflake.png");
  snowmanImage =loadImage("snowman.png");
  snowman2Image = loadImage("snowman2.png");
  gingerbreadImage =loadImage("gingerbread.png");
  iglooImage =loadImage("igloo.png");
  penguinImage =loadImage("penguin.png");
  santaImage = loadImage("santa.png");
  gingerbreadhouseImage = loadImage("gingerbreadhouse.png");
}


function setup() {
  // put setup code here
  createCanvas(1000,1000);

  for(var i = 0; i<snowAmount; i++){
    snowX[i] = random(0,width);
    snowY[i] = random(0,-2000);
}

} //end of setup

function draw() {
  // put drawing code here

 background(backgroundImage);

 text(instructions,300,50);
 textSize(20);
 fill("white");

  if(showsnowman == true){
    //draw snowman
    image(snowmanImage,820,750,175,225);
  }

  if(showsnowman2 == true){
    image(snowman2Image,650,730,175,245);
  }

  if(showgingerbread == true){
    image(gingerbreadImage,240,845,100,100);
    image(gingerbreadhouseImage,20,690,250,250);
  }

  if(showsanta == true){
    image(santaImage,100,10,800,300);
  }

  if(showigloo == true){
    image(iglooImage,380,815,100,75);
  }

  if(showpenguin == true){
    image(penguinImage,500,815,60,60);
  }

  if(showsnow == true){
    for(var f = 0; f<snowAmount; f++){
      if(snowY[f]<height -20){
        snowY[f]++;
      }
    image(snowImage, snowX[f], snowY[f],25,25);
      }
    text(message,315,75);
    textSize(20);
    fill("white");
  }

// if(millis() - prevMillis > interval){
//     showmessage = true;
//     prevMillis = millis();
//     counter = counter + 1;
//     console.log(counter);
//   }

}//end of draw loop

function keyPressed(){

  if(key == 'w'){
    showsnowman = true;
    showsnowman2 = true;
  }
  if(key == 'i'){
    showgingerbread = true;
    showgingerbreadhouse = true;
  }
  if(key == 'n'){
    showsanta = true;
  }
  if(key == 't'){
    showigloo = true;
  }
  if(key == 'e'){
    showpenguin = true;
  }
  if(key == 'r'){
    showsnow = true;
    showmessage = true;
  }
} // end of key pressed

function mousePressed(){
  showsnow = false;
}
