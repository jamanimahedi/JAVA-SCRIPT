const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JavaScript", "CSS", "Python"],
    correct: 2,
  },
  {
    question: "Which language is used for web page interactivity?",
    options: ["C++", "Java", "JavaScript", "PHP"],
    correct: 2,
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<p>"],
    correct: 1,
  },
  {
    question: "Which CSS property changes text color?",
    options: ["font-style", "text-color", "color", "background"],
    correct: 2,
  },
  {
    question: "Which symbol is used for ID selector in CSS?",
    options: [".", "#", "*", "@"],
    correct: 1,
  },
  {
    question: "Which method is used to select an element in JavaScript?",
    options: [
      "getElementById()",
      "queryStyle()",
      "fetchElement()",
      "selectNode()",
    ],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to insert an image?",
    options: ["img", "image", "src", "pic"],
    correct: 0,
  },
  {
    question: "Which CSS property is used for spacing inside an element?",
    options: ["margin", "padding", "border", "spacing"],
    correct: 1,
  },
  {
    question: "Which JavaScript keyword is used to declare a variable?",
    options: ["int", "string", "let", "define"],
    correct: 2,
  },
];

let qnsNumberEl = document.getElementById("qnsNumber");
let qns = document.getElementById("qns");
let options = document.getElementById("options");
let nextButton = document.getElementById("nextBtn");

let currentIndex = 0;
let score = 0;
let selectedAnswer = null;
let timer;
let timeLeft = 30;

function loadQns() {
  clearInterval(timer);

  let currentQns = quizData[currentIndex];

  qnsNumberEl.innerText = `Question ${currentIndex + 1}/${quizData.length}`;
  qns.innerText = currentQns.question;

  options.innerHTML = "";
  selectedAnswer = null;

  currentQns.options.forEach((opt, index) => {
    let col = document.createElement("div");
    col.classList.add("col-md-6");

    let button = document.createElement("button");
    button.innerText = opt;
    button.classList.add("btn", "btn-outline-primary", "option-btn");

    button.onclick = function () {
      if (selectedAnswer !== null) return;

      selectedAnswer = index;

      let allBtns = document.querySelectorAll(".option-btn");

      allBtns.forEach((btn, i) => {
        btn.disabled = true;

        if (i === currentQns.correct) {
          btn.classList.remove("btn-outline-primary");
          btn.classList.add("btn-success");
        }

        if (i === selectedAnswer && i !== currentQns.correct) {
          btn.classList.remove("btn-outline-primary");
          btn.classList.add("btn-danger");
        }
      });
    };

    col.appendChild(button);
    options.appendChild(col);
  });

  startTimer();
}

function startTimer() {
  let timerEl = document.getElementById("timer");

  timeLeft = 30;
  timerEl.innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQns();
    }
  }, 1000);
}

function nextQns() {
  clearInterval(timer);

  if (selectedAnswer === quizData[currentIndex].correct) {
    score++;
  }

  if (currentIndex < quizData.length - 1) {
    currentIndex++;
    loadQns();
  } else {
    showResult();
  }
}

function showResult() {
  const quizCard = document.querySelector(".quiz-card");

  quizCard.innerHTML = `
    <h2 class="text-center text-success">🎉 Quiz Finished</h2>
    <h3 class="text-center mt-3">Score: ${score}/${quizData.length}</h3>
    <div class="text-center mt-4">
      <button class="btn btn-primary" onclick="location.reload()">Restart</button>
    </div>
  `;
}

loadQns();