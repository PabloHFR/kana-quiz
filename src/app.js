import { toHiragana, toKatakana } from "wanakana";
import { allKanaObject } from "./data";

// ******* Selectors *******
const kanaColumnButtonElements = document.querySelectorAll(".column-button");
const selectAllButtonElements = document.querySelectorAll(".select-all-button");
const mainColumnKanaButtonElements = document.querySelectorAll(".main-column");
const dakutenColumnKanaButtonElements =
  document.querySelectorAll(".dakuten-column");
const combinationColumnKanaButtonElements = document.querySelectorAll(
  ".combination-column"
);

const hiraganaOptionButtonElement = document.querySelector(
  ".hiragana-option-button"
);
const katakanaOptionButtonElement = document.querySelector(
  ".katakana-option-button"
);
const startQuizButtonElement = document.querySelector(".start-quiz-button");

const quizBoxesListElement = document.querySelector(".quiz-boxes-list");

// ******* Variables *******
let selectedKanasArray = [];

// ******* Functions *******
// Function for getting an array of user selected kana columns
function getSelectedKanas() {
  kanaColumnButtonElements.forEach((checkedColumn) => {
    if (checkedColumn.classList.contains("checked-column")) {
      selectedKanasArray.push(allKanaObject[`${checkedColumn.dataset.column}`]);
    }
  });
  selectedKanasArray = selectedKanasArray.flat();
  console.log(selectedKanasArray);
}

// Function for generating markup for individual quiz-boxes
function generateMarkup(kana) {
  return `
    <li class="quiz-box">
      <label class="quiz-box-label">${toHiragana(kana)}</label>
        <input
          class="quiz-box-input"
          type="text"
          maxlength="3"
          minlength="1"
        />
    </li>
  `;
}

// Function for inserting quiz-boxes of selected kanas in list element
function displayQuizBoxes() {
  getSelectedKanas();
  selectedKanasArray.forEach((kana) => {
    quizBoxesListElement.insertAdjacentHTML("beforeend", generateMarkup(kana));
  });
}

// ******* Event Listeners *******

// Select all buttons logic for adding checked styles in all buttons from that column
selectAllButtonElements.forEach((selectAllButton) => {
  selectAllButton.addEventListener("click", function (e) {
    const selectedColumn = e.target.nextElementSibling.children[0].classList[0];

    if (selectedColumn === "main-column") {
      e.target.classList.toggle("checked-all");
      mainColumnKanaButtonElements.forEach((button) => {
        button.classList.toggle("checked-column");
      });
    }

    if (selectedColumn === "dakuten-column") {
      e.target.classList.toggle("checked-all");
      dakutenColumnKanaButtonElements.forEach((button) => {
        button.classList.toggle("checked-column");
      });
    }

    if (selectedColumn === "combination-column") {
      e.target.classList.toggle("checked-all");
      combinationColumnKanaButtonElements.forEach((button) => {
        button.classList.toggle("checked-column");
      });
    }
  });
});

// Add checked button style for kana columns buttons
kanaColumnButtonElements.forEach((kanaColumnButton) => {
  kanaColumnButton.addEventListener("click", function () {
    kanaColumnButton.classList.toggle("checked-column");
  });
});

// Select between Hiragana and Katakana Buttons
hiraganaOptionButtonElement.addEventListener("click", function () {
  hiraganaOptionButtonElement.classList.add("checked-kana");
  katakanaOptionButtonElement.classList.remove("checked-kana");
});

katakanaOptionButtonElement.addEventListener("click", function () {
  katakanaOptionButtonElement.classList.add("checked-kana");
  hiraganaOptionButtonElement.classList.remove("checked-kana");
});

// Start Quiz Button
startQuizButtonElement.addEventListener("click", displayQuizBoxes);
