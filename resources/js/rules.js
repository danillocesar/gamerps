function classicChoices(){
	//the order does matter
	this.winners = ["rock", "paper", "scissors"];
	this.losers = ["scissors", "rock", "paper"];
	return{
		"winners": winners,
		"losers": losers
	}
}
function advancedChoices(){
	//the order does matter
	this.winners = ["rock", "paper", "scissors", "lizard", "spock", "rock",  "scissors", "lizard", "paper", "spock"];
	this.losers = ["scissors", "rock", "paper", "spock", "scissors", "lizard", "lizard", "paper", "spock", "rock"];
	return{
		"winners": winners,
		"losers": losers
	}
}
//return winner, null if tie
function game(gameMode){
	this.rules = gameMode==1?classicChoices():advancedChoices();
    function compare(choice1, choice2){
        if (choice1 === choice2){ 
        	return null; 
        }
    	var winnersIndex = [];
    	for(var index in this.rules.winners){
    		if (winners[index] === choice1) winnersIndex.push(index);
    	}
    	for(var index in this.rules.losers){
    		if (this.rules.losers[index] === choice2 && winnersIndex.indexOf(index) != -1){
    			return choice1;
    		}
    	}
    	return choice2;
    }
    return {
        'compare': compare,
        'rules': rules,
    };
}