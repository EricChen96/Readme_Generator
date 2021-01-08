// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    // "Apache License 2.0", "ISC License", "GNU GPLv2.0", "GNU GPLv3.0", "MIT License"
    case "Apache License 2.0":
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case "ISC License":
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case "GNU GPLv2.0":
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case "GNU GPLv3.0":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case "MIT License":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    // "Apache License 2.0", "ISC License", "GNU GPLv2.0", "GNU GPLv3.0", "MIT License"
    case "Apache License 2.0":
      return '[Link to Apache License v2.0](https://opensource.org/licenses/Apache-2.0)';
      break;
    case "ISC License":
      return '[Link to ISC License](https://opensource.org/licenses/ISC)';
      break;
    case "GNU GPLv2.0":
      return '[Link to GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case "GNU GPLv3.0":
      return '[Link to GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case "MIT License":
      return '[Link to MIT License](https://opensource.org/licenses/MIT)';
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const year = 2021;
function renderLicenseSection(license) {
  switch (license) {
    // "Apache License 2.0", "ISC License", "GNU GPLv2.0", "GNU GPLv3.0", "MIT License"
    case "Apache License 2.0":
      return `  Copyright ${year} [name of copyright owner]

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
          http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;
      break;
    case "ISC License":
      return `Copyright (c) ${year}, [fullname]

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted, provided that the above
      copyright notice and this permission notice appear in all copies.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
      WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
      MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
      ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
      WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
      ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
      OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
      break;
    case "GNU GPLv2.0":
      return `Copyright (C) ${year}  <name of author>

      This program is free software; you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation; either version 2 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License along
      with this program; if not, write to the Free Software Foundation, Inc.,
      51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.`;
      break;
    case "GNU GPLv3.0":
      return `Copyright (C) ${year}  <name of author>

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
      break;
    case "MIT License":
      return `MIT License

      Copyright (c) ${year} [fullname]
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`;
      break;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  # ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.githubUsername}
  ${data.email}


`;
}

module.exports = generateMarkdown;
