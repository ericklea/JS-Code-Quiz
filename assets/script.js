var startButton= document.querySelector(".start-button");
var timerElement= document.querySelector(".timer-count"); 



function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){

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

    //code goes here
}

//show questions
showQuestions(questions, quizContainer);

//when user clicks submit, show results
submitButton.onclick = function(){
    showResults(questions,quizContainer, resultsContainer);
}