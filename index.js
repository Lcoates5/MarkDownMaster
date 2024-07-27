// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs, { write } from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "Please enter the title of your project."
},
{
    type: "input",
    name: "description",
    message: "Please enter a description of your project."
},
// {
//     type: "screenshot",
//     name: "screenshot",
//     message: "Please enter a screenshot of your project using the relative path."
// },
{
    type: "input",
    name: "installation",
    message: "Provide a step-by-step description of how to get the development environment running."
},
{
    type: "input",  
    name: "usage",
    message: "Provide instructions and examples for use, including screenshots."
},
{
    type: "input",
    name: "credits",
    message: "List your collaborators, if any, with links to their GitHub profiles."
},
{
    type: "list",
    name: "license",
    message: "Please enter the license for your project.",
    choices: ["MIT", "GNU", "Apache"]
},
{
    type: "input",
    name: "badges",
    message: "Please enter any badges you would like to include."
},
{
    type: "input",
    name: "features",
    message: "Do you have lots of features? Add them here!"
},
{
    type: "input",
    name: "contributing",
    message: "Would you like others to contribute to your project? Tell them how!"
},
{
    type: "input",
    name: "tests",
    message: "Please enter the tests for your project, with applicaple tests."
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
    if (err) console.log(err);
    console.log("Your README.md file has been generated in the Output folder!");
   })
}; 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
// console.log(data);
let readmeData = generateMarkdown(data);
console.log(readmeData);
writeToFile("./Output/README.md", readmeData);
    })
}

// Function call to initialize app
init();
