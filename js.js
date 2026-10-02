let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

const updateScoreboard = () => {
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
};

const drawGame = () => {
    msg.textContent = "It's a draw!";
    msg.style.color = "#f59e0b";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        msg.textContent = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.color = "#16a34a";
    } else {
        computerScore++;
        msg.textContent = `Computer wins! ${computerChoice} beats ${userChoice}`;
        msg.style.color = "#dc2626";
    }

    updateScoreboard();
};

const playGame = (userChoice) => {
    const computerChoice = generateComputerChoice();

    if (userChoice === computerChoice) {
        drawGame();
        return;
    }

    const winningPairs = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    const userWins = winningPairs[userChoice] === computerChoice;
    showWinner(userWins, userChoice, computerChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        playGame(choice.id);
    });
});

updateScoreboard();