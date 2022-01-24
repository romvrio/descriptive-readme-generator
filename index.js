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
                name: 'Title',
                message: 'Enter your project title: (required)'
            },
            {
                type: 'input',
                name: 'Description',
                message: 'Add a desctiption of your project:'
            },
            {
                type: 'input',
                name: 'Table',
                message: 'Add a table of contents?(option)'

            },
            {
                type: 'input',
                name: 'Installation',
                message: 'What required installs are needed to run your app as well as its dependencies?'
            },
            {
                type: 'input',
                name: 'Opperate',
                message: 'Provide instructions on how to use/opperate your project: '
            },
            {
                type: 'input',
                name: 'Contributors',
                message: 'Give a list of people who contributed to the project: '
            }


        ])
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const readmePageData = generateMarkdown(fileName, data);

    fs.writeFile('README.md', readmePageData, err => {
        if (err) throw new Error(err);

        console.log('Readme complete! Check out README.md to see the output!');
    });

}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(writeToFile);
}

// Function call to initialize app
init();

