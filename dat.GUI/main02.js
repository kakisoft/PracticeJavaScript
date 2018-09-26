'use strict';

var myBox;

function MyBox() {
  this.w = 100;
  this.h = 100;
  this.d = 100;
  this.strokeColor = '#ffffff';
  this.fillColor = [0, 0, 0];
  this.hasBorder = true;
}

function setup() {
  var gui;
  var sizeFolder;

  createCanvas(400, 300, WEBGL);
  myBox = new MyBox();
  gui = new dat.GUI();
  sizeFolder = gui.addFolder('Size');
  sizeFolder.add(myBox, 'w', 50, 200);
  sizeFolder.add(myBox, 'h', 50, 200);
  sizeFolder.add(myBox, 'd', 50, 200);
  gui.addColor(myBox, 'strokeColor');
  gui.addColor(myBox, 'fillColor');
  gui.add(myBox, 'hasBorder');
  sizeFolder.open();
}

function draw() {
  background(180);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  if (myBox.hasBorder) {
    stroke(myBox.strokeColor);
  } else {
    noStroke();
  }
  fill(myBox.fillColor);
  box(myBox.w, myBox.h, myBox.d);
}