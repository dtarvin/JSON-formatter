const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnChange = document.querySelector(".controls__button--change");
const btnFormat = document.querySelector(".controls__button--format");
const btnMinify = document.querySelector(".controls__button--minify");
const btnClear = document.querySelector(".controls__button--clear");

function addQuotesToSubstring(substring) {
    return '\" + substring + \"';
}

btnChange.addEventListener("click", () => {
    let valueToChange = "[" + inputArea.value + "]";
    var newValue = valueToChange.replaceAll("=", ":");

    inputArea.value = newValue;
});

btnFormat.addEventListener("click", () => {
    const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);

    outputArea.value = formatted;
});

btnMinify.addEventListener("click", () => {
    const minified = JSON.stringify(JSON.parse(inputArea.value));

    outputArea.value = minified;
});

btnClear.addEventListener("click", () => {
    const clear = "";

    inputArea.value = clear;
    outputArea.value = clear;
});