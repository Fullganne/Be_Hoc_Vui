const topics = document.querySelectorAll(".topic-item");

topics.forEach((ele) => {
    ele.addEventListener("click", () => {
        ele.classList.add("learned");
        AllTopics("hidden");
        openCalculator(ele.getAttribute("topic")); //White the corresponding topic
    })
});

function AllTopics(state) {
    if (state == "show") {
        topics.forEach(topic => {
            topic.classList.remove("went-off");
            console.log("show");
        })
    }

    if (state == "hidden") {
        topics.forEach(topic => {
            topic.classList.add("went-off");
            topic.classList.remove("ông-già");
        })
    }

    return;
};





const mainContainer = document.getElementById("main-container");
const calculator = document.getElementById("calculator");

const equation = document.getElementById("equation");
const finalResult = document.getElementById("user-answer");

const correctIndicator = document.getElementById("correct");
const incorrectIndicator = document.getElementById("incorrect");

/* -------------------- LOGIC -------------------- */
const operatorList = ["+", "-", "*", "/"];

let wantedResult = randomRange(0, 9);


finalResult.innerHTML = wantedResult;

function openCalculator(grade = 1) {
    generateEquation(wantedResult);
}

function generateEquation(wantedFinalResult, complexity=5) {
    let amount = randomRange(1,4);
    let finalNum = wantedFinalResult;

    //SHOULD NOT USE EVAL DUE TO BEING EXPOSED TO HIGH PROBABILITY OF SECURITY BREACH

    reverseCalculate(finalNum, randomRange(1,100), amount, complexity);
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
console.log(reverseCalculate(5, 10, 4, 5));


function userSubmit(value) {
    if (value == wantedResult) {
        correctIndicator.classList.add("active");
        setTimeout(() => {
            correctIndicator.classList.remove("active")} 
        , 1500);
        return;
    }


    incorrectIndicator.classList.add("active");
    setTimeout(() => {
        incorrectIndicator.classList.remove("active")} 
    , 1500);
    return;
}

setTimeout(() => {
    document.getElementById("calculator").scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}, 1000);