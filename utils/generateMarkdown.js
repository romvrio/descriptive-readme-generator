// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data.Title}

  ## Description 
  ${data.Description}
  
  ## Languages 
  ${data.Languages}

  ## Table Of Contents
  ${data.Table}
  1.#Installation
  2.#Opperate
  3.#Contributors

  ## Installation
  ${data.Installation}

  ## Opperate
  ${data.Opperate}

  ## Contributors
  ${data.Contributors}


`;
}

module.exports = generateMarkdown;
