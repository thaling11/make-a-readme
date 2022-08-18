// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
  return `![license](https://img.shields.io/badge/license-${license}-blue)`
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link (table of contents)
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License: `
  } else {
    return "";
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}
  
  
  ## Description: 
  ${data.description}
  
  ## Installation: 
  ${data.installation}
  
  ## Usage: 
  ${data.usage}
  
  ## Contributing: 
  ${data.contributing}
  
  ## Tests: 
  ${data.tests}
  
  ## Questions?
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  `;
}

module.exports = generateMarkdown;

