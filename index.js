// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter your project title: (required)'
            },
            {
                type: 'input',
                name: 'descrtiption',
                message: 'Add a desctiption of your project:'
            }
        ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const markdown = generateMarkdown(data);


    fs.writeFile('./README.md', markdown, err => {
        if (err) throw new Error(err);

        console.log('Readme complete! Check out README.md to see the output!');
    });
}


// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();

