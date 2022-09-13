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

var sDisplay         = document.querySelector(".start-display");
var qDisplay         = document.querySelector(".question-display");
var eDisplay         = document.querySelector(".end-display");

var question         = document.querySelector(".question");
var startQuizBtn     = document.querySelector(".start-quiz-btn");
var a1               = document.querySelector("#a1");
var a2               = document.querySelector("#a2");
var a3               = document.querySelector("#a3");
var a4               = document.querySelector("#a4");
var correct          = document.querySelector("#correct-message");
var incorrect        = document.querySelector("#incorrect-message");
var quizCountdown    = document.querySelector(".timer");
var scoreEl          = document.querySelector("#score");

var currentQuestion;
var secondsRemaining = 59;
var score            = 0;

function timer() {
    var timeInterval = setInterval(function () {
        quizCountdown.textContent = "Time left: " + secondsRemaining;
        secondsRemaining--;
        console.log(secondsRemaining);
    }, 1000)
}

function startQuiz() {
    sDisplay.style.display = "none";
    qDisplay.style.display = "block";
    currentQuestion=0;
    shownQuestion();
    timer();
}

function shownQuestion(){
    question.textContent = questionArr[currentQuestion].prompt;
    a1.textContent = questionArr[currentQuestion].choiceOne;
    a2.textContent = questionArr[currentQuestion].choiceTwo;
    a3.textContent = questionArr[currentQuestion].choiceThree;
    a4.textContent = questionArr[currentQuestion].choiceFour;
}

function checkAnswerAndIterate(event) {
    console.log(event.target.textContent)
    console.log(questionArr[currentQuestion].answer)
    if(event.target.textContent == questionArr[currentQuestion].answer) {
        correct.style.display = "block";
        incorrect.style.display = "none";
        score ++;
    } else {correct.style.display = "none";
            incorrect.style.display = "block";
            secondsRemaining -= 5;
            quizCountdown.textContent = "Time left: " + secondsRemaining;
            }

     currentQuestion++;
    if(currentQuestion < questionArr.length) {
        shownQuestion()
     } else if(currentQuestion >= questionArr.length || secondsRemaining <1) {
        qDisplay.style.display = "none";
        eDisplay.style.display = "flex";
        scoreEl.textContent = "Your score: " + score
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