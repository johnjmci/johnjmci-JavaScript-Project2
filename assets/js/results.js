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


var messages = ["Regional Manager - You're the cream of the crop and those around you look to you for leadership and inspiration.", "Assistant to the Regional Manager - The top of the career ladder is in touching distance. You're the leader's right hand person and the place wouldn't run like clockwork without you.", "Sales Rep - You're the backbone of the office, you keep smashing those sales tagets. There's some room for growth and perhaps a prmotion though.", "Temp - You have a lot to learn. You have some knowledge but you need to try your best to upskill and become the asset you can be to the office.", "Intern - Must try harder! Unless you're Michael's nephew, your days in the office could be numbered."];
var scoreRange;
if (mostRecentScore == 0) {scoreRange = 4}
if (mostRecentScore == 10) {scoreRange = 3}
if (mostRecentScore == 20) {scoreRange = 3}
if (mostRecentScore == 30) {scoreRange = 3}
if (mostRecentScore == 40) {scoreRange = 2}
if (mostRecentScore == 50) {scoreRange = 2}
if (mostRecentScore == 60) {scoreRange = 2}
if (mostRecentScore == 70) {scoreRange = 1}
if (mostRecentScore == 80) {scoreRange = 1}
if (mostRecentScore == 90) {scoreRange = 1}
if (mostRecentScore == 100) {scoreRange = 0}


document.getElementById("feedbackMessage").innerHTML = messages[scoreRange];