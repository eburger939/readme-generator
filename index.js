// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type: 'input',
    //     message: 'What is your GitHub username?',
    //     name: 'username',
    // },
    // {
    //     type: 'input',
    //     message: 'What is your email address?',
    //     name: 'email',
    // },
    // {
    //     type: 'input',
    //     message: 'What is the title of your project?',
    //     name: 'title',
    // },
    // {
    //     type: 'input',
    //     message: 'Please provide a description of your project:',
    //     name: 'description',
    // },    
    {
         type: 'list',
         message: 'What licenses does your project have?',
         name: 'license',
         choices: ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'None'],
    },
    // {
    //     type: 'input',
    //     message: 'What command line should be run to install dependencies?',
    //     name: 'install',
    // }, 
    // {
    //     type: 'input',
    //     message: 'What (if any) tests can be run?',
    //     name: 'tests',
    // },  
    // {
    //     type: 'input',
    //     message: 'What does the user need to know about your project?',
    //     name: 'user',
    // },     
    // {
    //     type: 'input',
    //     message: 'What contributions can be made?',
    //     name: 'contributors',
    // },    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        err ? console.log(err) : console.log('Generating README file...')
   
    })
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    const fileName = 'README.md';
    writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();
