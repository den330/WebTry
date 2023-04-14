"use strict";

const searchBtn = document.querySelector("#searchBtn");
const inputValueField = document.querySelector("#textToSearch");

searchBtn.addEventListener("click", function () {
  //   window.open("https://www.google.com/search?q=" + inputValueField.value);
  window.location.href =
    "https://www.google.com/search?q=" + inputValueField.value;
});

const den = {
  name: "yaxin",
};

const den2 = Object.create(den);

console.log(den2);

// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
const logDairy = function () {
  for (const item of dairy) {
    console.log(item);
  }
};
logDairy();
// Task 2

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

const birdCan = function () {
  for (const key of Object.keys(bird)) {
    console.log(`${key} : ${bird[key]}`);
  }
};

birdCan();

// Task 3
const animalCan = function () {
  for (const key in bird) {
    console.log(`${key} : ${bird[key]}`);
  }
};

animalCan();
