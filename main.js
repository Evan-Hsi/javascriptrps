function computerPlay() {
    var call = Math.floor(Math.random() * 3);
    if call == 0 {
        return "PAPER"
    }
    if call == 1 {
        return "SCISSORS"
    }
    if call == 2 {
        return "ROCK"
    }
}

function playRound(playerSelection, computerSelection) {
    var p = playerSelection.toLowerCase();
    var c = computerSelection.toLowerCase();
    var win;
    if p == "rock" {
        if c == "rock" {
            win = 0
        }
        if c == "scissors" {
            win = 1
        }
        if c == "paper" {
            win = 2
        }
    }
    if p == "paper" {
        if c == "paper" {
            win = 0
        }
        if c == "rock" {
            win = 1
        }
        if c == "scissors" {
            win = 2
        }
    }
    if p == "scissors" {
        if c == "scissors" {
            win = 0
        }
        if c == "paper" {
            win = 1
        }
        if c == "rock" {
            win = 2
        }
    }
    if (win == 0) {
        console.log("It's a draw!  " + c + " doesn't beat " + p)
    }
    if(win == 1) {
        console.log("You Win!  " + p " beats " + c)
    }
    if(win == 2) {
        console.log("You Lose!  " + p + " loses to " + c)
    }
    return win;
    
}

function game() {
    var ccall;
    var pcall;
    var cscore = 0;
    var pscore = 0;
    var i;
    for( i = 0; i < 5; i++ ) {
        ccall = computerPlay()
        pcall = prompt()
        var result = playRound(ccall, pcall);
        if (result == 1)
            ++pscore
        if (result == 2)
            ++csore
    }
    if (pscore > cscore){
        return "Player wins"
    }
    if (pscore < csore){
        return "Computer wins"
    }
    return "draw"
}
game();
