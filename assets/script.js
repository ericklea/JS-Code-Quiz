const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };

  loadQuiz();

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;

const quizData = [
    {
        question: "What is NOT a JavaScript Data Type?",
        a: "String",
        b: "Number",
        c: "Element",
        d: "Boolean",
        correct: "c",
    
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        a: "//",
        b: "<!",
        c: "#",
        d: "&",
        correct: "a",
    },
    {
        question: "Which of the following is a looping structure in JavaScript?",
        a: "Also",
        b: "Too",
        c: "Four",
        d: "For",
        correct: "d",
    },
    {
        question: "In JavaScript, what does NULL mean?",
        a: "Equal Value",
        b: "No Value",
        c: "Maximun Value",
        d: "Undefined",
        correct: "b",
    },
    {
        question: "How do you declare a varialbe in Javascript?",
        a: "var x = y",
        b: "var & x = y",
        c: "x var = y",
        d: "y = var + x",
        correct: "a",
    },
];

  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = ()
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
    }
  });