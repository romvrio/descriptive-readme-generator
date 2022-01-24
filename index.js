// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { title } = require('process');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'Title',
                message: 'Enter your project title: (required)',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('You must enter a title for your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'Description',
                message: 'Add a desctiption of your project:',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('You must add description of the project!')
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'Languages',
                message: 'What languages were used to make this project?',
                choices: ['JavaScript', 'Python', 'Java', 'C++', 'PHP', 'SQL', 'Other...']
            },
            {
                type: 'input',
                name: 'Table',
                message: 'Add a table of contents?(optional)',
                validate: tableConfirm => {
                    if (tableConfirm) {
                        return true;
                    } else {
                        console.log('are you sure you dont want to add a table of contents?')
                        return false;
                    }
                }
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
                message: 'Give a list of GitHub usernames who contributed to the project: '
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

