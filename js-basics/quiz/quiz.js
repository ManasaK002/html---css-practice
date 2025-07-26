const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false},
      { text: "Blue whale", correct: true},
      { text: "Elephant", correct: false},
      { text: "Giraffe", correct: false},      
    ] 
  },
  {
    question: "Which is the smallest country in the world?",
    answer: [
      { text: "Vatican City", correct: true},
      { text: "Bhutan", correct: false},
      { text: "Nepal", correct: false},
      { text: "Sri Lanka", correct: false},
    ]
  },
  {
    question: "Which is the largest desert in the world?",
    answer: [
      { text: "Kalahari", correct: false},
      { text: "Gobi", correct: false},
      { text: "Sahara", correct: false},
      { text: "Antartica", correct: false},
    ]
  },
  {
    question: "Which is the smallest continent in the world",
    answer: [
      { text: "Asia", correct: false},
      { text: "Australia", correct: true},
      { text: "Arctic", correct: false},
      { text: "Africa", correct: false},
    ]
  }
]
const questionElement = document.getElementById("ques");
const answerButton = document.getElementById("ans");
const nextButton = document.getElementById("nextBtn");

let questionIndex = 0;
let score = 0;

function startQuiz(){
  questionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuiz();
}

function showQuiz(){
  let currentQuestion = questions[questionIndex];
  let questionN0 = questionIndex + 1;
  questionElement.innerHTML = questionN0 + ". " + questionIndex.question;

  answerButton.answer.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  })
}

startQuiz();