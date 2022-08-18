// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const userInput = [
    {
      type: "input",
      message: "What is the title?",
      name: "title",
    },
    {
      type: "input",
      message: "Description:",
      name: "description",
    },
    {
      type: "input",
      message: "Installation:",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage:",
      name: "usage",
    },
    {
      type: "input",
      message: "Contributing:",
      name: "contributing",
    },
    {
        type: "input",
        message: "Tests:",
        name: "tests",
      }
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("Success!")
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(userInput)
    .then(function (answers) {
        writeToFile("README.md", generateMarkdown(answers))
    })
};

// Function call to initialize app
init();
