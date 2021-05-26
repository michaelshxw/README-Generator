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
  
  //license badge handler switch
  switch (userInput.license) {
    case 'MIT':
      badgeLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'GNU GPL v2':
      badgeLink = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      break;
    case 'GNU GPL v3':
      badgeLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)      `
      break;
    case 'Apache 2.0':
      badgeLink = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'BSD 2-clause':
      badgeLink = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
      break;
    case 'BSD 3-clause':
      badgeLink = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    case 'GNU LGPL v3':
      badgeLink = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
      break;
    case 'GNU AGPL v3':
      badgeLink = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
      break;
    case 'Unlicensed':
      badgeLink = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)      `
      break;
  };

  //function to generate markdown here
  return `# ${userInput.title}
  \n${badgeLink}\n\n---\n
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