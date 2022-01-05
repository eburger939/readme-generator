// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Provide a short description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What were the steps required to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use:',
        name: 'instructions',
    },
    {
         type: 'list',
         message: 'What licenses does your project have?',
         name: 'license',
         choices: ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache LIcense 2.0', 'MIT License'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('Success')
    })
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    const fileName = 'README.md';
    }
}

// Function call to initialize app
init();
