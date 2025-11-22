let number1, number2;
let score = 0;

const scoreField = document.getElementById("score");
const taskText = document.getElementById("taskText");
const answerInput = document.getElementById("answer");
const resultText = document.getElementById("resultText");

document.getElementById("nextTask").onclick = function () {
    number1 = Math.floor(Math.random() * 10) + 1; // 1–10
    number2 = Math.floor(Math.random() * 10) + 1;

    taskText.textContent = `${number1} × ${number2} = ?`;
    answerInput.value = "";
    resultText.textContent = "";
};

document.getElementById("checkBtn").onclick = function () {
    const correctAnswer = number1 * number2;
    const userAnswer = parseInt(answerInput.value);

    if (userAnswer === correctAnswer) {
        resultText.textContent = "Правильно!";
        resultText.style.color = "green";
        score++;
        scoreField.textContent = score;
    } else {
        resultText.textContent = `Неправильно. Правильна відповідь: ${correctAnswer}`;
        resultText.style.color = "red";
    }
};
