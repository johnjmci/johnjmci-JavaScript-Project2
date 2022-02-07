// instruction to display and then hide welcome text when game starts 
const BeginGame = document.getElementById("welcome")
BeginGame.addEventListener("click", newGame)
 
function newGame() {
   BeginGame.classList.add("hidden")
}

// create question and answer dynamic
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {},
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
   { 
   question: "What is the names of Jim and Pam Halpert's son?”,
   choice1: "Charles”,
   choice2: "Phillip”,
   choice3: "Edward”,
   answer: 2 
   }, 

]


// constants necessary for game to function

const correct_bonus = 10;
const max_questions = 3;

startGame = () => {
   questionCounter = 0;
   score = 0;
   availableQuestions = [...questions];
   console.log(availableQuestions);
   getNewQuestion();
};

getNewQuestion() = () => {
   questionCounter++;
   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;
    
};


startGame();
