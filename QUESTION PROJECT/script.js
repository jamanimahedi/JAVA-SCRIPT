let Questions = [
    {
        id: 1,
        question: "What does HTML stand for?",
        options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Language",
            "Hyper Tool Multi Language"
        ],
        correctIndex: 2
    },
    {
        id: 2,
        question: "Which CSS property is used to change text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        correctIndex: 2
    },
    {
        id: 3,
        question: "Which JavaScript method is used to select an element by ID?",
        options: [
            "getElementByClass()",
            "getElementById()",
            "querySelectorAll()",
            "getId()"
        ],
        correctIndex: 1
    },
    {
        id: 4,
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correctIndex: 1
    },
    {
        id: 5,
        question: "Which CSS property controls spacing between elements?",
        options: [
            "padding",
            "margin",
            "spacing",
            "border"
        ],
        correctIndex: 1
    },
    {
        id: 6,
        question: "Which of the following is a JavaScript framework?",
        options: [
            "Django",
            "Laravel",
            "React",
            "Flask"
        ],
        correctIndex: 2
    },
    {
        id: 7,
        question: "Which HTML tag is used to display an image?",
        options: [
            "<image>",
            "<img>",
            "<src>",
            "<pic>"
        ],
        correctIndex: 1
    },
    {
        id: 8,
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets"
        ],
        correctIndex: 1
    },
    {
        id: 9,
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correctIndex: 0
    },
    {
        id: 10,
        question: "Which HTML element is used for the largest heading?",
        options: [
            "<heading>",
            "<h6>",
            "<h1>",
            "<head>"
        ],
        correctIndex: 2
    }
];

let qnsIndexHTML = document.getElementById("qnsIndexHTML")
let qnsTimer = document.getElementById("qnsTimer")
let nextbtn = document.getElementById("nextbtn")


let qnsCounter=1;

let qnsIndex = 0;

function nextqns() {
    let qns = document.getElementById("qns");
    let optionsDiv = document.getElementById("options");


    qns.innerHTML = Questions[qnsIndex].question;
    optionsDiv.innerHTML = "";

    Questions[qnsIndex].options.forEach((opt) => {

        let div = document.createElement("div");
        div.classList.add("col-6", "mb-2");

        let btn = document.createElement("button");
        btn.innerText = opt;

        btn.classList.add("p-2", "btn", "btn-outline-primary", "w-100");
        btn.style.minHeight = "60px";

        div.appendChild(btn);
        optionsDiv.appendChild(div);

        qnsIndexHTML.innerHTML=`question: ${qnsCounter}/10`
    });

    qnsIndex++;
    qnsCounter++;

}

nextqns();