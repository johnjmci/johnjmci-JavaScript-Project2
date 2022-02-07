// instruction to display and then hide welcome text when game starts 
const BeginGame = document.getElementById("welcome")
BeginGame.addEventListener("click", newGame)
 
function newGame() {
   BeginGame.classList.add("hidden")
}

// create question and answer dynamic
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
   {
      question: "What is the name of Jim and Pam's son?",
      choice1: "Charles", 
      choice2: "Phillip",
      choice3: "Edward",
      answer: 2
   },
   {
      question: "Which of Angela's cats did Dwight kill?",
      choice1: "Petals", 
      choice2: "Princess Lady",
      choice3: "Sprinkles",
      answer: 3
   }
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

getNewQuestion = () => {
   
   if (availableQuestions.length == 0 || questionCounter >= max_questions) {
   // user should be taken to the results page 
   return window.location.assign("/results.html");
}
   questionCounter++;
   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;

   choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
   });
    

   availableQuestions.splice(questionIndex, 1);

   acceptingAnswers = true;
};

choices.forEach(choice => {
   choice.addEventListener('click', e => {
      if(!acceptingAnswers) return;

      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];

      const classToApply = 
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

      selectedChoice.parentElement.classList.add(classToApply);
      
      setTimeout(() => {
         selectedChoice.parentElement.classList.remove(classToApply);
         getNewQuestion();
      }, 1000);
           
   });
});


startGame();
