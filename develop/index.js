const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: CODE GOES HERE
const firstQuest = {
  type: 'list',
  message: 'What role would you like to add',
  choices: ['Manager', 'Engineer', 'Intern'],
  name: 'whatRole',
}
const managerQuest = [{

}]

const engineerQuest = [{}]
const internQuest = [{}]

const whatRole = function () {
  inquirer.prompt(firstQuest).then(function (answers) {
    if (answers.whatRole === 'Manager') {
      managerQuestions()
    }
    if (answers.whatRole === 'Engineer') {
      engineerQuestions()
    }
    if (answers.whatRole === 'Intern') {
      internQuestions()
    }
  })
}
