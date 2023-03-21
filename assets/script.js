var quizData = [
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
var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", start)
function startTimer(){
    var counter = 60;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
      }
    }, 1000);
  }
  function start()
  {
      document.getElementById("count").style="color:green;";
      startTimer();
  };
  var quiz = document.getElementById("quiz");
  var answerElements = document.querySelectorAll(".answer");
  var questionElement = document.getElementById("question");
  var a_text = document.getElementById("a_text");
  var b_text = document.getElementById("b_text");
  var c_text = document.getElementById("c_text");
  var d_text = document.getElementById("d_text");
  var submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;



function loadQuiz () {
    deselectAnswers();
    var currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };

  loadQuiz();



function getSelected () {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
function deselectAnswers () {
    answerElements.forEach((answer) => (answer.checked = false));
  };

  submitButton.addEventListener("click", function (event){
    var answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2><button onclick="history.go(0)">Play Again</button> ` 
    }

 }});

 function highScores () {

 }
