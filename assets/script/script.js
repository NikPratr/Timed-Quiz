var questionArr = [
    {
        prompt: "What is the capital of the United States?",
        choiceOne: "Olympia",
        choiceTwo: "Washington, D.C.",
        choiceThree: "Providence",
        choiceFour: "Helena",
        answer: "Washington, D.C."
    },
    {
        prompt: "What is the capital of the United Kingdom?",
        choiceOne: "Brighton",
        choiceTwo: "Edinburgh",
        choiceThree: "Cambridge",
        choiceFour: "London",
        answer: "London"
    },
    {
        prompt: "What is the capital of Italy?",
        choiceOne: "Venice",
        choiceTwo: "Milan",
        choiceThree: "Rome",
        choiceFour: "Florence",
        answer: "Rome"
    },
    {
        prompt: "What is the capital of Germany?",
        choiceOne: "Munich",
        choiceTwo: "Cologne",
        choiceThree: "Hamburg",
        choiceFour: "Berlin",
        answer: "Berlin"
    },
    {
        prompt: "What is the capital of Sweden?",
        choiceOne: "Gothenburg",
        choiceTwo: "Visby",
        choiceThree: "Stockholm",
        choiceFour: "Helsingborg",
        answer: "Stockholm"
    },
    {
        prompt: "What is the capital of Poland?",
        choiceOne: "Lubin",
        choiceTwo: "Warsaw",
        choiceThree: "Katowice",
        choiceFour: "Kraków",
        answer: "Warsaw"
    },
    {
        prompt: "What is the capital of Russia?",
        choiceOne: "Saint Petersburg",
        choiceTwo: "Kazan",
        choiceThree: "Moscow",
        choiceFour: "Omsk",
        answer: "Moscow"
    },
    {
        prompt: "What is the capital of China?",
        choiceOne: "Shanghai",
        choiceTwo: "Chengdu",
        choiceThree: "Beijing",
        choiceFour: "Shenzhen",
        answer: "Beijing"
    },
    {
        prompt: "What is the capital of Japan?",
        choiceOne: "Kyoto",
        choiceTwo: "Tokyo",
        choiceThree: "Osaka",
        choiceFour: "Yokohama",
        answer: "Tokyo"
    },
    {
        prompt: "What is the capital of India?",
        choiceOne: "New Delhi",
        choiceTwo: "Mumbai",
        choiceThree: "Agra",
        choiceFour: "Jaipur",
        answer: "New Delhi"
    },
    {
        prompt: "What is the capital of Philippines?",
        choiceOne: "Davao City",
        choiceTwo: "Manila",
        choiceThree: "Cebu City",
        choiceFour: "Angeles",
        answer: "Manila"
    },
    {
        prompt: "What is the capital of Yemen?",
        choiceOne: "Taizz",
        choiceTwo: "Aden",
        choiceThree: "Ibb",
        choiceFour: "Sana'a",
        answer: "Sana'a"
    },
    {
        prompt: "What is the capital of Cambodia?",
        choiceOne: "Krong Kampot",
        choiceTwo: "Preah Sihanouk",
        choiceThree: "Phnom Penh",
        choiceFour: "Banlung",
        answer: "Phnom Penh"
    },
    {
        prompt: "What is the capital of Sudan?",
        choiceOne: "Port Sudan",
        choiceTwo: "Kassala",
        choiceThree: "Omdurman",
        choiceFour: "Khartoum",
        answer: "Khartoum"
    },
    {
        prompt: "What is the capital of Libya?",
        choiceOne: "Tripoli",
        choiceTwo: "Sirte",
        choiceThree: "Benghazi",
        choiceFour: "Khoms",
        answer: "Tripoli"
    }
]

var sDisplay         = document.querySelector(".start-display");
var qDisplay         = document.querySelector(".question-display");
var eDisplay         = document.querySelector(".end-display");
var hDisplay         = document.querySelector(".highscores-display");

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

var submitScore      = document.querySelector(".submit-score");
var scoreList        = document.querySelector("#highscore-list");
var initials         = document.querySelector("#initials");
// var storedScores     = JSON.parse(localStorage.getItem("highscoresArr"));

var currentQuestion;
var secondsRemaining = 59;
var score            = 0;

// if (storedScores !== null) {
//     var highscoresArr = storedScores;
// } else {var highscoresArr = []}

var highscoresArr = [];

if(localStorage.getItem("highscoresArr")){
    highscoresArr = JSON.parse(localStorage.getItem("highscoresArr"))
}


a1.addEventListener("click", checkAnswerAndIterate)
a2.addEventListener("click", checkAnswerAndIterate)
a3.addEventListener("click", checkAnswerAndIterate)
a4.addEventListener("click", checkAnswerAndIterate)
submitScore.addEventListener("click", openHighscores)


function timer() {
    var timeInterval = setInterval(function () {
        quizCountdown.textContent = "Time left: " + secondsRemaining;
        secondsRemaining--;
        // console.log(secondsRemaining);
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
    // console.log(event.target.textContent)
    // console.log(questionArr[currentQuestion].answer)
    if(event.target.textContent == questionArr[currentQuestion].answer) {
        correct.style.display = "block";
        incorrect.style.display = "none";
        score ++;
    } else {correct.style.display = "none";
            incorrect.style.display = "block";
            secondsRemaining -= 10;
            quizCountdown.textContent = "Time left: " + secondsRemaining;
            }

     currentQuestion++;
    if(currentQuestion < questionArr.length) {
        shownQuestion()
     } else if(currentQuestion >= questionArr.length || secondsRemaining <= 0) {
        qDisplay.style.display = "none";
        eDisplay.style.display = "flex";
        scoreEl.textContent = "Your score: " + score
     }
}

startQuizBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    startQuiz();
})

function openHighscores() {
    eDisplay.style.display = "none";
    hDisplay.style.display = "flex";
    var scoreLi = document.createElement("li");

// create quiz results
    
    var quizResults = {
        initials: initials.value,
        score: score
    }

// add results to highscore list and then store as string

    highscoresArr.push(quizResults);
    localStorage.setItem("highscoresArr", JSON.stringify(highscoresArr));

// sort the array by score

    highscoresArr.sort((a, b) => b.score - a.score)

// retrieve the top 5 scores and put them on the board

    for (i=0; i<highscoresArr.length; i++) {
        if(i==5) {
            return
        }
        var newLi = document.createElement("li");

    newLi.textContent = highscoresArr[i].initials + ": " + highscoresArr[i].score;
    scoreList.appendChild(newLi)
}}