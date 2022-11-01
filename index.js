const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const passwordOneEl = document.getElementById("passwordOne-el")
const passwordTwoEl = document.getElementById("passwordTwo-el")
const checkedBox = document.querySelector('input[type="checkbox"]')
const slider = document.getElementById("myRange")
const output = document.getElementById("output-el")

output.textContent = 11;

slider.addEventListener("input", function () {
    output.textContent = slider.value
    passwordOneEl.textContent = " "
    passwordTwoEl.textContent = " "
})

checkedBox.addEventListener("change", function () {
    passwordOneEl.textContent = " "
    passwordTwoEl.textContent = " "
})

function generatePassword() {
    passwordOneEl.textContent = " "
    passwordTwoEl.textContent = " "
    if (checkedBox.checked) {
        for (i = 0; i < slider.value; i++) {
            passwordOneEl.textContent += numbers[Math.floor(Math.random() * numbers.length)]
            passwordTwoEl.textContent += numbers[Math.floor(Math.random() * numbers.length)]
        }
    } else {
        for (i = 0; i < slider.value; i++) {
            passwordOneEl.textContent += characters[Math.floor(Math.random() * characters.length)]
            passwordTwoEl.textContent += characters[Math.floor(Math.random() * characters.length)]
        }
    }
}

