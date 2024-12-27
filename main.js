const initGame = () => {
    let startGame = confirm("Shall we play rock, paper, scissor?");
    startGame? playGame() : alert("Let's play next time");
}

const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === '') {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice){
            invalidChoice();
            continue;
        }
        let computerChoice = getComputerChoice();
        let winner = determineWinner(playerChoice,computerChoice);
        displayResult(winner);
        if (!playAgain()) {
            break;
        }
    }
}

const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissor:"); 
}

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice ==='') {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
}

const invalidChoice = () => {
    return alert("Invalid choice. Try again.");
}

const decidedNotToPlay = () => {
    return alert("I think you've changed your mind. Let's play next time.");
}

const evaluatePlayerChoice = (playerChoice) => {
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissor') {
        return playerChoice;
    } else {
        return false;
    }
}

const getComputerChoice = () => {
    let random = Math.floor(Math.random()*3);
    let arr = ['rock','paper','scissor'];
    return arr[random];
}

const determineWinner = (playerChoice,computerChoice) => {
    const winner = playerChoice===computerChoice
    ? 'Tie Game!' : playerChoice==='rock' && computerChoice==='scissor'
    ? `Player : ${playerChoice}\nComputer : ${computerChoice}\nPlayer wins` : playerChoice==='paper' && computerChoice==='rock'
    ? `Player : ${playerChoice}\nComputer : ${computerChoice}\nPlayer wins` : playerChoice==='scissor' && computerChoice==='paper'
    ? `Player : ${playerChoice}\nComputer : ${computerChoice}\nPlayer wins` : `Player : ${playerChoice}\nComputer : ${computerChoice}\nComputer wins`
    return winner;
}

const displayResult = (winner) => {
    return alert(winner);
}

const playAgain = () => {
    return confirm("wanna play again?");
}

initGame();





