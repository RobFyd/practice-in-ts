"use strict";
// TODO: Add code to check answers to questions
// run script when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    //correct answer
    let correct = document.querySelector(".js-correct");
    correct.addEventListener("click", function () {
        correct.style.backgroundColor = "green";
        document.querySelector(".js-feedback1").innerHTML = "Correct!!!";
    });
    //incorrect answer
    let incorrect = document.querySelectorAll(".js-incorrect");
    for (let i = 0; i < incorrect.length; i++) {
        incorrect[i].addEventListener("click", function () {
            incorrect[i].style.backgroundColor = "crimson";
            document.querySelector(".js-feedback1").innerHTML = "Incorrect :(";
        });
    }
    //free response
    document.querySelector(".js-answer").addEventListener("click", function () {
        let input = document.querySelector(".js-input");
        if (input.value === "Java Script") {
            input.style.backgroundColor = "green";
            document.querySelector(".js-feedback2").innerHTML = "Correct!!!";
        }
        else {
            input.style.backgroundColor = "crimson";
            document.querySelector(".js-feedback2").innerHTML = "Incorrect :(";
        }
    });
});
