import { toHiragana, toKatakana } from "wanakana";

// Selectors
const checkedColumns = document.querySelectorAll(".checked-column");
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

// Functions

// Data

// Main Kana
const mainKanaObject = {
  aKana: ["a", "i", "u", "e", "o"],
  kaKana: ["ka", "ki", "ku", "ke", "ko"],
  saKana: ["sa", "shi", "su", "se", "so"],
  taKana: ["ta", "chi", "tsu", "te", "to"],
  naKana: ["na", "ni", "nu", "ne", "no"],
  haKana: ["ha", "hi", "fu", "he", "ho"],
  maKana: ["ma", "mi", "mu", "me", "mo"],
  yaKana: ["ya", "yu", "yo"],
  raKana: ["ra", "ri", "ru", "re", "ro"],
  waKana: ["wa", "wo", "n"],
};

// Dakuten Kana
const dakutenKanaObject = {
  gaKana: ["ga", "gi", "gu", "ge", "go"],
  zaKana: ["za", "ji", "zu", "ze", "zo"],
  daKana: ["da", "zi", "zu", "de", "do"],
  baKana: ["ba", "bi", "bu", "be", "bo"],
  paKana: ["pa", "pi", "pu", "pe", "po"],
};

// Combination Kana
const combinationKanaObject = {
  kyaKana: ["kya", "kyu", "kyo"],
  gyaKana: ["gya", "gyu", "gyo"],
  shaKana: ["sha", "shu", "sho"],
  jyaKana: ["jya", "jyu", "jyo"],
  chaKana: ["cha", "chu", "cho"],
  dyaKana: ["dya", "dyu", "dyo"],
  nyaKana: ["nya", "nyu", "nyo"],
  hyaKana: ["hya", "hyu", "hyo"],
  byaKana: ["bya", "byu", "byo"],
  pyaKana: ["pya", "pyu", "pyo"],
  myaKana: ["mya", "myu", "myo"],
  ryaKana: ["rya", "ryu", "ryo"],
};

// Event Listeners
checkedColumns.forEach((checkedColumn) => {
  console.log(checkedColumn);
});

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

kanaColumnButtonElements.forEach((kanaColumnButton) => {
  kanaColumnButton.addEventListener("click", function () {
    kanaColumnButton.classList.toggle("checked-column");
  });
});

hiraganaOptionButtonElement.addEventListener("click", function () {
  hiraganaOptionButtonElement.classList.add("checked-kana");
  katakanaOptionButtonElement.classList.remove("checked-kana");
});

katakanaOptionButtonElement.addEventListener("click", function () {
  katakanaOptionButtonElement.classList.add("checked-kana");
  hiraganaOptionButtonElement.classList.remove("checked-kana");
});
