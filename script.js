let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
    console.log("choice was clicked", userchoice);
  });
});

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

function playgame(userchoice) {
  console.log("user choice = ", userchoice);
  const compChoice = getCompChoice();
  console.log("comp choice = ", compChoice);
  if (userchoice === compChoice) {
    drawgame();
  } else {
    userwin = true;
    if (userchoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compChoice === "scissors" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoice,compChoice);
  }
}

let showwinner = (userwin,userchoice,compChoice) => {
    if (userwin) {
        userscore++;
        userScorePara.innerText = userscore
    console.log("You Win!!!!");
    msgid.innerText = `You win your ${userchoice} beats ${compChoice}`;
    msgid.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
    console.log("You Loose");
    msgid.innerText = `You loose  ${compChoice} beats your ${compChoice}`;
    msgid.style.backgroundColor = "red";
  }
};

const drawgame = () => {
  console.log("Game was Drawd");
  msgid.innerText = "Game was Drawww !! play againn";
  msgid.style.backgroundColor = "purple";
};

const msgid = document.querySelector("#msg");
console.log(msgid);

compselectid = document.querySelector(".compmsg");
console.log(compselectid);