////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove ===computerMove)
    {
        winner='tie';
    }
    else{
        switch(playerMove){
        case 'rock':
            if(computerMove=='paper'){
            winner='computer';
        }
        else if(computerMove=='scissors'){
            winner='player';
        }
        break;
        case 'paper':
            if(computerMove=='rock'){
            winner='player';
        }
        else if(computerMove=='scissors'){
            winner='computer';
        }
        break;
        case 'scissors':
            if(computerMove=='rock'){
            winner='computer';
        }
        else if(computerMove=='paper'){
            winner='player';
        }
        break;

    }

    }
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
   
    var playerWins = 0;
    var computerWins = 0;
    var noofties = 0;
    var playerMove;
    var computerMove;
    var winner;
    var i=1;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    do
    {
        playerMove = getPlayerMove();
        computerMove =getComputerMove();
        console.log(" Player Selects Move : " + playerMove+ " \n Computer selects Move : " + computerMove);

        winner =getWinner(playerMove,computerMove);
        if(winner=="player")
            playerWins +=1;
        else if (winner=="computer")
            computerWins +=1;
        else if(winner=='tie')
            noofties +=1;

       
        console.log(" Winner for round " + i + " is : " + winner);

        console.log("\n total Score after " + i + "rounds ");
        
        console.log("Player Wins : " + playerWins + " \n Computer Wins : " + computerWins + " \n No of Draws : " + noofties+'\n');
        i+=1;
        if(playerWins==5 || computerWins ==5)
            break;
    }while(true);

       return [playerWins, computerWins];
        
    }

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
   
    var playerWins = 0;
    var computerWins = 0;
    var noofties = 0;
    var playerMove;
    var computerMove;
    var winner;
    var i=1;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    do
    {
        playerMove = getPlayerMove();
        computerMove =getComputerMove();
        console.log(" Player Selects Move : " + playerMove+ " \n Computer selects Move : " + computerMove);

        winner =getWinner(playerMove,computerMove);
        if(winner=="player")
            playerWins +=1;
        else if (winner=="computer")
            computerWins +=1;
        else if(winner=='tie')
            noofties +=1;

       
        console.log(" Winner for round " + i + " is : " + winner);

        console.log("\n total Score after " + i + "rounds ");
        
        console.log("Player Wins : " + playerWins + " \n Computer Wins : " + computerWins + " \n No of Draws : " + noofties+'\n');
        i+=1;
        if(playerWins==x || computerWins ==x)
            break;
    }while(true);

       return [playerWins, computerWins];
        
    }

 


