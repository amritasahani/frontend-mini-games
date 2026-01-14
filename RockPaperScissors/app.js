let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let button = document.querySelector(".reset")

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#233D4D";
}
 
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        console.log("you lose");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice = ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else  {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetGame = () => {
    userscore = 0;
    compscore = 0;
    compScorePara.innerText = 0;
    userScorePara.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#233D4D";
}

button.addEventListener("click", resetGame);

    
    