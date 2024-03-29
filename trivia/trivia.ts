// TODO: Add code to check answers to questions
// run script when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  //correct answer
  let correct = document.querySelector(".js-correct") as HTMLElement;
  correct.addEventListener("click", function () {
    correct.style.backgroundColor = "green";
    (document.querySelector(".js-feedback1") as HTMLElement).innerHTML = "Correct!!!";
  });

  //incorrect answer
  let incorrect = document.querySelectorAll(".js-incorrect");
  for (let i = 0; i < incorrect.length; i++) {
    const incorrectButton = incorrect[i] as HTMLElement;
    incorrectButton.addEventListener("click", function () {
        incorrectButton.style.backgroundColor = "crimson";
      (document.querySelector(".js-feedback1") as HTMLElement).innerHTML = "Incorrect :(";
    });
  }

  //free response
  document.querySelector(".js-answer")!.addEventListener("click", function () {
    let input = document.querySelector(".js-input") as HTMLInputElement;
    if (input.value === "Java Script") {
      input.style.backgroundColor = "green";
      (document.querySelector(".js-feedback2") as HTMLElement ).innerHTML = "Correct!!!";
    } else {
      input.style.backgroundColor = "crimson";
      (document.querySelector(".js-feedback2") as HTMLElement ).innerHTML = "Incorrect :(";
    }
  });
});
