// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"


function calculate() {
  let inputedAge = document.getElementById("age").value

  if (inputedAge >= 17) {
    document.getElementById("answer").innerHTML = "you can see an R movie alone"
  } else if (inputedAge >= 13) {
    document.getElementById("answer").innerHTML =
      "you can see a PG-13 movie alone"
  } else if (inputedAge >= 5) {
    document.getElementById("answer").innerHTML =
      "you can see a g or PG movie alone"
  } else {
    document.getElementById("answer").innerHTML =
      "your too young for most things"
  }
}