#!/usr/bin/env node
import chalk from'chalk';
import boxen from 'boxen';

// Define options for Boxen
const options = {
  padding: 2,
  borderStyle: 'double',
  margin: 1,
  titleAlignment: "center"
}


// Text + chalk definitions
const data = {
  name: chalk.hex("#c711ff").white('Hani && Yoel'),
  handle: chalk.bgHex('#c711ff').hex("#ffeb3b")('@hayo'),
  labelWork: chalk.hex("#c711ff").white.bold('      Work:'),
  work: chalk.white(`CEO's and Founders of`) + ' ' + chalk.bgHex('#c711ff').hex("#ffeb3b")('HAYO'),
  labelTwitter: chalk.hex("#c711ff").white.bold('   Twitter:'),
  twitter: chalk.bgHex('#c711ff').hex("#ffeb3b")('undefined'),
  labelGitHub: chalk.hex("#c711ff").white.bold('    GitHub:'),
  github: chalk.bgHex('#c711ff').hex("#ffeb3b")('https://github.com/hayodev/'),
  labelNPM: chalk.hex("#c711ff").white.bold('       NPM:'),
  npm: chalk.bgHex('#c711ff').hex("#ffeb3b")('https://www.npmjs.com/org/hayodev '),
  labelCard: chalk.hex("#c711ff").white.bold('      Card:'),
  labelEthos: chalk.hex("#c711ff").white.bold('     Ethos:'),
  ethos:chalk.bgHex('#11ff64').hex("#000000")('FREE PALESTINE🔻🍉'),
  npx: chalk.bgHex('#c711ff').hex("#ffeb3b")('npx @/hayodev/info'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${chalk.bgHex('#c711ff').hex("#ffeb3b")('/')}${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const npming = `${data.labelNPM}  ${data.npm}`
const ethosing = `${data.labelEthos}  ${data.ethos}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  githubing +
  newline +
  npming +
  newline +
  ethosing +
  newline +
  newline +
  carding 

console.log(chalk.green(boxen(output, options)))