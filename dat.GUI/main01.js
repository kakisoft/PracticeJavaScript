'use strict';

var myBox;

function MyBox() {
  this.w = 100;
  this.h = 100;
  this.d = 100;
}

function setup() {
  var gui;

  createCanvas(400, 300, WEBGL);
  myBox = new MyBox();
  gui = new dat.GUI();
  // gui.add(myBox, 'w').step(10);
  // gui.add(myBox, 'w').step(10).max(200);
  // gui.add(myBox, 'w').step(10).max(200).min(50);
  gui.add(myBox, 'w', 50, 200, 10);
  gui.add(myBox, 'h', [100, 200, 300]);
  gui.add(myBox, 'd', {small: 100, medium: 200, large: 300});
}

function draw() {
  background(180);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  noFill();
  stroke(255);
  box(myBox.w, myBox.h, myBox.d);
}