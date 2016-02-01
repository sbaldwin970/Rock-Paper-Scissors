angular.module('rps', []);

var mainController = function($scope) {
	var playArray = ['rock', 'paper', 'scissors']; 
	var computerChoice = playArray[Math.floor(Math.random() * playArray.length)];
	var result = "";

	var choseRock = function() {
		if(computerChoice === playArray[1]) {
			result = 'You lose!';
		}
		else if(computerChoice === playArray[2]) {
			result = 'you win!';
		}
		else {
			result = 'Draw!';
		}
		return result;
	};
	var chosePaper = function() {
		if(computerChoice === playArray[0]) {
			result = 'You win!';
		}
		else if(computerChoice === playArray[2]) {
			result = 'you lose!';
		}
		else {
			result = 'Draw!';
		}
		return result;
	};
	var choseScissors = function() {
		if(computerChoice === playArray[0]) {
			result = 'You lose!';
		}
		else if(computerChoice === playArray[1]) {
			result = 'you win!';
		}
		else {
			result = 'Draw!';
		}
		return result;
	};
	$scope.showrock = function() {
		$scope.rockResult = choseRock($scope.rock);
	};
	$scope.showpaper = function() {
		$scope.paperResult = chosePaper($scope.paper);
	};
	$scope.showscissors = function() {
		$scope.scissorsResult = choseScissors($scope.scissors);
	};
};

angular.module('rps')
.controller('mainController', ['$scope', mainController]);