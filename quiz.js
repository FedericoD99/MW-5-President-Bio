//quiz code
const quizData = [
    {
        question: "What number president was Franklin Pierce?",
        answers: ["10th", "14th", "16th", "18th"],
        correct: 1, // correct answer is the second one (14th)
        explanation: "Franklin Pierce was the 14th president of the United States."
    },
    {
        question: "Which political party did Franklin Pierce belong to?",
        answers: ["Republican", "Whig", "Democratic", "Federalist"],
        correct: 2, // correct answer is the third one (Democratic)
        explanation: "Franklin Pierce was a member of the Democratic Party."
    },
    {
        question: "What major event happened during Pierce's presidency?",
        answers: ["The Civil War began", "The Kansas-Nebraska Act was passed", "The Louisiana Purchase was made", "The Emancipation Proclamation was issued"],
        correct: 1, // correct answer is the second one (Kansas-Nebraska Act was passed)
        explanation: "The Kansas-Nebraska Act was passed in 1854 during Pierce's presidency, leading to increased tensions over slavery."
    }
];

let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", function () {
    const questionEl = document.getElementById("question");
    const buttons = [
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
        document.getElementById("answer4")
    ];
    const feedbackEl = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");

    function loadQuestion() {
        let q = quizData[currentQuestion];
        questionEl.textContent = q.question;
        buttons.forEach((btn, index) => {
            btn.textContent = q.answers[index];
            btn.disabled = false;
        });
        feedbackEl.textContent = "";
        nextBtn.style.display = "none";
    }

    function checkAnswer(selected) {
        let q = quizData[currentQuestion];
        buttons.forEach(btn => btn.disabled = true);
        if (selected === q.correct) {
            feedbackEl.textContent = "Correct!";
            score++;
        } else {
            feedbackEl.textContent = "Incorrect. " + q.explanation;
        }
        nextBtn.style.display = "block";
    }

    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showFinalScore();
        }
    }

    function showFinalScore() {
        questionEl.textContent = `You scored ${score} out of ${quizData.length}!`;
        buttons.forEach(btn => btn.style.display = "none");
        feedbackEl.textContent = "";
        nextBtn.style.display = "none";
    }

    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => checkAnswer(index));
    });

    nextBtn.addEventListener("click", nextQuestion);

    loadQuestion();
});



//end of quiz code