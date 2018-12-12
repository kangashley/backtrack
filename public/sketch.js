//Change for wave speed 
var thetaspeed=0.0449;
var LaserSpeedx=0.599;//change the wave speed x
var LaserSpeedy=0.599;//change the wave speed y
var xspeed3 = 1.68; // Speed of the shape
var yspeed3 = 1.68; // Speed of the shape

var rad = 30; // Width of the shape
var w0 = 1300;
var h0 = 600;

//---------------------------------------------
//var xpos, ypos; // Starting position of shape

var y = 100;
var x = 100;
var m = -1;
var n = -1;
var p1;

var h1 = 200;
var w1 = 1300;

//-------------J-----------------------

var xpos2, ypos2;
var xspeed2 = 3; // Speed of the shape
var yspeed2 = 4; // Speed of the shape
var xdirection2 = 2; // Left or Right
var ydirection2 = 2; // Top to Bottom
var h2 = 200;
var w2 = 1300;
var j;

//---------------END OF J-------------

//-------------PANEL 3----------------
var xpos3, ypos3;

var xdirection3 = 3; // Left or Right
var ydirection3 = 3; // Top to Bottom
var h3 = 200;
var w3 = 1300;
var p3;
//--------END OF PANEL 3---------------

//-----------wave stuff------------------
var xspace = 40; // distance between horizontal location
var w; // will be width of wave
var theta = 0.0; // start angle 
var amp = 75.0 // height of wave
var period = 500.0; // Number of pixels before wave repeats
var dx; // will increment x
var yval; // Using array to store height values 

//---------end of wave stuff-------------

function setup(){
  createCanvas(w0, h0);
  stroke(255);     // Set line drawing color to white
  strokeWeight(3);
  frameRate(30);
  p1=createGraphics(w1,h1);
  ellipseMode(RADIUS);
  
  // Set the starting position of the shape
  xpos = (w1 / 2);
  ypos = (h1 / 2);
  xpos2 = (w2 / 2);
  ypos2 = (h2 / 2);
  xpos3 = (w3 / 2);
  ypos3 = (h3 / 2);
	p1 = createGraphics(w1, h1);
 
//--------------------------------
  p2= createGraphics(w2, h2);
	
//--------------------------------
  p3 = createGraphics(w3, h3);
  p3.noStroke();
  
//----------Wave set up stuff--------------
  w = w3 + 16;
  
  dx = (TWO_PI / period) * xspace;
  yval = new Array(floor(w / xspace));

//---------End of wave set up--------------
}

function draw(){  
  background(216,191,216);
  textSize(32);
//	p1.background(255, 120, 120);
 // image(p1,0,0);
	p2.background(221,160,221);
  p3.background(128,0,128);

  //if statements make lasers bounce back if they hit the floor or roof.
   y = y + (LaserSpeedy*m); 
  if (y < 0) { 
    m = m*(-1); 
  } 
  if (y > h1) {
    m = m*(-1);
  }


  line(0, y, w1/2, h1/2); 
  line(w1, y, w1/2, h1/2); 

  line(0, y, w1/2, h1); 
  line(w1, y, w1/2, h1); 

  line(0, y, w1/2, 0); 
  line(w1, y, w1/2, 0); 
  
  
//if statement to make the lines bounce back if they hit the sides
  x = x + (LaserSpeedx*n); //change values for 
  if (x < 0) { 
    n = n*(-1);
  } 
  if (x>w1) {
    n = n*(-1);
  }

  line(0, h1/2, x, 0);
  line(0, h1/2, x, h1);

  line(w1/2, h1/2, x, 0);
  line(w1/2, h1/2, x, h1);

  line(w1, h1/2, x, 0);
  line(w1, h1/2, x, h1);

  //updates position of bouncing ball 
  xpos3 = xpos3 + xspeed3 * xdirection3;
  ypos3 = ypos3 + yspeed3 * ydirection3;
  
  if (xpos3 > w3 - rad || xpos3 < rad) {
    xdirection3 *= -1;
  }
  
  if (ypos3 > h3 - rad || ypos3 < rad) {
    ydirection3 *= -1;
  }
  
  //-------------END P3-------------------------------------

  p3.ellipse(xpos3, ypos3, rad, rad);
  
 // image(p1, 0, 0);
  image(p2, 0, 200);
  image(p3, 0, 400);
  
  //-----------Text Stuff----------------------

  
  text("Danceability: 0.599", 0, 200);
  text("Energy: " + 0.00499, 0, 400);
  text("Valence: " + xspeed3, 0, 600);
  
  //------------End of text stuff--------------
  
  //-----------------PANEL 2------------------
    calcWave();//only function calls . see functions at bottom
    renderWave();
  
    
}

function calcWave(){
  //Increase theta.
  //You can try different values for 
  
  theta += thetaspeed; //changing velocity here for wave
  
  
  //calculate a y value for every x value
  var x = theta;
  for (var i = 0; i < yval.length; i++){
    yval[i] = sin(x) * amp;
    x += dx;
  }
}

function renderWave(){
  fill(255);
  //loop creates waves at each location
  for (var x = 0; x < yval.length; x++){
    ellipse(x * xspace, height / 2 + yval[x], 16, 16); 
  }
}
