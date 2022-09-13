const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
let team = []
// TODO: CODE GOES HERE
const firstQuest = {
  type: 'list',
  message: 'What role would you like to add',
  choices: ['Manager', 'Engineer', 'Intern', 'No more Roles'],
  name: 'whatRole',
}
const managerQuest = [
  {
    type: 'input',
    message: 'What is the managers name?',
    name: 'mngrName',
  }, {
    type: 'input',
    message: 'What is the managers email?',
    name: 'mngrEmail',
  }
  , {
    type: 'input',
    message: 'What is the managers ID?',
    name: 'mngrId',
  }
  , {
    type: 'input',
    message: 'What is the managers office number?',
    name: 'mngrOffice',
  }
]

const engineerQuest = [{
  type: 'input',
  message: 'What is the engineers name?',
  name: 'engName',
}, {
  type: 'input',
  message: 'What is the engineers email?',
  name: 'engEmail',
}
  , {
  type: 'input',
  message: 'What is the engineers ID?',
  name: 'engId',
}
  , {
  type: 'input',
  message: 'What is the eningeers ID?',
  name: 'engGit',
}
]
const internQuest = [{
  type: 'input',
  message: 'What is the interns name?',
  name: 'inName',
}, {
  type: 'input',
  message: 'What is the interns email?',
  name: 'inEmail',
}
  , {
  type: 'input',
  message: 'What is the interns ID?',
  name: 'ingId',
}
  , {
  type: 'input',
  message: 'What is the interns school?',
  name: 'inSchol',
}]


const managerQuestions = function (answers) {
  inquirer.prompt(managerQuest).then((answers) => {
    const manager = new Manager(answers.mngrName, answers.mngrId, answers.mngrEmail, answers.mngrOffice)
    console.log(manager)
    team.push(manager)
    whatRole()
  })
}
const engineerQuestions = function (answers) {
  inquirer.prompt(engineerQuest)
    .then(function () {
      const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGit)
      console.log(engineer)
      team.push(engineer)
      whatRole()
    })
}
const internQuestions = function (answers) {
  inquirer.prompt(internQuest)
    .then(function () {
      const Intern = new Intern(answers.inName, answers.inId, answers.inEmail, answers.inGit)
      console.log(Intern)
      team.push(Intern)
      whatRole()
    })
}
const returnHome = function () {
  fs.writeFileSync(``)
}
const whatRole = function () {
  inquirer.prompt(firstQuest).then((answers) => {
    if (answers.whatRole === 'Manager') {
      managerQuestions()
    }
    if (answers.whatRole === 'Engineer') {
      engineerQuestions()
    }
    if (answers.whatRole === 'Intern') {
      internQuestions()
    } else {
      returnHome()
    }
  })
}
whatRole()