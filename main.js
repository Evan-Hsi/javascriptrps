function test() {
    document.getElementById("help").innerHTML = "I know how Javascript Works!";
}

function computerPlay() {
    var call = Math.floor(Math.random() * 3);
    if(call === 0){
        //document.getElementById("help").innerHTML = "Paper";
        return "PAPER"
    }
    if(call === 1){
        //document.getElementById("help").innerHTML = "Scissors";
        return "SCISSORS"
    }
    if(call === 2){
        //document.getElementById("help").innerHTML = "Rock";
        return "ROCK"
    }
}
function playRound(playerSelection, computerSelection) {
    var p = playerSelection.toLowerCase();
    var c = computerSelection.toLowerCase();
    var win;
    if(p === "rock"){
        if(c === "rock"){
            win = 0
        }
        if(c === "scissors"){
            win = 1
        }
        if(c === "paper"){
            win = 2
        }
    }
    if(p === "paper"){
        if(c === "paper"){
            win = 0
        }
        if(c === "rock"){
            win = 1
        }
        if(c === "scissors"){
            win = 2
        }
    }
    if(p === "scissors"){
        if(c === "scissors"){
            win = 0
        }
        if(c === "paper"){
            win = 1
        }
        if(c === "rock"){
            win = 2
        }
    }
    if (win === 0) {
        document.getElementById("help").innerHTML = ("It's a draw!  " + c + " doesn't beat " + p);
    }
    if(win === 1) {
        document.getElementById("help").innerHTML = "You Win!";
    }
    if(win === 2) {
        document.getElementById("help").innerHTML = ("You Lose!  " + p + " loses to " + c);
    }
    return win;
    
}

