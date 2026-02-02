// ===== DOM ELEMENTS =====
const loadingText = document.getElementById("loading");
const quizArea = document.getElementById("quiz-area");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result-box");
const finalScore = document.getElementById("final-score");
const questionNumber = document.getElementById("question-number");
const scoreBox = document.getElementById("score-box");

// ===== QUIZ VARIABLES =====
let allQuestions = [];
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

// ===== LOAD QUESTIONS FROM FILE =====
fetch("Question.txt")
    .then(response => response.text())
    .then(data => {
        allQuestions = data
            .trim()
            .split("\n")
            .map(line => {
                const parts = line.split("|");
                return {
                    question: parts[0].trim(),
                    options: parts.slice(1, 5).map(opt => opt.trim()),
                    answer: parseInt(parts[5].trim())
                };
            });

        startQuiz();
    })
    .catch(() => {
        loadingText.innerText = "Failed to load questions ❌";
    });

// ===== START QUIZ =====
function startQuiz() {
    // Pick 20 random questions
    quizQuestions = allQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);

    loadingText.classList.add("hide");
    quizArea.classList.remove("hide");

    loadQuestion();
}

// ===== LOAD QUESTION =====
function loadQuestion() {
    answered = false;
    nextBtn.disabled = true;
    feedbackEl.innerText = "";

    const q = quizQuestions[currentIndex];

    questionText.innerText = q.question;
    questionNumber.innerText = `Question ${currentIndex + 1} / 20`;
    scoreBox.innerText = `Score: ${score}`;

    optionsContainer.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.innerText = option;

        btn.addEventListener("click", () => checkAnswer(btn, index));

        optionsContainer.appendChild(btn);
    });
}

// ===== CHECK ANSWER =====
function checkAnswer(selectedBtn, selectedIndex) {
    if (answered) return;
    answered = true;

    const correctIndex = quizQuestions[currentIndex].answer;
    const optionButtons = document.querySelectorAll(".option");

    optionButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add("correct");
        feedbackEl.innerText = "Correct Answer ✅";
        score++;
    } else {
        selectedBtn.classList.add("wrong");
        optionButtons[correctIndex].classList.add("correct");
        feedbackEl.innerText = "Wrong Answer ❌";
    }

    scoreBox.innerText = `Score: ${score}`;
    nextBtn.disabled = false;
}

// ===== NEXT QUESTION =====
nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// ===== SHOW RESULT =====
function showResult() {
    quizArea.classList.add("hide");
    resultBox.classList.remove("hide");
    finalScore.innerText = `${score} / 20`;
}
// ===== RESTART QUIZ =====
document.getElementById("restartBtn").addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    startQuiz();
});