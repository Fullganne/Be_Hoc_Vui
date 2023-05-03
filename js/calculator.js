let wantedResult = "NO VALUE YET";

const mainContainer = document.getElementById("main-container");
const calculator = document.getElementById("calculator");

const equation = document.getElementById("equation");
const resultContainer = document.getElementById("user-answer");

const correctIndicator = document.getElementById("correct");
const incorrectIndicator = document.getElementById("incorrect");
const scoreIndicator = document.getElementById("score");
var userScore = 0;

/* -------------------- LOGIC -------------------- */
function openCalculator(grade = 1, topic = 1) {
    wantedResult = randomRange(0, 9);
    generateEquation(wantedResult, 2);
    calculator.classList.remove("calculator-hide");
}

function generateEquation(wantedFinalResult, amount = 3, complexity = 5) {
    // amount = randomRange(1,4);
    resultContainer.innerHTML = "?";

    //SHOULD NOT USE EVAL DUE TO BEING EXPOSED TO HIGH PROBABILITY OF SECURITY BREACH

    equation.innerHTML = reverseCalculate(wantedFinalResult, randomRange(1,100), amount, complexity) + " = ";
    // resultContainer.innerHTML = wantedFinalResult;
}

function reverseCalculate(orgNum, newNum, amount, complexity) { //A recursive function to generate equations from a chosen Num
    if (amount == 0) {
        return orgNum;
    }
    
    if (newNum >= orgNum) {
        return reverseCalculate(newNum, randomRange(1,100), --amount, complexity) + ` - ${newNum - orgNum}`;
    }

    if (newNum < orgNum) {
        return reverseCalculate(newNum, randomRange(1,100), --amount, complexity) + ` + ${orgNum - newNum}`;
    }
}


function userSubmit(value) {
    if (value == "restart") {
        userScore = 0;
        scoreIndicator.innerHTML = `${userScore}/10`;
        
        scoreIndicator.classList.add("active");
        setTimeout(() => {
            scoreIndicator.classList.remove("active");
            AllTopics('show');
        }, 750);
        
        topics.forEach((topic) => {
            topic.classList.remove("learned");
            topic.removeAttribute("disabled");
        });

        return;
    }

    if (value == wantedResult) {
        correctIndicator.classList.add("active");
        setTimeout(() => {
            correctIndicator.classList.remove("active");
            AllTopics('show');
        }, 750);
        resultContainer.innerHTML = wantedResult;

        userScore += 1;
        scoreIndicator.innerHTML = `${userScore}/10`;

        return;
    }


    incorrectIndicator.classList.add("active");
    setTimeout(() => {
        incorrectIndicator.classList.remove("active");
        AllTopics('show');
    }, 750);

    resultContainer.innerHTML = wantedResult;
    return;
}

setTimeout(() => {
    document.getElementById("calculator").scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}, 1000);