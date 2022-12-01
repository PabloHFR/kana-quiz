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
const titleElement = document.querySelector(".title");
const instructionsElement = document.querySelector(".instructions");

const quizBoxesListElement = document.querySelector(".quiz-boxes-list");

// ******* Variables *******
let selectedKanasArray = [];
let isHiragana = true;

// ******* Init *******
displayHomePage();

// ******* Functions *******
// Function for getting an array of user selected kana columns
function getSelectedKanas() {
  kanaColumnButtonElements = document.querySelectorAll(
    ".column-options-grid--button"
  );
  kanaColumnButtonElements.forEach((checkedColumn) => {
    if (checkedColumn.classList.contains("checked-column")) {
      selectedKanasArray.push(allKanaObject[`${checkedColumn.dataset.column}`]);
    }
  });
  selectedKanasArray = selectedKanasArray.flat();
}

// Function for generating markup for individual quiz-boxes
function generateMarkup(kana) {
  return `
    <li class="quiz-box">
      <label class="quiz-box-label">${
        isHiragana === true ? toHiragana(kana) : toKatakana(kana)
      }</label>
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
  if (selectedKanasArray.length !== 0) {
    deleteHomePage();
    shuffleArray(selectedKanasArray);
    selectedKanasArray.forEach((kana) => {
      quizBoxesListElement.insertAdjacentHTML(
        "beforeend",
        generateMarkup(kana)
      );
    });
    getQuizBoxInputsEvents();

    instructionsElement.textContent =
      "Escreva o Romaji na caixa de texto e aperte Enter ou Tab. Se errar, você pode continuar tentando. Clique no título acima para retornar à página inicial.";
  } else {
    alert("Selecione uma das colunas para continuar!");
  }
}

function deleteQuizPage() {
  mainHtmlElement.children[0].children[0].innerHTML = "";
  selectedKanasArray = [];
}

function deleteHomePage() {
  mainHtmlElement.children[0].remove();
}

function displayHomePage() {
  const markup = `
      <section class="select-box-section">
        <div class="kana-option-buttons">
          <button class="kana-option-buttons--hiragana checked-kana">
            Pratique Hiragana
          </button>
          <button class="kana-option-buttons--katakana ">Pratique Katakana</button>
        </div>
        <div class="kana-column-options">
          <div>
            <h2 class="kana-column-options--title">Kana Principal</h2>
            <button class="select-all-button">Selecionar Todos</button>
            <div class="column-options-grid">
              <button class="main-column column-options-grid--button" data-column="a">
              ${toHiragana("a")} / ${toKatakana("a")} / a
              </button>
              <button class="main-column column-options-grid--button" data-column="ka">
              ${toHiragana("ka")} / ${toKatakana("ka")} / ka
              </button>
              <button class="main-column column-options-grid--button" data-column="sa">
              ${toHiragana("sa")} / ${toKatakana("sa")} / sa
              </button>
              <button class="main-column column-options-grid--button" data-column="ta">
              ${toHiragana("ta")} / ${toKatakana("ta")} / ta
              </button>
              <button class="main-column column-options-grid--button" data-column="na">
              ${toHiragana("na")} / ${toKatakana("na")} / na
              </button>
              <button class="main-column column-options-grid--button" data-column="ha">
              ${toHiragana("ha")} / ${toKatakana("ha")} / ha
              </button>
              <button class="main-column column-options-grid--button" data-column="ma">
              ${toHiragana("ma")} / ${toKatakana("ma")} / ma
              </button>
              <button class="main-column column-options-grid--button" data-column="ya">
              ${toHiragana("ya")} / ${toKatakana("ya")} / ya
              </button>
              <button class="main-column column-options-grid--button" data-column="ra">
              ${toHiragana("ra")} / ${toKatakana("ra")} / ra
              </button>
              <button class="main-column column-options-grid--button" data-column="wa">
              ${toHiragana("wa")} / ${toKatakana("wa")} / wa
              </button>
            </div>
          </div>
          <div>
            <h2 class="kana-column-options--title">Kana Dakuten</h2>
            <button class="select-all-button">Selecionar Todos</button>
            <div class="column-options-grid">
              <button class="dakuten-column column-options-grid--button" data-column="ga">
              ${toHiragana("ga")} / ${toKatakana("ga")} / ga
              </button>
              <button class="dakuten-column column-options-grid--button" data-column="za">
              ${toHiragana("za")} / ${toKatakana("za")} / za
              </button>
              <button class="dakuten-column column-options-grid--button" data-column="da">
              ${toHiragana("da")} / ${toKatakana("da")} / da
              </button>
              <button class="dakuten-column column-options-grid--button" data-column="ba">
              ${toHiragana("ba")} / ${toKatakana("ba")} / ba
              </button>
              <button class="dakuten-column column-options-grid--button" data-column="pa">
              ${toHiragana("pa")} / ${toKatakana("pa")} / pa
              </button>
            </div>
          </div>
          <div>
            <h2 class="kana-column-options--title">Combinações Kana</h2>
            <button class="select-all-button">Selecionar Todos</button>
            <div class="column-options-grid">
              <button
                class="combination-column column-options-grid--button"
                data-column="kya"
              >
              ${toHiragana("kya")} / ${toKatakana("kya")} / kya
              </button>
              <button
                class="combination-column column-options-grid--button"
                data-column="cha"
              >
              ${toHiragana("cha")} / ${toKatakana("cha")} / cha
              </button>
              <button
                class="combination-column column-options-grid--button"
                data-column="hya"
              >
              ${toHiragana("hya")} / ${toKatakana("hya")} / hya
              </button>
              <button
                class="combination-column column-options-grid--button"
                data-column="rya"
              >
              ${toHiragana("rya")} / ${toKatakana("rya")} / rya
              </button>
              <button class="combination-column column-options-grid--button" data-column="ja">
              ${toHiragana("ja")} / ${toKatakana("ja")} / ja
              </button>
              <button
                class="combination-column column-options-grid--button"
                data-column="bya"
              >
              ${toHiragana("bya")} / ${toKatakana("bya")} / bya
              </button>
              <button
                class="combination-column column-options-grid--button"
                data-column="sha"
              >
              ${toHiragana("sha")} / ${toKatakana("sha")} / sha
              </button>
              <button
                class="combination-column column-options-grid--button"
                data-column="nya"
              >
              ${toHiragana("nya")} / ${toKatakana("nya")} / nya
              </button>
              <button
                class="combination-column column-options-grid--button"
                data-column="mya"
              >
              ${toHiragana("mya")} / ${toKatakana("mya")} / mya
              </button>
              <button
                class="combination-column column-options-grid--button"
                data-column="gya"
              >
              ${toHiragana("gya")} / ${toKatakana("gya")} / gya
              </button>
              <button
                class="combination-column column-options-grid--button"
                data-column="dya"
              >
              ${toHiragana("dya")} / ${toKatakana("dya")} / dya
              </button>
              <button
                class="combination-column column-options-grid--button"
                data-column="pya"
              >
              ${toHiragana("pya")} / ${toKatakana("pya")} / pya
              </button>
            </div>
          </div>
        </div>
        <button class="start-quiz-button">Começar o Quiz!</button>
      </section>
      `;

  mainHtmlElement.insertAdjacentHTML("afterbegin", markup);
  generateHomePageEvents();

  isHiragana = true;
  instructionsElement.textContent =
    "Selecione qual silabário deseja praticar e quais colunas. Recomendamos que pratique uma coluna por vez e adicione mais conforme evolua.";
}

function generateHomePageEvents() {
  // ****** Selectors ******
  kanaColumnButtonElements = document.querySelectorAll(
    ".column-options-grid--button"
  );
  selectAllButtonElements = document.querySelectorAll(".select-all-button");
  mainColumnKanaButtonElements = document.querySelectorAll(".main-column");
  dakutenColumnKanaButtonElements =
    document.querySelectorAll(".dakuten-column");
  combinationColumnKanaButtonElements = document.querySelectorAll(
    ".combination-column"
  );

  hiraganaOptionButtonElement = document.querySelector(
    ".kana-option-buttons--hiragana"
  );
  katakanaOptionButtonElement = document.querySelector(
    ".kana-option-buttons--katakana"
  );
  startQuizButtonElement = document.querySelector(".start-quiz-button");

  // ****** Event Listeners ******
  // Select all buttons logic for adding checked styles in all buttons from that column
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
    isHiragana = true;
    console.log(isHiragana);
  });

  katakanaOptionButtonElement.addEventListener("click", function () {
    katakanaOptionButtonElement.classList.add("checked-kana");
    hiraganaOptionButtonElement.classList.remove("checked-kana");
    isHiragana = false;
    console.log(isHiragana);
  });

  // Start Quiz Button
  startQuizButtonElement.addEventListener("click", displayQuizBoxes);
}

// ****** Event Listeners ******
titleElement.addEventListener("click", function () {
  if (!document.querySelector(".select-box-section")) {
    deleteQuizPage();
    displayHomePage();
  }
});
