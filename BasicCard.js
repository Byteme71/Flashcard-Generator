var inquirer = require("inquirer");
var questions = require("./questions.js")
module.exports = BasicCard;
var counter = 0;


function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}


// function askBasicCards() {
//     if (counter < questions.length) {
//         var question = new BasicCard(questions[counter].front, questions[counter].back)
//         inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     message: question.front,
//                     name: "front",
//                 },
//             ]).then(function (answer) {
//                 // console.log(answer);
//                 // { front: 'dom p' }
//                 if (counter === 9) {
//                     // break;
//                     console.log("Game over")
//                 } else if (answer.front === question.back) {
//                     console.log("Correct!")
//                     counter++;
//                     askBasicCards();
//                     // console.log(counter)
//                 } else if (answer.front != question.back) {
//                     console.log("Wrong! The correct answer was " + question.back)
//                     counter++;
//                     askBasicCards();
//                     // console.log(counter)
//                 }
//             });
//     };
// };

// askBasicCards();
