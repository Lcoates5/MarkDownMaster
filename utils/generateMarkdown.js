// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
// }
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

function renderLicenseBadge(license) {
  const licensebadges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GNU': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
  };
  if (licensebadges[license]) {
    return licensebadges[license];
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Badges](#badges)
  * [Features](#features)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Badges
  ${data.badges}
  
  ## Features
  ${data.features}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). 
  You can find more of my work at [${data.github}](https://github.com/${data.github}).
  `;
};

export default generateMarkdown;
