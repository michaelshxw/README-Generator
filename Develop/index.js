// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
const inquirerRecursive = require('inquirer-recursive');

// Welcome message

const welcome = {
    type: 'confirm',
    message: "Welcome to my README.md generator! You will be presented with serveral options for your README's sections and their contents. To begin, select 'Y' or enter.",
    name: 'welcome'
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        //Reference: https://www.edureka.co/blog/javascript-email-validation/
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: function validateEmailFunction(email) {
            let validateEmail = email.match(/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/);
            if (validateEmail) {
                return true;
            } else {
                return 'Please enter a valid email address';
            };
        },
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description',
    },
    {
        type: 'confirm',
        message: 'Would you like to enter any installation notes?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter your installation notes',
        name: 'installationNotes',
        when: function installationInput(input) {
            return input.installation;
            console.log(input.installation);
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to enter any usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter your usage information',
        name: 'usageInfo',
        when: function usageInput(input) {
            return input.usage;
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to enter any contribution notes?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please enter your contribution notes',
        name: 'contributionNotes',
        when: function contributionInput(input) {
            return input.contribution;
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to enter any instructions for running tests?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Please enter your test instructions',
        name: 'testInstructions',
        when: function testInput(input) {
            return input.test;
        }
    },
    {
        type: 'list',
        message: 'Which license does your project use?',
        name: 'license',
        choices: [
            'MIT',
            'GPLv2',
            'GPLv3',
            'Apache 2.0',
            'BSD 2-clause',
            'BSD 3-clause',
            'LGPLv3',
            'AGPLv3',
            'Unlicense'
        ]
    },
    {
        type: 'confirm',
        message: 'Would you like to add any credits to your project?',
        name: 'credit',
    },
    {
        type: 'input',
        message: 'Please enter your credits',
        name: 'creditInfo',
        when: function creditInput(input) {
            return input.credit;
        }
    },
    {
        type: 'recursive',
        message: 'Would you like to add any credits to your project?',
        name: 'creditsRepeat',
        prompts: {
            type: 'input',
            message: 'Please enter your credits',
            name: 'creditInfoRepeat',
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //function to write README.md here
    
}

// TODO: Create a function to initialize app
function init() {
    //function to initialise app here
}

// Function call to initialize app
init();



