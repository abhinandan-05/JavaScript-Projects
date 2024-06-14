const questions = [
  {
    questions: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Hyper Tool Markup Language", correct: false }
    ]
  },
  {
    questions: "Which of the following is the correct HTML element for the largest heading?",
    answers: [
      { text: "<h6>", correct: false },
      { text: "<h1>", correct: true },
      { text: "<head>", correct: false },
      { text: "<h4>", correct: false }
    ]
  },
  {
    questions: "What is the correct HTML element for inserting a line break",
    answers: [
      { text: "<break>", correct: false },
      { text: "<lb>", correct: false },
      { text: "<br>", correct: true },
      { text: "<line>", correct: false }
    ]
  },
  {
    questions: "Which character is used to indicate an end tag?",
    answers: [
      { text: "*", correct: false },
      { text: "/", correct: true },
      { text: ">", correct: false },
      { text: "<", correct: false }
    ]
  },
  {
    questions: "How can you make a numbered list?",
    answers: [
      {text: "<ul>", correct: false },
      {text: "<ol>", correct: true},
      {text: "<dl>", correct: false},
      {text: "<list>", correct: false}
    ]
  },/*
  {
    questions: "What is the correct HTML element to define important text?",
    answers: [
      {text: "<b>", correct: false },
      {text: "<important>", correct: },
      {text: "<strong>", correct: },
      {text: "<i>", correct: }

    ]
  },
  {
    questions: " ",
    answers: [
      {text: " ", correct: },
      {text: " ", correct: },
      {text: " ", correct: },
      {text: " ", correct: },

    ]
  },
  {
    questions: " ",
    answers: [
      {text: " ", correct: },
      {text: " ", correct: },
      {text: " ", correct: },
      {text: " ", correct: },

    ]
  },
  {
    questions: " ",
    answers: [
      {text: " ", correct: },
      {text: " ", correct: },
      {text: " ", correct: },
      {text: " ", correct: },

    ]
  },*/
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
  });
}


function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

startQuiz();