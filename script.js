var adjectives = ["exciting", "clean", "creative", "fun", "you", "cool"];
var counter = 0;
var elem = document.getElementById("adjective");
var time = 2000;

//updating adjectives on front page
var change = function () {
  elem.innerText = adjectives[counter];
  counter++;
  if (counter >= adjectives.length) {
  counter = 0;
  };
};

setInterval(change, time);

//nav bar events
var nav = document.getElementById("nav");

var navEffect = function () {
  nav.style.backgroundColor = "#000000";
  nav.style.color = "#ffffff";
};

nav.addEventListener("onmouseover", navEffect);
