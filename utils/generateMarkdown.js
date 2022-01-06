// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'GNU AGPLv3':
     return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'Apache License 2.0':
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'MIT License':
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    default: return ""
  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'GNU AGPLv3':
     return `This project is licensed by GNU AGPLv3`;
    case 'Mozilla Public License 2.0':
      return `This project is licensed by Mozilla Public License 2.0`;
    case 'Apache License 2.0':
    return `This project is licensed by Apache License 2.0`
    case 'MIT License':
    return `This project is licensed by MIT`
    default: return ""
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


<a id="desc"></a>
## Description
${data.description}

## Table of Contents
[ Description ](#desc) <br/>
[ Installation ](#install)<br/>
[ Usage ](#usage)<br/>
[ License ](#license)<br/>
[ Contributing ](#contrib)<br/>
[ Test ](#test)<br/>
[ Questions ](#quest)<br/>




<a id="install"></a>
## Installation
${data.install}

<a id="usage"></a>
## Usage
${data.user}

<a id="license"></a>
## License
${renderLicenseSection(data.license)}


<a id="contrib"></a>
## Contributing
${data.contributors}

<a id="test"></a>
## Test
${data.test}

<a id="quest"></a>
## Questions
Contact information:<br/>
GitHub Account: ${data.username}<br/>
Email: ${data.email}<br/>

`;
}

module.exports = generateMarkdown;
