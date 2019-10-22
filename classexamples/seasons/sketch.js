var seasonSelect;
var seasonType = "";

var sunX = 0;
var sunY = 0;


var snowX = []; //empty array
var snowY = [];//empty array
var snowAmount = 100;


var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafImage;

function preload(){
  leafImage = loadImage("leaf.png");
}


function setup() {
  // put setup code here
  createCanvas (400,400);
  seasonSelect = createSelect();
  seasonSelect.position(10,10);
  seasonSelect.option("");
  seasonSelect.option("fall");
  seasonSelect.option("winter");
  seasonSelect.option("spring");
  seasonSelect.option("summer");
  seasonSelect.changed(function(){
    seasonType = seasonSelect.value();
    //.value holds fall, winter, spring, summer; passing that value to seasonType
  });

  sunX = width/2; //do this in the setup because you need the width and height to exist; dont exist outside of setup/draw
  sunY = height*2; //set Y to 800px


  //var i = 0 is the start point
  //i<100 is the conditional; how many times do we want the for loop to run
  // i++ is the iterator, which is the same as saying i=i+1
   //the range of where the snow will start is from the stop of the canvas to above the canvas - and then it will fall down (becasuse of snowX)
  }


  //var i is destroyed after the for loop is done


  console.log("SnowX "+ snowX);
  console.log("snowY"+ snowY);

  for(var i = 0; i<leafAmount; i++){
    leafX[i] = random(0,width);
    leafY[i] = random(0,-500);
  }

  console.log("leafX "+ leafX);
  console.log("leafY "+ leafY)



function draw() {
  // put drawing code here
  background(255);

  if(seasonType == "fall"){
    console.log("fall");

    for(var f = 0; f<leafAmount; f++){
      if(leafY[f]<height-20){
        leafY[f]++; //makes the leaves move
        leafX[f] = leafX[f] + sin(radians(frameCount)); //makes the leaves sway
          // framecount is how many frames your sketch has produced; typically 60 frames per second - will convert the frames to degrees

        //console.log("leafY " + f + " " +leafY[f]);
      }

      image(leafImage, leafX[f], leafY[f], 20, 20);
      //console.log("leafY " + leafY);
    }
  }else if(seasonType =="winter"){
    console.log("winter");

    for(var y = 0;y<snowAmount; y++){
      snowY[y]++; //same as snowY[y]=snowY[y]+1;
      //snowY[y] = snowY[y] + 5; changes the speed of the snow falling
      ellipse(snowX[y],snowY[y],10,10);
      fill("white");
      stroke("blue");

      if(snowY[y] > height){
        snowY[y] = random(0,-500);
        snowX[y] = random(0,width);
      }
    }
  }else if(seasonType == "spring"){
    console.log("spring");
  }else if(seasonType == "summer"){
    console.log("summer");
    fill("orange");
    stroke("red");
    ellipse(sunX,sunY,width,height);


    if(sunY > height){
      sunY = sunY -1; //allows us to move the sun up the screen when "summer is selected"
    }

  }else{
    console.log("blank");
    text("Make a selection",100,20);

  }




}//end of draw






//for loop: tell the program to run it a certain amount of times
