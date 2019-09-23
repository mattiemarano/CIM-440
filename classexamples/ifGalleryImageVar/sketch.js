// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22

var sloth, puppy, dinosaur, bulldogs, elephant, tiger;
//since the variables are not defined, they can all be on the same line

var sButton, pButton, dButton, bButton, eButton, tButton;

var currentImage = 0;

var curImage;

function preload (){
  sloth = loadImage ("images/sloth.jpg");
  puppy = loadImage ("images/puppy.jpg");
  dinosaur = loadImage ("images/dinosaur.jpg");
  bulldogs = loadImage ("images/bulldogs.jpg");
  elephant = loadImage ("images/elephant.jpg");
  tiger = loadImage ("images/tiger.jpg");
}

function setup() {
  // put setup code here
  createCanvas (500,500);

  sButton = createButton("Sloth");
  sButton.mousePressed (function(){

    currentImage = 0;
  });


  pButton = createButton("Puppy");
  pButton.mousePressed (function(){

    currentImage = 1;
  });

  dButton = createButton("Dinosaur");
  dButton.mousePressed (function(){

    currentImage = 2;
  });

  bButton = createButton("Bulldogs");
  bButton.mousePressed (function(){

    currentImage = 3;
  });

  eButton = createButton("Elephant");
  eButton.mousePressed (function(){

    currentImage = 4;
  });

  tButton = createButton("Tiger");
  tButton.mousePressed (function(){

    currentImage = 5;
  });

  // need to define the variables before getting to the draw loop so that the variable is actully an image
  curImage = sloth;
  curImage = puppy;
  curImage = dinosaur;
  curImage = elephant;
  curImage = tiger;
  curImage = bulldogs;

}

function draw() {
  background (255);

  console.log("currentImage " + currentImage);
  // put drawing code here
  //Image(variable,x,y,width,height)

  image(curImage,0,0,curImage.width/4,curImage.height/4);

  if (currentImage == 0){
    curImage = sloth;
  }else if(currentImage == 1){
    curImage = puppy;
  }else if(currentImage == 2){
    curImage = dinosaur;
  }else if(currentImage == 3){
    curImage = bulldogs;
  }else if(currentImage == 4){
    curImage = elephant;
  }else if(currentImage == 5){
    curImage = tiger;
  }


//else if statements instead of writing just if statements; it is like writing a paragraph - making it a coherent thought;


}
