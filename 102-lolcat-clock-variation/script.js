var clock = document.getElementById('clock');
var lolCat = document.getElementById('lolcat');
var messagePlace = document.getElementById('timeEvent');
var messageText;
var time = new Date().getHours();
var image;
var noon = 12;
var evening = 18;
var wakeupTime = 7;
var lunchTime = 12;
var napTime = 18;
var partyTime = 19;
var isPartyTime = false;
var partyTimeButton = document.getElementById('partyTimeButton');
var wakeupTimeSelector = document.getElementById('wakeupTimeSelector');
var lunchTimeSelector = document.getElementById('lunchTimeSelector');
var napTimeSelector = document.getElementById('napTimeSelector');

//messages & images
var updateClock = function () {
  if (time == wakeupTime) {
    image = "https://i.pinimg.com/originals/9f/36/a8/9f36a8ca1608f4b27c0b556dc796463a.jpg";
    messageText = "IZ TIME TO WAKE UP!";
  } else if (time == lunchTime) {
    image = "http://www.daws.org/wp-content/uploads/2017/07/Cat-eating-Square.png";
    messageText = "NOM NOM NOM LUNCH!";
  } else if (time == napTime) {
    image = "https://i.pinimg.com/originals/62/39/56/62395609d765edaac0ea6796ba543d88.jpg";
    messageText = "IZ SLEEP TIME!";
  } else if (time == partyTime) {
    image = "https://cdn.shopify.com/s/files/1/1004/0476/files/Party-Cat-1000_large.jpg?v=1510504567";
    messageText = "YASSS! IZ TIME TO PARTEE!";
  } else if (time < noon) {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg";
    messageText = "Good Morning!";
  } else if (time > evening) {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg";
    messageText = "Good Evening!";
  } else {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg";
    messageText = "Good Afternoon!";
  };

  lolCat.src = image;
  messagePlace.innerText = messageText;

  showTime();
};

//clock function
var showTime = function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  if (time >= noon) {
    meridian = "PM";
  };
  if (hours > noon) {
    hours = hours - 12;
  };
  if (minutes < 10) {
    minutes = "0" + minutes;
  };
  if (seconds < 10) {
    seconds = "0" + seconds;
  };

  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

  clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

//partyTimeButton
var partyEvent = function () {
  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "Party Over";
    partyTimeButton.style.backgroundColor = "#ffffff";
    partyTimeButton.style.color = "#222222";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "Party Time!";
    partyTimeButton.style.backgroundColor = "#222222";
    partyTimeButton.style.color = "#ffffff";
  };
};

partyTimeButton.addEventListener("click", partyEvent);

//selectors
var wakeupEvent = function () {
  wakeupTime = wakeupTimeSelector.value;
};

var lunchEvent = function () {
  lunchTime = lunchTimeSelector.value;
};

var napEvent = function () {
  napTime = napTimeSelector.value;
};

wakeupTimeSelector.addEventListener("change", wakeupEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
