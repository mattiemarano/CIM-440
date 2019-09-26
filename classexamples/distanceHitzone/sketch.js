//distance function: calculates the distance between two points
    //if we are within a particular area, something will happen: hover state
    //if we click within a particular area, someting else will happen: click state


//arbitrary coordinates for a hitzone
var hitX = 100;
var hitY = 100;

var threshold = 20; //radius
var hitDistance = 0; // available in the entire program

var changeBackground = "white";

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(changeBackground);


  //HOVER STATE
  //caluculates distance between 2 points
hitDistance = dist(mouseX,mouseY,hitX,hitY); //in the draw loop - not available outside of it
  console.log("hitDistance " + hitDistance)
  //if the distance is less than or equal to 20, our range is 0-20 inlcuding 20
  if(hitDistance <= threshold){
    fill(127);
    text("Click here", hitX + 20,hitY,+60);
  }else{
    // if the above is not true, then execute the else statement
    fill(255);
  }

  ellipse(hitX,hitY,threshold*2,threshold*2);
}




//ON CLICK
function mousePressed (){
  if(hitDistance <= threshold){
    console.log("Clicked");
    changeBackground = "blue";
  }else{
    console.log("Clicked oustide");
    changeBackground = "white";
}
}
