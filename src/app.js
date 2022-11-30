import { toHiragana, toKatakana } from "wanakana";
import { allKanaObject } from "./data";
import { shuffleArray } from "./shuffle";
import { getQuizBoxInputsEvents } from "./checkAnswer";

// ******* Selectors *******
let kanaColumnButtonElements;
let selectAllButtonElements;
let mainColumnKanaButtonElements;
let dakutenColumnKanaButtonElements;
let combinationColumnKanaButtonElements;

let hiraganaOptionButtonElement;
let katakanaOptionButtonElement;
let startQuizButtonElement;
const mainHtmlElement = document.querySelector(".main");

const quizBoxesListElement = document.querySelector(".quiz-boxes-list");

// ******* Variables *******
let selectedKanasArray = [];

displayHomePage();

// ******* Functions *******
// Function for getting an array of user selected kana columns
function getSelectedKanas() {
  kanaColumnButtonElements = document.querySelectorAll(".column-button");
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

// Function for inserting quiz-boxes of shuffled selected kanas in list element
function displayQuizBoxes() {
  getSelectedKanas();
  shuffleArray(selectedKanasArray);
  selectedKanasArray.forEach((kana) => {
    quizBoxesListElement.insertAdjacentHTML("beforeend", generateMarkup(kana));
  });
  getQuizBoxInputsEvents();
}

function displayHomePage() {
  const markup = `
      <section class="select-box-section">
        <div class="kana-option-buttons">
          <button class="hiragana-option-button checked-kana">
            Pratique Hiragana
          </button>
          <button class="katakana-option-button">Pratique Katakana</button>
        </div>
        <div class="kana-column-options">
          <div>
            <h2 class="column-option-title">Kana Principal</h2>
            <button class="select-all-button">Selecionar Todos</button>
            <div class="column-options-grid">
              <button class="main-column column-button" data-column="a">
              ${toHiragana("a")}/a
              </button>
              <button class="main-column column-button" data-column="ka">
              ${toHiragana("ka")}/ka
              </button>
              <button class="main-column column-button" data-column="sa">
              ${toHiragana("sa")}/sa
              </button>
              <button class="main-column column-button" data-column="ta">
              ${toHiragana("ta")}/ta
              </button>
              <button class="main-column column-button" data-column="na">
              ${toHiragana("na")}/na
              </button>
              <button class="main-column column-button" data-column="ha">
              ${toHiragana("ha")}/ha
              </button>
              <button class="main-column column-button" data-column="ma">
              ${toHiragana("ma")}/ma
              </button>
              <button class="main-column column-button" data-column="ya">
              ${toHiragana("ya")}/ya
              </button>
              <button class="main-column column-button" data-column="ra">
              ${toHiragana("ra")}/ra
              </button>
              <button class="main-column column-button" data-column="wa">
              ${toHiragana("wa")}/wa
              </button>
            </div>
          </div>
          <div>
            <h2 class="column-option-title">Kana Dakuten</h2>
            <button class="select-all-button">Selecionar Todos</button>
            <div class="column-options-grid">
              <button class="dakuten-column column-button" data-column="ga">
              ${toHiragana("ga")}/ga
              </button>
              <button class="dakuten-column column-button" data-column="za">
              ${toHiragana("za")}/za
              </button>
              <button class="dakuten-column column-button" data-column="da">
              ${toHiragana("da")}/da
              </button>
              <button class="dakuten-column column-button" data-column="ba">
              ${toHiragana("ba")}/ba
              </button>
              <button class="dakuten-column column-button" data-column="pa">
              ${toHiragana("pa")}/pa
              </button>
            </div>
          </div>
          <div>
            <h2 class="column-option-title">Combinações Kana</h2>
            <button class="select-all-button">Selecionar Todos</button>
            <div class="column-options-grid">
              <button
                class="combination-column column-button"
                data-column="kya"
              >
              ${toHiragana("kya")}/kya
              </button>
              <button
                class="combination-column column-button"
                data-column="cha"
              >
              ${toHiragana("cha")}/cha
              </button>
              <button
                class="combination-column column-button"
                data-column="hya"
              >
              ${toHiragana("hya")}/hya
              </button>
              <button
                class="combination-column column-button"
                data-column="rya"
              >
              ${toHiragana("rya")}/rya
              </button>
              <button class="combination-column column-button" data-column="ja">
              ${toHiragana("ja")}/ja
              </button>
              <button
                class="combination-column column-button"
                data-column="bya"
              >
              ${toHiragana("bya")}/bya
              </button>
              <button
                class="combination-column column-button"
                data-column="sha"
              >
              ${toHiragana("sha")}/sha
              </button>
              <button
                class="combination-column column-button"
                data-column="nya"
              >
              ${toHiragana("nya")}/nya
              </button>
              <button
                class="combination-column column-button"
                data-column="mya"
              >
              ${toHiragana("mya")}/mya
              </button>
              <button
                class="combination-column column-button"
                data-column="gya"
              >
              ${toHiragana("gya")}/gya
              </button>
              <button
                class="combination-column column-button"
                data-column="dya"
              >
              ${toHiragana("dya")}/dya
              </button>
              <button
                class="combination-column column-button"
                data-column="pya"
              >
              ${toHiragana("pya")}/pya
              </button>
            </div>
          </div>
        </div>
        <button class="start-quiz-button">Começar o Quiz!</button>
      </section>
      `;

  mainHtmlElement.insertAdjacentHTML("afterbegin", markup);
  generateHomePageEvents();
}

function generateHomePageEvents() {
  // ****** Selectors ******
  kanaColumnButtonElements = document.querySelectorAll(".column-button");
  selectAllButtonElements = document.querySelectorAll(".select-all-button");
  mainColumnKanaButtonElements = document.querySelectorAll(".main-column");
  dakutenColumnKanaButtonElements =
    document.querySelectorAll(".dakuten-column");
  combinationColumnKanaButtonElements = document.querySelectorAll(
    ".combination-column"
  );

  hiraganaOptionButtonElement = document.querySelector(
    ".hiragana-option-button"
  );
  katakanaOptionButtonElement = document.querySelector(
    ".katakana-option-button"
  );
  startQuizButtonElement = document.querySelector(".start-quiz-button");

  // ****** Event Listeners ******
  selectAllButtonElements.forEach((selectAllButton) => {
    selectAllButton.addEventListener("click", function (e) {
      const selectedColumn =
        e.target.nextElementSibling.children[0].classList[0];

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
}

// ******* Event Listeners *******

// Select all buttons logic for adding checked styles in all buttons from that column
