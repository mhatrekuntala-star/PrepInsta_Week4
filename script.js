let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
];

function startTimer() {
    let seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById('timer').textContent = `Time: ${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    }, 1000);
}

function selectOption(index) {
    document.querySelectorAll('.option').forEach((button, i) => {
        button.classList.toggle('selected', i === index);
    });
}

function submitAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    const selectedIndex = Array.from(document.querySelectorAll('.option')).indexOf(selectedOption);
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        alert("Quiz completed!");
    }
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById('question').textContent = currentQuestion.question;
    document.querySelectorAll('.option').forEach((button, i) => {
        button.textContent = currentQuestion.options[i];
        button.classList.remove('selected');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    startTimer();
});
