// var display     = document.querySelector("#q-box");

var qNumber = question.getAttribute("data-number");

var problem     = {
    question: document.querySelector(".question").textContent,
    a1      : document.querySelector("#a1").textContent,
    a2      : document.querySelector("#a2").textContent,
    a3      : document.querySelector("#a3").textContent,
    a4      : document.querySelector("#a4").textContent,
}




if(qNumber = "1") {
    problem.question = "What is your favorite color?";
    problem.a1 = "Red";
    problem.a2 = "Orange";
    problem.a3 = "Yellow";
    problem.a4 = "Green";
}