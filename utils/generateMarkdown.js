// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {

// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${data.title}

  # Description
  ${data.description}

  # License
  ${renderLicenseBadge(data.license)}
  `;
}

export default generateMarkdown;
