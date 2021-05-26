// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   // function to render license badge
// };

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   // function to render license link
// };

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   // function to render license section
// }

// License is automatically displayed when user selects and adds the LICENSE file to their repo

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  //function to generate markdown here
  return `# ${userInput.title}
  ## Project Description
  ${userInput.description}
  ## Table of Contents
  * [Installation](#installation)  
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [License](#license)
  * [Credits](#credits)
  * [Questions](#questions)

  ## Installation 
  ${userInput.installationNotes}
  ## Usage
  ${userInput.usageInfo}
  ## Contributions
  ${userInput.contributionNotes}
  ## Tests 
  ${userInput.testInstructions}
  ## License
  This project is licensed with the ${userInput.license} license.
  ## Credits
  ${userInput.creditInfo}
  ## Questions
  GitHub username: [${userInput.github}](http://www.github.com/${userInput.github})

  For any questions or queries, please email me here: [${userInput.email}](mailto:${userInput.email})`
};

//export module for use in 
module.exports = generateMarkdown;