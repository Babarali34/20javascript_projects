

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C++",
    c: "Javascript",
    d: "Python",
    ans: "c",
  },
  {
    question: "How can you open a link in a new browser window?",
    a: '<a href="url" new>',
    b: '<a href="url" new>',
    c: '<a href="url" target="_blank">',
    d: '<a href="url" target="">',
    ans: "c",
  },
  {
    question: "_________ keyword is used to declare variables in javascript.",
    a: "Var",
    b: "Dim",
    c: "Stringt",
    d: "None of above",
    ans: "a",
  },
  {
    question: "What's so great about XML?",
    a: "Easy data exchange",
    b: "High speed on network",
    c: "Only B is correct",
    d: "Both A & B",
    ans: "d",
  },
];

const quiz = document.getElementById("quiz");
const answers = document.querySelectorAll(".answer");
const question = document.querySelector("#question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submit = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;
loadQuiz()


function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]
  
  question.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d


}

// de selected

function deselectAns() {
  answers.forEach((ans)=>(ans.checked = false))
}

// selectedAnswer
function getSelected() {
  let selectedAns;
  answers.forEach((ans_id) => {
    if (ans_id.checked) {
       selectedAns = ans_id.id
    }
  })

  return selectedAns
}

submit.addEventListener('click', () => {
  const selectedAnswer = getSelected()
  
  if (selectedAnswer === quizData[currentQuiz].ans) {
          score ++
    
  }
  currentQuiz++;
  
  if (currentQuiz < quizData.length) {
    loadQuiz()
  } else {
    quiz.innerHTML = `<h2>You Score : ${score} / ${quizData.length} Quession Correctly 
      answers </h2>
      <button onclick='location.reload()'>Reload</button>`
  }
  
})

// let currentQuiz = 0;
// let score = 0;

// loadQuiz();

// function loadQuiz() {
//   deselectAnswers();

//   const currentQuizData = quizData[currentQuiz];
//   question.innerText = currentQuizData.question;
//   a_text.innerText = currentQuizData.a;
//   b_text.innerText = currentQuizData.b;
//   c_text.innerText = currentQuizData.c;
//   d_text.innerText = currentQuizData.d;
// }

// function deselectAnswers() {
//   answers.forEach((ans) => (ans.checked = false));
// }

// function getSelected() {
//   let selectedAns;
//   answers.forEach((ans_id) => {
//     if (ans_id.checked) {
//       selectedAns = ans_id.id;
//     }
//   });
//   return selectedAns;
// }

// submit.addEventListener("click", () => {
//   const selectedAnswer = getSelected();

//   if (selectedAnswer === quizData[currentQuiz].ans) {
//     score++;
//   }
//   currentQuiz++;

//   if (currentQuiz < quizData.length) {
//     loadQuiz();
//   } else {
//     quiz.innerHTML = `
//       <h2>Your Score: ${score} / ${quizData.length} Questions correctly answered</h2>
//       <button onclick="location.reload()">Reload</button>
//     `;
//   }
// });

