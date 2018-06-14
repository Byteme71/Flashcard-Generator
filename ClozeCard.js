var inquirer = require("inquirer");
var clozeQuestions = require("./clozeQuestions.js");
module.exports = ClozeCard;
var counter = 0;

function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.fulltext = text;
    this.partial = text.replace(cloze, ".....");
}

// var clozeQ = new ClozeCard(clozeQuestions[counter].fulltext, clozeQuestions[counter].cloze)

// console.log(clozeQ.partial);




// function askClozeCards() {
//     if (counter < clozeQuestions.length) {
//         var clozeQ = new ClozeCard(clozeQuestions[counter].fulltext, clozeQuestions[counter].cloze)
//         inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     message: clozeQ.partial,
//                     name: "fulltext",
//                 },
//             ]).then(function (answer) {
//                 // console.log(answer);
//                 // { fulltext: 'dom perignon' }
//                 if (counter === 9) {
//                     // break;
//                     console.log("Game over")
//                 } else if (answer.fulltext === clozeQ.cloze) {
//                     console.log("Correct!")
//                     counter++;
//                     askClozeCards();
//                     // console.log(counter)
//                 } else if (answer.fulltext != clozeQ.cloze) {
//                     console.log("Wrong! The correct answer was " + clozeQ.cloze)
//                     counter++;
//                     askClozeCards();
//                     // console.log(counter)
//                 }
//             });
//     };
// };

// askClozeCards();


