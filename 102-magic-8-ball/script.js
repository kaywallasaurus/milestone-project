$(document).ready(function() {

$("#answer").hide();

var magic8Ball = {};

magic8Ball.listOfAnswers = ["Yes", "No", "Maybe", "I Don't Know", "Absolutely", "Ask Again Later"];



magic8Ball.askQuestion = function(question) {
  var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberArray);
	var answer = this.listOfAnswers[randomIndex];

	$("#answer").hide();
	$("#answer").fadeIn(3000);
	$("#answer").text( answer );
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

	console.log(question);
	console.log(answer);
};

var onClick = function() {
	$("#8ball").effect("shake");
	setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question");
           magic8Ball.askQuestion(question);
       }, 1000);
};

$("#questionButton").click( onClick );

});
