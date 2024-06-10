const questions = [
  {
    questions: "Which is largest animal in the world?",
    answers: [
      {text: "Shark", correct: false},
      {text: "Blue whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false},

    ]
  }, 
  {
    questions: "Which is smallest continent in the world?",
    answers: [
      {text: "Asia", correct: false},
      {text: "Blue whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false},
    ]
  },
  {
    questions: "Which is smallest continent in the world?",
    answers: [
      {text: "Asia", correct: false},
      {text: "Blue whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false},
    ]
  },
  {
    questions: "Which is smallest continent in the world?",
    answers: [
      {text: "Asia", correct: false},
      {text: "Blue whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
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
  let currentQuestionIndex = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex +1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.array.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButton.appendChild(button);
  });
}