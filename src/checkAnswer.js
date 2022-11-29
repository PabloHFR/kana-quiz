import { toHiragana, toKatakana } from "wanakana";

let quizBoxInputElementsArray = [];

export function getQuizBoxInputsEvents() {
  quizBoxInputElementsArray = document.querySelectorAll(".quiz-box-input");

  quizBoxInputElementsArray.forEach((inputElement) => {
    inputElement.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === "Tab") {
        checkAnswer(inputElement);
      }
    });
  });
}

function checkAnswer(inputElement) {
  if (
    toHiragana(inputElement.value) ===
    inputElement.parentElement.children[0].textContent
  ) {
    inputElement.parentElement.classList.remove("wrong");
    inputElement.parentElement.classList.add("correct");
  } else {
    inputElement.parentElement.classList.add("wrong");
    inputElement.parentElement.classList.remove("correct");
  }
}
