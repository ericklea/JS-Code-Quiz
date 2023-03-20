var startButton = document.getElementById('start-button')
var quizContainerElement = document.getElementById('quiz-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = doucment.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()

})

function startGame() {
    startButton.classList.add
    quizContainerElement.classlist.remove
    setNextQuestion()

}

function showQuestions(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer =>) {
        var button = document.createElement('button')
        button.innerText = answer.innerText
        button.classlist.add('button')
        if (answer.correct) {
            button.dataset.correct = answeer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
        }

function selectAnswer(e) {
    var selectButton = e.target
    var correct = selectedButton.dataset.correct 
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}
    
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    }
}
    var quizQuestions = [
        {
            question: "What is NOT a JavaScript Data Type?",
            answers: [
                a: "String"
                b: "Number"
                c: "Element"
                d: "Boolean"
            ],
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