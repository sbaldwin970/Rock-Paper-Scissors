angular.module('rps', []);

var mainController = function($scope) {
	var playArray = ['rock', 'paper', 'scissors']; 
	var computerChoice = playArray[Math.floor(Math.random() * playArray.length)];
	var result = "";

	$scope.rock = function() {
		if(computerChoice === playArray[1]) {
			result = 'You lose';
		}
		else if(computerChoice === playArray[2]) {
			result = 'You win';
		}
		else {
			result = 'Draw';
		}
		console.log(result);
	}
	
	$scope.paper = function() {
		if(computerChoice === playArray[0]) {
			result = 'You win';
		}
		else if(computerChoice === playArray[2]) {
			result = 'You Lose';
		}
		else {
			result = 'Draw';
		}
		console.log(result);
	}
	
	$scope.scissors = function() {
		if(computerChoice === playArray[0]) {
			result = 'You lose';
		}
		else if(computerChoice === playArray[1]) {
			result = 'You win';
		}
		else {
			result = 'Draw';
		}
		console.log(result);
	}

}





	




angular.module('rps')
.controller('mainController', ['$scope', mainController]);