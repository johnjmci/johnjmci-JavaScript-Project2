const BeginGame = document.getElementById('welcome')
BeginGame.addEventListener('click', newGame)

function newGame() {
    BeginGame.classList.add('hidden')
}


let question = 
    {
        title: 'How many brothers does Jim Halpert have?',
        alternatives: ['2', '3', '4'],
        correctAnswer: 0
    };

function showQuestion(q) {
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = q.title;

    let alts = document.querySelectorAll('.alternative');
    alts.forEach(function(element, index){

    element.textContent = q.alternatives[index];

    element.addEventListener('click', function(){
        //! Check if the answer chosen is the corect one //!
        if(q.correctAnswer == index) {
            console.log('Correct Answer!');
        }
        else {}
        console.log('Wrong Answer!');

    });
    


});
}
showQuestion(question);

let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    console.log('CLICKED!')
});

var score = 0;


for(var i=0; 1 < questions.length; i++) {
    var response = window.prompt(questions[i].prompt)
    if (response == question[i].answer){
        score++;
        alert('correct');
    } else {
        alert'(WRONG!');
    }
    }
alert('You got' + score + '/' + questions.length;)