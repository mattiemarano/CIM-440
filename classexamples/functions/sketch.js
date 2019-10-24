var hitzone3 = false;

function setup() {
  // put setup code here
  createCanvas(400,400);

  //calling the function; it will respond with whatever is in the function
  hello();
  goodbye("anika");
  goodbye("max");
}

function draw() {
  // put drawing code here
// frameRate(1); //drawing one draw loop per second; can cause lag since the code is only going 1 time per second

  background(255);

  if(circleHitzone(100,100) == true){
    //the order of the parameters is important
    circleColor(random(width), random(height), random(0,200), random(255), random(255), random(255));

    //drawing 500 circles per draw loop
    for(var i = 0; i < 500; i++){
      circleColor(random(width), random(height), random(0,200), random(255), random(255), random(255));
    }
  }

  fill("black");
  ellipse(mouseX,mouseY,20,20);

  console.log(circleHitzone(200,200));

  circleHitzone(300,300);
  if(hitzone3 == true){
    rect(100,100,100,100);
  }


}//end of draw loop

function mousePressed(){
  if(circleHitzone(300,300) == true){
    // rect(100,100,100,100);
    hitzone3 = true;
}else{
  hitzone3 = false;
}
}

//creating our own functions
//try to avoid names that are related to p5/javascript language
function hello(){
  //giving the framework for when you call the function, it will actually work
  console.log("hello");
}

//the variable message is a parameter
//creating a variable in the parenthesis, you are creating a variable which is only available in this function
function goodbye(message){
  console.log("goodbye " + message);
}


//variable declaration
function circleColor(xpos, ypos, csize, r, g, b){
//these variables are used within the function; the function is the organism which can take care of itself

//this is the usage
  fill(r,g,b);
  ellipse(xpos,ypos,csize,csize);
}

function circleHitzone(distX, distY){
  //the distance function takes 2 points; the distance between the mouse and a second location - based on this you get a result
  var curDist = dist(mouseX,mouseY,distX,distY);
  // console.log("curDist " + curDist);
  ellipse(distX,distY,10,10);


  // return curDist;

  //when over the hitzone the value returned is true, if outside of the hitzone, the return is false
  if(curDist < 10){
    return true;
  }else{
    return false;
  }
}// end of circlehitzone function
