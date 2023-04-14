"use strict";

const searchBtn = document.querySelector("#searchBtn");
const inputValueField = document.querySelector("#textToSearch");

searchBtn.addEventListener("click", function () {
  window.location.href =
    "https://www.google.com/search?q=" + inputValueField.value;
});

//try
