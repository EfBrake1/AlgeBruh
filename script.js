let min = 1;
let max = 9;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для проверки ответа
function checkAnswer(correctAnswer, userAnswer) {
    if (userAnswer == correctAnswer) {
        alert("Всё правильно!")
    } else {
        alert(userAnswer + " неправильный ответ! Правильный ответ " + correctAnswer + ".");
    };
}

document.querySelector(".add").onclick = function () {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);
    let correctAnswer = numA + numB;
    let userAnswer = prompt(numA + "+" + numB + "=", "");
    checkAnswer(correctAnswer, userAnswer);
};

document.querySelector(".subtract").onclick = function () {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);
    let correctAnswer = numA - numB;
    let userAnswer = prompt(numA + "-" + numB + "=", "");
    checkAnswer(correctAnswer, userAnswer);
};

document.querySelector(".multiply").onclick = function () {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);
    let correctAnswer = numA * numB;
    let userAnswer = prompt(numA + "*" + numB + "=", "");
    checkAnswer(correctAnswer, userAnswer);
};

document.querySelector(".divide").onclick = function () {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);
    let correctAnswer = numA / numB;
    correctAnswer = Math.round(correctAnswer);
    alert("Пожалуйста, округли твой ответ до целого числа:" + " если .5 и выше, то вверх" + " если .4 и ниже, то вниз")
    let userAnswer = prompt(numA + "/" + numB + "=", "");
    checkAnswer(correctAnswer, userAnswer);
};
document.querySelector("select").onchange = function () {
    let value = document.querySelector("select").value;
    switch(value){
        case "easy": 
            alert("Привет, на этом уровне у тебя будет лёгкая сложность, удачи!");
            min = 1;
            max = 9;
            break;
        case "medium": 
            alert("Привет, на этом уровне у тебя будет средняя сложность, удачи!");
            min = 10;
            max = 99;
            break; 
        case "hard": 
            alert("Привет, на этом уровне у тебя будет тяжёлая сложность, удачи!");
            min = 100;
            max = 999;
            break;
    };
}
