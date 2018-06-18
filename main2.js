const computerPlay = () => {
    var call = Math.floor(Math.random()*3)
    switch (call) {
        case 0:
            //document.getElementById('test').innerHTML = 'Rock'
            return 'Rock'
            break;
        case 1:
            //document.getElementById('test').innerHTML = 'Paper'
            return 'Paper'
            break;
        case 2:
            //document.getElementById('test').innerHTML = 'Scissors'
            return 'Scissors'
            break;
        default:
            //document.getElementById('test').innerHTML = 'It Broke'
            return 'Broken'
            break;
    }
}

const playRound = () => {
    let c = computerPlay().toLowerCase();
    let p = prompt('call a sign').toLowerCase();
    console.log('you threw ' + p);
    console.log('the computer threw ' + c);
    switch (p) {
        case 'rock':
            switch(c) {
                case 'rock':
                    return 'tie'
                    break;
                case 'paper':
                    return 'lose'
                    break;
                case 'scissors':
                    return 'win'
                    break;
                default:
                    return 'something broke'
                    break;
            }
        case 'paper':
            switch(c) {
            case 'rock':
                return 'win'
                break;
            case 'paper':
                return 'tie'
                break;
            case 'scissors':
                return 'lose'
                break;
            default:
                return 'something broke'
                break;
            }
        case 'scissors':
            switch(c) {
                case 'rock':
                    return 'lose'
                    break;
                case 'paper':
                    return 'win'
                    break;
                case 'scissors':
                    return 'tie'
                    break;
                default:
                    return 'something broke'
                    break;
            }
        default:
            return 'invalid call'
            break;
    }
}

const game = () => {
    let pscore = 0;
    let cscore = 0;
    var i;
    
    for(i = 0; i < 5; i++){
        let out = playRound();
        console.log(out);
        switch (out) {
            case 'win':
                pscore++;
                break;
            case 'lose':
                cscore++;
                break;
            default:
                break;
        }
        console.log(pscore + ' - ' + cscore)
    }
    
    let res =  winner([pscore,cscore]);
    console.log(res);
    return res;
}

const winner = ([a,b]) => {
    if(a > b){
        return 'you win'
    }
    else if(a<b){
        return 'you lose'
    }
    else{
        return 'tie'
    }
}
