// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

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
    message: "Installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution guidelines:",
    name: "contributing",
  },
  {
    type: "input",
    message: "Test instructions:",
    name: "tests",
  },
  {
    type: "input",
    message: "Github username:",
    name: "githubUserName",
  },
  {
    type: "input",
    message: "Github link:",
    name: "githubLink",
  },
  {
    type: "input",
    message: "Email:",
    name: "userEmail",
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license?',
    choices: ['MIT', 'Apache', 'GLP', 'BSD', 'None'],
  },
  {
    type: "input",
    message: "License explanation:",
    name: "licenseExp",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(userInput).then(function (answers) {
    writeToFile("./dist/README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
