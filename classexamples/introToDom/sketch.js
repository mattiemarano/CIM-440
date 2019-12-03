function setup() {
   var cnv = createCanvas(400, 400);
   cnv.id("mycanvas");

   var container0 = createDiv()
   container0.id("container0");
   //To search for an ID you use the # token infront of the name
   //.html() fucntion allows you to allow html (or text) into another html tag
   select("#container0").html("<h1>Your Sketch Title Here!</h1>");
   //.style is adding css with javascript
   //.style("css property", "value")
   select("#container0").style("width", "400px");
   //0 refers to the top and bottom spacing;the auto refers to the left and right spacing. this will only work if you set a width
   select("#container0").style("margin", "0 auto");
   //container 0 is now the parent of the div tag and the h1; the container is the parent of the canvas
   cnv.parent("#container0");

   select("body").style("background-color", "orange");

   var container1 = createDiv();
   container1.html('<iframe width="560" height="315" src="https://www.youtube.com/embed/m7Bc3pLyij0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
}

function draw() {
   background(0);
}