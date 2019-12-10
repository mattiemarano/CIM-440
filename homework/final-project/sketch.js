var title;
var instructions1 = "A Virtual Travel Experience";
var instructions2 = "Click on one of the stamps to read about that specific trip";
var frame;
var passportCover;
var stampsPage;


var changeButton; //button to change to the next screen
var learnButton; //button to learn about the pproject
var closeButton; //button to close the passport

var currentImage = 0;


function preload() {
   passportCover = loadImage("photos/passport_cover.jpg")
   stampsPage = loadImage("photos/inside_passport.jpg")
   title = loadImage("photos/wanderlust.png")
}

function setup() {
   // put setup code here
   var cnv = createCanvas(800, 800);
   cnv.id("mycanvas");

   var container0 = createDiv()
   container0.id("container0");
   //To search for an ID you use the # token infront of the name
   //.html() fucntion allows you to allow html (or text) into another html tag
   select("#container0").style("width", "800px");
   //0 refers to the top and bottom spacing;the auto refers to the left and right spacing. this will only work if you set a width
   select("#container0").style("margin", "0 auto");
   //container 0 is now the parent of the div tag and the h1; the container is the parent of the canvas
   cnv.parent("#container0");
   select("body").style("background-color", "white");
   var container1 = createDiv();
   //end of centering the project (passportcover)


   //creating button to change to the next screen
   changeButton = new Clickable(500, 500);
   changeButton.x = 465;
   changeButton.y = 650;
   changeButton.width = 150;
   changeButton.height = 100;
   changeButton.color = "#71c7ec";
   changeButton.stroke = "#71c7ec";
   changeButton.text = "Open Passport";
   changeButton.textColor = 255;
   changeButton.textSize = 15;

   //click to learn more about the project
   learnButton = new Clickable(500, 500);
   learnButton.x = 230;
   learnButton.y = 650;
   learnButton.width = 150;
   learnButton.height = 100;
   learnButton.color = "#71c7ec";
   learnButton.stroke = "#71c7ec";
   learnButton.text = "What is Wanderlust?";
   learnButton.textColor = 255;
   learnButton.textSize = 15;

   //click to close passportCover
   closeButton = new Clickable(500, 500);
   closeButton.x = 700;
   closeButton.y = 750;
   closeButton.width = 100;
   closeButton.height = 50;
   closeButton.color = "#71c7ec";
   closeButton.stroke = "#71c7ec";
   closeButton.text = "Close Passport";
   closeButton.textColor = 255;
   closeButton.textSize = 15;


   //creating canvas for the iframe(html website)
   createCanvas(800, 800);
   frame = createElement("iframe");
   frame.id("frame");
   frame.attribute("src", "https://mattiemarano.github.io/hw/finalProject/index.html")
   frame.attribute("frameborder", "1");
   frame.position(width, 0);
   frame.size(800, 800);
   frame.hide();


   changeButton.onRelease = function() {
      currentImage = 1;
   } //changing background image to the stamp

   learnButton.onRelease = function() {
      alert("Wanderlust is a virtual representation of my travel expereinces over the past four years. This virtual travel diary has allowed me to reminisce on these life changing expereinces, while also sharing them with others. I invite you to click through my passport to read about where i've been, what i've eaten, and my favorite memories abroad over the years. I hope you enjoy the experiences as much as I did, Mattie  Marano");
   } //end of alert

   closeButton.onRelease = function() {
      currentImage = 0;
   } //end of closing passport

} //end of setup


function draw() {
   // put drawing code here
   if (currentImage == 0) {
      background(passportCover);
      frame.hide();
      changeButton.draw();
      learnButton.draw();
      image(title, 175, -50, 450, 200);
      textSize(30);
      fill(255);
      text(instructions1, 410, 130);


   } else if (currentImage == 1) {
      background(stampsPage);
      closeButton.draw();
      textSize(30);
      fill("white");
      text(instructions2, 400, 50);

      noFill();
      ellipse(300, 300, 100, 100); //costaRica
      ellipse(120, 600, 100, 100); //spain
      ellipse(570, 620, 100, 100); //morocco
      ellipse(700, 280, 100, 100); //italy
   }

} //end of draw loop

function mousePressed() {
   if (currentImage == 0) {

   } else if (currentImage == 1) {
      frame.show();

      if (dist(mouseX, mouseY, 300, 300) < 100) {
         frame.attribute("src", "https://mattiemarano.github.io/hw/finalProject/costaRica.html");
      }
      if (dist(mouseX, mouseY, 120, 600) < 100) {
         frame.attribute("src", "https://mattiemarano.github.io/hw/finalProject/spain.html");
      }
      if (dist(mouseX, mouseY, 570, 620) < 100) {
         frame.attribute("src", "https://mattiemarano.github.io/hw/finalProject/morocco.html");
      }
      if (dist(mouseX, mouseY, 700, 280) < 100) {
         frame.attribute("src", "https://mattiemarano.github.io/hw/finalProject/italy.html");
      }

   }
} //end of mousepressed