var adjectives = ["exciting", "clean", "creative", "fun", "you", "cool"];
var counter = 0;
var elem = document.getElementById("adjective");
var time = 2500;

var change = function () {
  elem.innerText = adjectives[counter];
  counter++;
  if (counter >= adjectives.length) {
  counter = 0;
  };
};

setInterval(change, time);
