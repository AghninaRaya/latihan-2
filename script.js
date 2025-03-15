const questions = [
    { question: "Apa ibu kota Indonesia?", options: ["Jakarta", "Surabaya", "Bandung", "Medan"], correct: 0 },
    { question: "Siapa penemu lampu pijar?", options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"], correct: 1 },
    { question: "Planet terbesar di tata surya adalah?", options: ["Bumi", "Mars", "Jupiter", "Venus"], correct: 2 }
];

let currentQuestionIndex;

function loadQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionObj.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questionObj.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "btn btn-outline-primary d-block w-100 my-2";
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("nextBtn").classList.add("d-none");
}

function checkAnswer(selectedIndex) {
    const questionObj = questions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");

    if (selectedIndex === questionObj.correct) {
        feedback.textContent = "Jawaban Benar!";
        feedback.className = "fw-bold text-success";
    } else {
        feedback.textContent = "Jawaban Salah!";
        feedback.className = "fw-bold text-danger";
    }

    document.getElementById("nextBtn").classList.remove("d-none");
}

document.getElementById("nextBtn").onclick = loadQuestion;

loadQuestion();
