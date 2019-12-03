var frame;
var passportCover;
var stampsPage;

function preload() {
   passportCover = loadImage("photos/passport_cover.jpg")
   stampsPage = loadImage("photos/inside_passport.jpg")
}

function setup() {
   // put setup code here
   createCanvas(800, 800);
   frame = createElement("iframe");
   frame.id("frame");
   frame.attribute("src", "https://mattiemarano.github.io/hw/finalProject/index.html")
   frame.attribute("frameborder", "1");
   frame.position(width, 0);
   frame.size(570, height);
   frame.show();


}

function draw() {
   // put drawing code here
   background(passportCover);

}

function mousePressed() {
   frame.attribute("src", "https://mattiemarano.github.io/hw/responsive/index.html#popular-destinations")

}