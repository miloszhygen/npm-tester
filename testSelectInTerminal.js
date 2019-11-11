#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
const readline = require('readline');
const inquirer = require('inquirer');

// let templates = require('./templates/templates.js')

// let appName = process.argv[2]
// let appDirectory = `${process.cwd()}/${appName}`




const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Whats the project name? ', (answer) => {
  // TODO: Log the answer in a database

  // REGEX only A-Z a-z -_
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});



// :::NEXT lets user propt project name
// - let user select project type
// - add heading and color



// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'reptile',
//       message: 'Which is better?',
//       choices: ['alligator', 'crocodile'],
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.reptile);
//   });



// function initiateSelector(params) {
//   console.log('hello');
  
// }
// initiateSelector()