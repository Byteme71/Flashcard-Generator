var inquirer = require("inquirer");
var clozeQuestions = require("./clozeQuestions.js");
module.exports = ClozeCard;
var counter = 0;

function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.fulltext = text;
    this.partial = text.replace(cloze, ".....");
}


