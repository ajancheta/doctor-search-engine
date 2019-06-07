# Medical Provider Search Engine

#### _JavaScript, Week 2 Independent Project, *06.07.2019*_

#### By _Ashley J. Ancheta_

## Description
An application to allow users to search health care providers in Portland, OR by the provider's name and by medical practice (diabetes, hypertension, dermatology, etc).

## Specs
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| User will search information by medical provider's name | Warhus | Damon Warhus / Women's Health Care Associates / |
| User will search providers by medical practice | Women's Health | Damon Warhus, Anna Karlsson, Diana Fitzpatrick | 
| All provider's information should include relavent contact information | Anna Karlsson | Phone Number: 5032247224 / Address: 2348 NW Lovejoy St Portland OR 97210 / Accepts new patients: Yes |

## Installation Requirements
* Download and install Node.js 12.3.1

## Setup Instructions for accessing the Application
* Clone this repository "https://github.com/ajancheta/medicalprovider-search-engine.git"
* A personal API key from BetterDoctor API is required to view this application. Request the key at https://developer.betterdoctor.com.
* Once you obtain your API key, within the `./src/search-engine.js` replace `"${process.env.exports.apiKey}" ` with your own API key.
* Open the repository in a preferred text editor such as Atom or Visual Studio Code.

To run the application, open your machine's terminal and type in the following commands within the main project directory

`npm install` This will allow the viewer of this project to have access to the CLI (command line interface) for webpack.

`npm run build`
This will automatically build the bundle once. The entry file is `./src/main.js`, with production ready code (minified).

`npm start`
This will watch the file changes in `./src` and automatically build the bundle with dev build (not minified). This is a continuous monitoring so to stop it just type the key combination `Ctrl + C` within the terminal.

## Known Bugs
There are no known bugs.

## Support and contact details
This application is best viewed on a full screen. Should any problems occur, discover other bugs, or experience issues with viewing, please contact me at ashleyjancheta@gmail.com

## Technologies Used
This application was built in Atom using JavaScript, Node.js 12.3.1, jQuery 3.4.1, Bootstrap v4.3.1 and a custom css file. For unit testing, Jasmine framework and Karma task runner are both used.

### License

*This software is licensed under MIT license.*

Copyright (c) 2019 **_Ashley J. Ancheta_**
