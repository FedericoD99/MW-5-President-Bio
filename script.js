const quotes = [
    "The storm of frenzy and faction must inevitably dash itself in vain against the unshaken rock of the Constitution.",
    "Frequently the more trifling the subject, the more animated and protracted the discussion.",
    "You have summoned me in my weakness. You must sustain me by your strength."
];

// Button click listener to show a random quote
document.getElementById("quoteButton").addEventListener("click", function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteDisplay").innerHTML = `<blockquote>${randomQuote}</blockquote>`;
});


const questions = [
    {
        question: "Where was Franklin Pierce born?",
        answers: ["Hillsborough, New Hampshire", "Boston, Massachusetts", "Washington, D.C.", "New York, New York"],
        correct: 1,
        explanation: "Franklin Pierce was born in Hillsborough, New Hampshire, in 1804."
    },
    {
        question: "What year did Franklin Pierce become president?",
        answers: ["1850", "1852", "1853", "1855"],
        correct: 3,
        explanation: "Franklin Pierce was inaugurated as the 14th President of the United States in 1853."
    },
    {
        question: "What act did Franklin Pierce sign into law in 1854?",
        answers: ["The Homestead Act", "The Kansas-Nebraska Act", "The Civil Rights Act", "The Monroe Doctrine"],
        correct: 2,
        explanation: "The Kansas-Nebraska Act, signed by Pierce, allowed for the possibility of slavery to expand into new territories."
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    document.getElementById("answer1").textContent = q.answers[0];
    document.getElementById("answer2").textContent = q.answers[1];
    document.getElementById("answer3").textContent = q.answers[2];
    document.getElementById("answer4").textContent = q.answers[3];
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    const feedbackElement = document.getElementById("feedback");
    if (selected === q.correct) {
        score++;
        feedbackElement.textContent = "Correct! " + q.explanation;
        feedbackElement.style.color = "green";
        document.getElementById("next-btn").style.display = "inline-block";
    } else {
        feedbackElement.textContent = "Incorrect. " + q.explanation;
        feedbackElement.style.color = "red";
        document.getElementById("next-btn").style.display = "inline-block";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
    document.querySelector(".go-home-btn").style.display = "block"; // Show the "Go Back Home" button
}

// Initialize quiz
loadQuestion();



 // Function to toggle event details visibility
 function toggleDetails(eventId) {
    const eventDetails = document.getElementById(eventId);
    if (eventDetails.style.display === "none" || eventDetails.style.display === "") {
        eventDetails.style.display = "block";
    } else {
        eventDetails.style.display = "none";
    }
}