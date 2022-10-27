const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let passwordOneEl = document.getElementById("passwordOne-el");
let passwordTwoEl = document.getElementById("passwordTwo-el");

var slider = document.getElementById("myRange");
var output = document.getElementById("output-el");
output.textContent = 11;
slider.addEventListener("input", function () {
    changeLength();
});

function changeLength() {
    output.textContent = slider.valueAsNumber
    passwordOneEl.textContent = " "
    passwordTwoEl.textContent = " "
}

var checkedBox = document.querySelector('input[type="checkbox"]');
checkedBox.addEventListener('change', function () {
    passwordOneEl.textContent = " "
    passwordTwoEl.textContent = " "
});

function generatePassword() {
    passwordOneEl.textContent = " "
    passwordTwoEl.textContent = " "
    if (checkedBox.checked) {
        for (i = 0; i < slider.valueAsNumber; i++) {
            passwordOneEl.textContent += numbers[Math.floor(Math.random() * numbers.length)]
            passwordTwoEl.textContent += numbers[Math.floor(Math.random() * numbers.length)]
        }
    } else {
        for (i = 0; i < slider.valueAsNumber; i++) {
            passwordOneEl.textContent += characters[Math.floor(Math.random() * characters.length)]
            passwordTwoEl.textContent += characters[Math.floor(Math.random() * characters.length)]
        }
    }
}


