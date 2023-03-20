let questions = [
    {
        id: 1,
        question: "What is NOT a JavaScript Data Type?",
        answer: "Element",
        option: [
            "String",
            "Number",
            "Element",
            "Boolean",
        ]
    },
    {
        id: 2,
        question: "Which symbol is used for comments in JavaScript?",
        answer: "//",
        option: [
            "//",
            "<!",
            "#",
            "&",

        ]
    },
    {
        id: 3,
        question: "Which of the following is a looping structure in JavaScript?",
        answer: "For",
        option: [
            "Also",
            "Too",
            "Four",
            "For",
        ]
    },
    {
        id: 4,
        question: "In JavaScript, what does NULL mean?",
        answer:  "No Value",
        option: [
            "Equal Value",
            "No Value",
            "Maximun Value",
            "Undefined",
        ]
    },
    {
        id: 5;
        question: "How do you declare a varialbe in Javascript?",
        answer: "var x = y"
        option: [
            "var x = y",
            "var & x = y",
            "x var = y",
            "y = var + x",
        ]
    }

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
           