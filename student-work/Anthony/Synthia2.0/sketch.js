'use strict';

let whaleOne;
let buttonOne;
let whaleTwo;
let buttonTwo;
let whaleThree;
let buttonThree;
let whaleFour;
let buttonFour;

let pNoise;
let playing;


function setup() {
  createCanvas(windowWidth, windowHeight);

  whaleOne = new p5.Oscillator('sine');
  whaleOne.setType();
  whaleOne.freq(250);
  whaleOne.amp(0.5);

  buttonOne = createButton('Momma Whale  on/off')
    buttonOne.mousePressed(toggleWhaleOne);
    buttonOne.position(100, 500);

  whaleTwo = new p5.Oscillator('sine');
  whaleTwo.setType();
  whaleTwo.freq(500);
  whaleTwo.amp(0.5);

  buttonTwo = createButton('Baby Whale  on/off')
    buttonTwo.mousePressed(toggleWhaleTwo);
    buttonTwo.position(200, 200);

  whaleThree = new p5.Oscillator('sine');
  whaleThree.setType();
  whaleThree.freq(500);
  whaleThree.amp(0.5);

  buttonThree = createButton('Papa Whale  on/off')
    buttonThree.mousePressed(toggleWhaleThree);
    buttonThree.position(400, 300);

  whaleFour = new p5.Oscillator('sine');
  whaleFour.setType();
  whaleFour.freq(500);
  whaleFour.amp(0.5);

  buttonFour = createButton('Uncle Whale  on/off')
    buttonFour.mousePressed(toggleWhaleFour);
    buttonFour.position(500, 100);

}

function draw() {
  background(9, 198, 211);

  drawBubble1();
  drawBubble2();
  drawBubble3();
  drawBubble4();

  pNoise = noise(frameCount / 20) * 100;

whaleOne.freq((40, 250) + pNoise);
  whaleOne.amp(sin(frameCount / 90), -1, 1, .05, .1);
whaleTwo.freq((40, 550) + pNoise);
  whaleTwo.amp(sin(frameCount / 100), -1, 1, .05, .1);
whaleThree.freq((0, 50) + pNoise);
  whaleThree.amp(sin(frameCount / 80), -1, 1, .05, .1);
whaleFour.freq((20, 380) + pNoise);
  whaleFour.amp(sin(frameCount / 100), -1, 1, .05, .1);
}

function drawBubble1(){
  noStroke();
   fill(139, 222, 247)
   circle(600, 100, 60);

   fill(205, 250, 250)
   circle(607, 100, 15);
}
function drawBubble2(){
  noStroke();
   fill(139, 222, 247)
   circle(200, 200, 60);

   fill(205, 250, 250)
   circle(207, 200, 15);
}
function drawBubble3(){
  noStroke();
   fill(139, 222, 247)
   circle(400, 300, 60);

   fill(205, 250, 250)
   circle(407, 300, 15);
}
function drawBubble4(){
  noStroke();
   fill(139, 222, 247)
   circle(100, 500, 60);

   fill(205, 250, 250)
   circle(107, 500, 15);
}

function toggleWhaleOne(){
  if (!playing) {
    whaleOne.start();
    playing = true;

  } else {
    whaleOne.stop();
    playing = false;
  }
}
function toggleWhaleTwo(){
  if (!playing) {
    whaleTwo.start();
    playing = true;

  } else {
    whaleTwo.stop();
    playing = false;
  }
}
function toggleWhaleThree(){
  if (!playing) {
    whaleThree.start();
    playing = true;

  } else {
    whaleThree.stop();
    playing = false;
  }
}
function toggleWhaleFour(){
  if (!playing) {
    whaleFour.start();
    playing = true;

  } else {
    whaleFour.stop();
    playing = false;
  }
}
