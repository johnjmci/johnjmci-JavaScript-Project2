// instruction to display and then hide welcome text when game starts 
const gameWelcome = document.getElementById("welcome");
const startQuiz = document.getElementById("results");

gameWelcome.addEventListener("click", newGame);
 
function newGame() {
   gameWelcome.classList.add("hide");
   startQuiz.classList.add("unhide");

}

// create question and answer dynamic
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");



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
   },
   {
      question: "Michael likes to wake up to the smell of what in the morning?",
      choice1: "Coffee", 
      choice2: "Bacon",
      choice3: "Money",
      answer: 2
   },
   {
      question: "What was the name of Jan Levinson's assistant at corporate?",
      choice1: "Storm", 
      choice2: "Jason",
      choice3: "Hunter",
      answer: 3
   },
   {
      question: "How many vasectomies did Michael have?",
      choice1: "1", 
      choice2: "2",
      choice3: "3",
      answer: 3
   },
   {
      question: "What was the name of Kevin, Kelly, Erin and Meredith's quiz team?",
      choice1: "The Einsteins", 
      choice2: "The Hawkings",
      choice3: "The Edisons",
      answer: 1
   },
   {
      question: "What username does Michael pick for the online dating service he joins?",
      choice1: "Little Kid Lover", 
      choice2: "Big Kid Lover",
      choice3: "Lady Lover",
      answer: 1
   },
   {
      question: "Who did Dwight bring as his date to Michael and Jan's dinner party?",
      choice1: "His lawyer", 
      choice2: "His cousin",
      choice3: "His former babysitter",
      answer: 3
   },
   {
      question: "What nickname does Andy give Jim?",
      choice1: "Big Eagle", 
      choice2: "Big Tiger",
      choice3: "Big Tuna",
      answer: 3
   },
   {
      question: "Who did Kevin get for Secret Santa?",
      choice1: "No one", 
      choice2: "Himself",
      choice3: "Michael",
      answer: 2
   },

];


// constants necessary for game to function

const correct_points = 10;
const max_questions = 10;

startGame = () => {
   questionCounter = 0;
   score = 0;
   availableQuestions = [...questions];
   console.log(availableQuestions);
   loadQuestion();
};

loadQuestion = () => {
   
   if (availableQuestions.length == 0 || questionCounter >= max_questions) {
   // storing final score so that it can be referenced in the results page
   localStorage.setItem('mostRecentScore', score);

   // user should be taken to the results page 
   return window.location.assign("/results.html");
}
   questionCounter++;
   questionCounterText.innerText = questionCounter + "/" + max_questions;

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

      if(classToApply == 'correct') {
         incrementScore(correct_points);
      }

      selectedChoice.parentElement.classList.add(classToApply);
      
      setTimeout(() => {
         selectedChoice.parentElement.classList.remove(classToApply);
         loadQuestion();
      }, 500);
           
   });
});

incrementScore = num => {
   score +=num;
   scoreText.innerText = score;
};

startGame();
