var inquirer = require("inquirer");
var questions = require("./questions.js");
var clozeQuestions = require("./clozeQuestions.js");
var counter = 0;
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");



function askBasicCards() {
    if (counter < questions.length) {
        var question = new BasicCard(questions[counter].front, questions[counter].back)
        inquirer
            .prompt([
                {
                    type: "input",
                    message: question.front,
                    name: "front",
                },
            ]).then(function (answer) {
                // console.log(answer);
                // { front: 'dom p' }
                if (counter === 9) {
                    // break;
                    console.log("Game over")
                } else if (answer.front === question.back) {
                    console.log("Correct!")
                    counter++;
                    askBasicCards();
                    // console.log(counter)
                } else if (answer.front != question.back) {
                    console.log("Wrong! The correct answer was " + question.back)
                    counter++;
                    askBasicCards();
                    // console.log(counter)
                }
            });
    };
};

// askBasicCards();





function askClozeCards() {
    if (counter < clozeQuestions.length) {
        var clozeQ = new ClozeCard(clozeQuestions[counter].fulltext, clozeQuestions[counter].cloze)
        inquirer
            .prompt([
                {
                    type: "input",
                    message: clozeQ.partial,
                    name: "fulltext",
                },
            ]).then(function (answer) {
                // console.log(answer);
                // { fulltext: 'dom perignon' }
                if (counter === 9) {
                    // break;
                    console.log("Game over")
                } else if (answer.fulltext === clozeQ.cloze) {
                    console.log("Correct!")
                    counter++;
                    askClozeCards();
                    // console.log(counter)
                } else if (answer.fulltext != clozeQ.cloze) {
                    console.log("Wrong! The correct answer was " + clozeQ.cloze)
                    counter++;
                    askClozeCards();
                    // console.log(counter)
                }
            });
    };
};

// askClozeCards();


inquirer
    .prompt([
        {
            type: "list",
            message: "Which game would you like to play?",
            choices: ["Basic Card Game", "Cloze Card Game"],
            name: "pickGame",
        },
    ]).then(function (answer) {
        // console.log(answer);
        // { pickGame: 'Basic Card Game' }
        if (answer.pickGame === "Basic Card Game") {
            askBasicCards();

        } else if (answer.pickGame != "Cloze Card Game") {
            askClozeCards();

        }
    });
