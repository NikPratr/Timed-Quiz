// var display     = document.querySelector("#q-box");
var questionArr = [
    {
        prompt: "What is your favorite color?",
        choiceOne: "Red",
        choiceTwo: "Yellow",
        choiceThree: "Green",
        choiceFour: "Blue",
        answer: "Blue"
    },
    {
        prompt: "What is your favorite flavor?",
        choiceOne: "Chocolate",
        choiceTwo: "Vanilla",
        choiceThree: "Strawberry",
        choiceFour: "Orange",
        answer: "Orange"
    },
    {
        prompt: "Why are you?",
        choiceOne: "yes",
        choiceTwo: "gqweood",
        choiceThree: "asd",
        choiceFour: "123",
        answer: "123"
    },
]

var sDisplay     = document.querySelector(".start-display");
var qDisplay     = document.querySelector(".question-display");
var question     = document.querySelector(".question");
var startQuizBtn = document.querySelector(".start-quiz-btn");
var a1           = document.querySelector("#a1");
var a2           = document.querySelector("#a2");
var a3           = document.querySelector("#a3");
var a4           = document.querySelector("#a4");

var currentQuestion;

function changeDisplay() {
    
}

function startQuiz() {
    sDisplay.style.display = "none";
    qDisplay.style.display = "block";
    currentQuestion=0;
    shownQuestion();
    // timerStarts()
}

function shownQuestion(){
    question.textContent = questionArr[currentQuestion].prompt;
    a1.textContent = questionArr[currentQuestion].choiceOne;
    a2.textContent = questionArr[currentQuestion].choiceTwo;
    a3.textContent = questionArr[currentQuestion].choiceThree;
    a4.textContent = questionArr[currentQuestion].choiceFour;
}

function checkAnswerAndIterate(event) {
    //if correct add points maybe
    //if incorrect deduct time, possibly

    currentQuestion++;
    if(currentQuestion< questionArr.length) {
        shownQuestion()
    }
}

//this should happen on button press
startQuizBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    startQuiz();
})

a1.addEventListener("click", checkAnswerAndIterate)
a2.addEventListener("click", checkAnswerAndIterate)
a3.addEventListener("click", checkAnswerAndIterate)
a4.addEventListener("click", checkAnswerAndIterate)