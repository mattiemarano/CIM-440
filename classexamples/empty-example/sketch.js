var button1;
var button2;

function setup() {
   // put setup code here
   createCanvas(400, 400);

   button1 = new hitzoneObject(100, 200, 50, "red");
   button2 = new hitzoneObject(200, 200, 50, "green");
} //end of setup

function draw() {
   // put drawing code here
   background(255);

   button1.display(); //use the . to allow us to use a function from the object
   button1.check();
   console.log("button1 overlay " + button1.overlay);
   button2.display();
   button2.check();
} //end of draw loop


//class is how javascript understands that anything in this snippet of code is plart of the object
//blueprint for a hitzone object
class hitzoneObject {
   constructor(tempX, tempY, tempSize, tempColor) {
      this.x = tempX; //variables inside of the hitzone using the parameters
      this.y = tempY;
      this.boxSize = tempSize;
      this.boxColor = tempColor;
      this.overlay = false;
   } //what we do to construct our object; used for declaring variables used in the object and allowing outside variables/values into the hitzone; the DNA of the hitzone

   display() {
      fill(this.boxColor);
      rect(this.x, this.y, this.boxSize, this.boxSize);
   } //end of display function

   check() {
      if (mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)) {
         //  console.log("over button " + this.boxColor);
         this.overlay = true;
      } else {
         //console.log("off button" + this.boxColor);
         this.overlay = false;
      }
   } //end of check

} //end of hitzoneObject