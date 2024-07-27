// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown';
import { type } from 'os';

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
{
    type: "screenshot",
    name: "screenshot",
    message: "Please enter a screenshot of your project using the relative path."
},
{
    type: "input",
    name: "Installation",
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
    type: "input",
    name: "license",
    message: "Please enter the license for your project."
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
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
