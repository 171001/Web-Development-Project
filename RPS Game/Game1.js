let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
};

const drawGame = () => {
    drawScore++;
    drawScorePara.innerText = drawScore;
    msg.innerText = "IT'S A DRAW. PLAY AGAIN";
    msg.style.backgroundColor = "darkblue";
    msg.style.color = "aqua";
}

const ShowWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "black";
        msg.style.color = "yellow";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE!! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
    }
}

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        ShowWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});