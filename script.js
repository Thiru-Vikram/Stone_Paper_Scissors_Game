let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const usrscore = document.querySelector("#user-score");
const cmpscore = document.querySelector("#comp-score");

const playgame = (userchoice) => {
    console.log("user choice: ", userchoice);
    const compchoice = getcompchoice();
    console.log("comp choice: ", compchoice);

    if(userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "stone") {
            //paper, scissor
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            // scissor, stone
            userwin = compchoice == "scissor" ? false : true; 
        } else {
            //stone, paper
            userwin = compchoice == "stone" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
}

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin) {
        userscore++;
        usrscore.innerText = userscore;
        msg.innerText = `You Won!, Your ${userchoice} beats the ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        cmpscore.innerText = compscore;
        msg.innerText = `You lost!, The ${compchoice} has beaten your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawgame = () => {
    msg.innerText = "It's a draw! Play again?";
}

const getcompchoice = () => {
    const options = ["stone", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3)
    return options[idx];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});