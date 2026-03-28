const number = document.getElementById("counting-num");
const inc10Button = document.getElementById("increase10");
const inc1Button = document.getElementById("increase1");
const dec1Button = document.getElementById("decrease1");
const dec10Button = document.getElementById("decrease10");
const resetButton = document.getElementById("reset");

let count = 0;
number.textContent = count;

function increase10Count() {
    count += 10; // count = count + 10
    number.textContent = count; // 숫자 변화 반영
}

function increase1Count() {
    count++; // count = count + 1
    number.textContent = count; // 숫자 변화 반영
}

function decrease1Count() {
    count--; // count = count - 1
    number.textContent = count; // 숫자 변화 반영
}

function decrease10Count() {
    count -= 10; // count = count - 10
    number.textContent = count; // 숫자 변화 반영
}

function resetCount() {
    count = 0;
    number.textContent = count; // 숫자 변화 반영
}

inc10Button.addEventListener("click", increase10Count);
inc1Button.addEventListener("click", increase1Count);
dec1Button.addEventListener("click", decrease1Count);
dec10Button.addEventListener("click", decrease10Count);
resetButton.addEventListener("click", resetCount);