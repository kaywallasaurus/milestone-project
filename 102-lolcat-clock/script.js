var lolcat = document.getElementById("lolcat");
var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18;
var wakeUpTime = 8;
var lunchTime = 12;
var partyTime = 17;
var napTime = 15;
var image;
var timeEventJS = document.getElementById('timeEvent');
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function()
{
  if (time == partyTime){
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
      messageText = "IZ PARTEE TIME!!";
  } else if (time == napTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText = "IZ NAP TIME...";
  } else if (time == lunchTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "IZ NOM NOM NOM TIME!!";
  } else if (time == wakeUpTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
      messageText = "IZ TIME TO GETTUP.";
  } else if (time < noon) {
      messageText = "Good morning!";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  } else if (time > evening) {
      messageText = "Good Evening!";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  } else {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
      messageText = "Good afternoon!";
  }

  timeEventJS.innerText = messageText;
  lolcat.src = image;

  showCurrentTime();
};

//clock function
var showCurrentTime = function()
{
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Party Over";
      partyTimeButton.style.backgroundColor = "#0a8dab";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "Party Time!";
      partyTimeButton.style.backgroundColor = "#222";
   }
};

partyTimeButton.addEventListener("click", partyEvent);

var wakeUpEvent = function () {
	wakeupTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var lunchEvent = function () {
	lunchTime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener('change', lunchEvent);

var napTimeEvent = function () {
	napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napTimeEvent);
