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
