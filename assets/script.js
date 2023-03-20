var startButton = document.getElementById('start-button')
var quizContainerElement = document.getElementById('quiz-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = doucment.getElementById('answer-buttons')
startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add
    quizContainerElement.classlist.remove
    setNextQuestion()

}
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(question){

    var quizQuestions = [
        {
            question: "What is NOT a JavaScript Data Type?",
            answers: {
                a: "String"
                b: "Number"
                c: "Element"
                d: "Boolean"
            },
            correctAnswer: 'c'
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            answers: {
                a: "//"
                b: "<!"
                c: "#"
                d: "&"

            },
            correctAnswer: 'a'
        },
        {
            question: "Which of the following is a looping structure in JavaScript?",
            answers: {
                a: "Also"
                b: "Too"
                c: "Four"
                d: "For"
            },
            correctAnswer: 'd'
        },
        {
            question: "In JavaScript, what does NULL mean?",
            answers: {
                a: "Equal Value"
                b: "No Value"
                c: "Maximun Value"
                d: "Undefined"
            },
            correctAnswer: 'b'
        },
        {
            question: "How do you declare a varialbe in Javascript?",
            answers: {
                a: "var x = y"
                b: "var & x = y"
                c: "x var = y"
                d: "y = var + x"
            },
            correctAnswer: 'a'
        }
    ];
}

function showResults(questions, quizContainer, resultsContainer){

    answersContainer = quizContainer.querySelectorAll('.answers');

    var userAnswer=""
    var numbCorrect= 0;

    for(var i=0; i<questions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        if(userAnswer===questions[i].correctAnswer){
            numbCorrect++;
        }
    }

    resultsContainer.innerHTML = numbCorrect + ' out of ' + questions.length;
}

//show questions
showQuestions(questions, quizContainer);

var output = [];
var answers;

for(var i=0; i<questions.length; i++){

    answers = [];

    for(letter in questions[i].answers){

        answers.push(
            '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + leter + ':'
                + questions[i].answers[letter]
            + '<label>'
        );
    }

    output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
    );
}

quizContainer.innerHTML = output.join('');
//when user clicks submit, show results
submitButton.onclick = function(){
    showResults(questions,quizContainer, resultsContainer);
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

}
