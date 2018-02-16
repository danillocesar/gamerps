function fadeOpening(){
	setTimeout(function(){
		var el = document.getElementById("div-opening");
		el.classList.remove("visible");
		el.classList.add("hidden");
	}, 1500);
}
function autoMode(gameMode){
	var newGame = game(gameMode);
	var computerChoice1 = newGame.rules.winners[Math.floor(Math.random()*newGame.rules.winners.length)];
	var computerChoice2 = newGame.rules.winners[Math.floor(Math.random()*newGame.rules.winners.length)];
	var result = newGame.compare(computerChoice1, computerChoice2);
	var winnerText = "Computer 1 chose " + computerChoice1 + " and Computer 2 chose " + computerChoice2 + ".<br>";
	if(result != null){
		if(result == computerChoice1){
			winnerText += "Computer 1 Wins!";
		}else{
			winnerText += "Computer 2 Wins!";
		}
		winnerElement(false, winnerText);
	}else{
		winnerText += "It's a tie!";
		winnerElement(true, winnerText);
	}
}
function normalMode(gameMode, playerChoice){
	var newGame = game(gameMode);
	playerChoice = newGame.rules.winners[playerChoice];
	var computerChoice = newGame.rules.winners[Math.floor(Math.random()*newGame.rules.winners.length)];
	var result = newGame.compare(playerChoice, computerChoice);
	
	var winnerText = "The computer chose " + computerChoice + ".<br>";
	if(result != null){
		if(result == computerChoice){
			winnerText += "Computer Wins!";
		}else{
			winnerText += "Player 1 Wins!";
		}
		winnerElement(false, winnerText);
	}else{
		winnerText += "It's a tie!";
		winnerElement(true, winnerText);
	}
	
}
function winnerElement(tie, winner){
	var el = document.getElementById("div-winner");
	if(el)  el.parentElement.removeChild(el);
	
	if(tie){
		//change to tie
		document.body.innerHTML += "<div id='div-winner' class='visible'><img src='resources/imgs/tie.png'/><h4 id='text-winner'>"+ winner +"</h4></div>"
	}else{
		document.body.innerHTML += "<div id='div-winner' class='visible'><img src='resources/imgs/winner.png'/><h4 id='text-winner'>"+ winner +"</h4></div>"
	}
	setTimeout(function(){
		var el = document.getElementById("div-winner");
		el.classList.remove("visible");
		el.classList.add("hidden");
	}, 2500);
}