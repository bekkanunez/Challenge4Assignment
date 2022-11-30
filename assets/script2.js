
var score = 0;
var timerEl = document.querySelector(".time");
var startBtn = document.getElementById("start");

var timeLeft = 60;

    function setTime() {
     var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textcontent = timeLeft;
            if (timeLeft === 0 ){
             clearInterval(timeInterval);
             endQuiz();
            }
        }, 1000);
    };

    
startBtn.addEventListener("click", startQuiz)


function generateQuiz () {
    function showQuestions (questions, quizContainer){

        var response = [];
        var answer;


        for (var i=0; i < questions.length; i++){
            answer = [];

        for (letter in questions[i].answers){
            answer.push
        }
    }
}

var quizQuestion = [
    {
        question: "What does HTML stand for?",
        choices: {
            a: "Hypertimer Mark Loop",
            b: "Holographic Text Margin Line",
            c: "Hypertext Markup Language",
            d: "Hypertext Mirror Language",
        },
        correctAnswer: "c"    

    },
    {
        question: "What is CSS used for in web development",
        choices: {
            a: "to generate a page",
            b: "to add style to a web page",
            c: "to create a function",
            d: "to protect code",
        },
        correctAnswer: "b"
    },
    {
        question: "What does ul stand for",
        choices: {
            a: "unlisted",
            b: "undefined line",
            c: "unfound link",
            d: "uniform letter",
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is NOT an html tag?",
        choices: {
            a: "p",
            b: "body",
            c: "header",
            d: "js",
        },
        correctAnswer: "d"
    },
    
]

    if (question === true); function addPoints (){
        alert("correct!");
        score = score + 25;
    }else if (question !== true); function loseTime (){
           timeLeft = timeLeft - 15; 
        }
    }

function endQuiz () {
    timerEl.textContent = " ";
    var initialsEl = document.createElement("")
}

setTime();
generateQuiz();