var questions = [
    {
     prompt: "What is NOT a JavaScript Data Type?\n(a) String\n(b) Number\n(c) Element\n(d) Boolean",
     answer: "Element"
    };
    {
        
    }
        
        function showQuestion(q) {
              // select dom element
            let questionDiv =document.getElementById('question');

            titleDiv.textContent = q.question;

            // selecting by query 
            let ans = document.querySelectorAll('.answers');

            ans.forEach(function(element, index){
                element.textContent = q.answers[index];

                element.addEventListener('click', function() {
                    //Check correct answer
                    if(q.correctAnswer == index) {
            
                    }
                })
            });

        }

        showquizQuestion(quizQuestion);

        let btn = document.getElementById('btn');

        btn.addEventListener('click', function() {

        })
      
        showQuestion(quiz-question);
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