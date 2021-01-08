// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "Please enter the TITLE of the application: ",
    "Please enter the DESCRIPTION of the application: ",
    "Please enter the INSTALLATION INSTRUCTIONS of the application: ",
    "Please enter the USAGE INFORMATION of the application: ",
    "Please enter the CONTRIBUTION GUIDELINES of the application: ",
    "Please enter the TEST INSTRUCTIONS of the application: ",
    "Please choose the LICENSE for your application: ",
    "Please enter your Github USERNAME: ",
    "Please enter your EMAIL: " 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init()
inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        {
            type: "input",
            message: questions[1],
            name: "description"
        },
        {
            type: "input",
            message: questions[2],
            name: "installation"
        },
        {
            type: "input",
            message: questions[3],
            name: "usage"
        },
        {
            type: "input",
            message: questions[4],
            name: "contributing"
        },
        {
            type: "input",
            message: questions[5],
            name: "tests"
        },
        {
            type: "list",
            message: questions[6],
            name: "license"
        },
        {
            type: "input",
            message: questions[7],
            name: "githubUsername"
        },
        {
            type: "input",
            message: questions[8],
            name: "email"
        },
    ])
    .then(answers => {
        const tempString = JSON.stringify(answers, null, 2);
        fs.writeFile(`${answers.name}.txt`, tempString, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });}

// Function call to initialize app
init();
