var inquirer = require("inquirer");
var questions = require("./questions.js")
module.exports = BasicCard;
var counter = 0;


function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

