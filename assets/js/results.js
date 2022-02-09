const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;


/*   feedback message to player based on final score 
100 = Regional Manager
70 to 90 = Assistant to the Regional Manager
40 to 60 = Sales Representative
10 to 30 = Temp
0 = Intern
*/


var messages = ["Regional Manager", "Assistant to the Regional Manager", "Sales Rep", "Temp", "Intern"];
var scoreRange;
if (mostRecentScore == 10) {scoreRange = 4}
if (mostRecentScore == 20) {scoreRange = 4}
if (mostRecentScore == 30) {scoreRange = 4}

document.getElementById("feedbackMessage").innerHTML = messages[scoreRange];