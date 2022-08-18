// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
const fs = require("fs");

// TODO: Create a function to write README file
const writeToFile = {(title, description, installation, usage, contributing, testsInput)} => `
    #${title}
    ##${description}
    ##${installation}
    ##${usage}
    ##${contributing}
    ##
`
// TODO: Create an array of questions for user input
inquirer
  .prompt([
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
      name: "testsInput",
    },
  ])
  .then((response) => {
    fs.writeFile("README.md", writeToFile(response), (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
