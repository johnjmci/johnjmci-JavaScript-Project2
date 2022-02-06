const BeginGame = document.getElementById('startButton')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-area-buttons')

let shuffledQuestions, currentQuestionIndex

BeginGame.addEventListener('click', newGame)

function newGame() {
    console.log('STARTED')
    BeginGame.classList.add('hidden')
    showNextQuestion()
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionindex = 0
    
}

function showNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionindex])

}

function showQuestion(question) {
    questionElement.innerText = question.question

}

function chooseAswer() {

}
function displayResults() {

}

const questions = [
    {
        question: 'How many brothers does Jim Halpert have?',
        answers: [
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    }
]