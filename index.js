#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
// let fs = require('fs')

const path = require("path")
const { writeFileSync, readFileSync } = require("fs")



// let templates = require('./templates/templates.js')

var inquirer = require('inquirer');


// let appName = process.argv[2]
// let appDirectory = `${process.cwd()}/${appName}`

const CLEAN_CRA = 'Clean create-react-app';
const NETLIFE_STARTER = 'Netlife super awesome react starter';

const run = async () => {
  let folderName = await createProjectFolder();
  console.log('folderName', folderName);

  let projectType = await selectProjectType()
  console.log('projectType', projectType);
  if (projectType === CLEAN_CRA) {
    console.log('CRA');
    await createReactAppLauncher(folderName)


  }
  if (projectType === NETLIFE_STARTER) {
    console.log('NETLIFE');

    let success = await createNetlifeStarterAppLauncher(folderName)
    if(!success){
      console.log('Something went wrong while trying to create a new app using create-react-app'.red)
      return false;
    }
    await updateTemplates(folderName)
  }

  await installDepencensies(folderName)
  await updatePackageJson()
  await runGitCommit()


// TODO:
  //   - run storybook setup
// - install tests + husky
// - config
//   - package.json
//   - storybook




  console.log("All done".cyan)
}


const createProjectFolder = async () => {
  try {
    return inquirer
      .prompt([{
        type: 'input',
        name: 'folder',
        message: 'Folder name?',
        default: 'awesome-project-name'
      }])
      .then(({folder}) => folder);
  } catch (error) {
    return false
  }
}


const selectProjectType = async () => {
  try {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'projectType',
          message: 'What type of project do you need?',
          choices: [
            CLEAN_CRA,
            NETLIFE_STARTER,
          ]
        }
      ])
      .then(({projectType}) => {
        // console.log(projectType);
        return projectType
        // console.log(JSON.stringify(answers, null, '  '));
      });
  } catch (error) {
    return false
  }
}


const createNetlifeStarterAppLauncher = (folder) => {
  return new Promise(resolve=>{
    if(folder){
      shell.exec(`npx create-react-app ${folder}`, (code) => {
        console.log("Exited with code ", code)
        console.log("Created react app")
        resolve(true)
      })
    }else{
      console.log("\nNo app name was provided.".red)
      console.log("\nProvide an app name in the following format: ")
      console.log("\ncreate-react-redux-router-app ", "app-name\n".cyan)
      resolve(false)
    }
  })
}



const createReactAppLauncher = (folder) => {
  return new Promise(resolve=>{
    if(folder){
      shell.exec(`npx create-react-app ${folder}`, (code) => {
        console.log("Exited with code ", code)
        console.log("Created react app")
        resolve(true)
      })
    }else{
      console.log("\nNo app name was provided.".red)
      console.log("\nProvide an app name in the following format: ")
      console.log("\ncreate-react-redux-router-app ", "app-name\n".cyan)
      resolve(false)
    }
  })
}


const installDepencensies = async (folder) => {
  try {
    console.log(`cd into ${folder}`);
    shell.cd(folder)

    console.log(`running npm install`.red)
    await shell.exec('npm install')
    console.log(`running npm install husky`.red)
    await shell.exec('npm install husky')
  } catch (error) {
    return false
  }
}

const updatePackageJson = async () => {
  console.log('UPDATE PACKAGE JSON');
  const manifestFile = path.resolve('package.json')
  const manifest = await readFileSync(manifestFile)
  const json = JSON.parse(manifest.toString())

  json.scripts =  {
    start: 'react-scripts start',
    build: 'react-scripts build',
    "test:local": 'react-scripts test',
    test: 'CI=true react-scripts test'
  }

  json.husky = {
    "hooks": {
      "pre-push": "npm test",
    }
  }

  const data = JSON.stringify(json, null, 2)

  await writeFileSync(manifestFile, data)
}

const runGitCommit = async () => {
  console.log('Commit changes to package');
  await shell.exec('git add .')
  await shell.exec('git commit -m "Added husky and test commands to package.json"')
  console.log('Commit done');
}



const updateTemplates = async (folder) => {
  const appSrcFolder = `${folder}/src`
  try {
    console.log(`remove folder ${appSrcFolder}`)
    await shell.rm('-rf', appSrcFolder);

    console.log(`copy templates to ${appSrcFolder}`)
    await shell.cp('-R', 'templates/', appSrcFolder);

    console.log(`removing ${folder}/yarn.lock`)
    await shell.rm(`${folder}/yarn.lock`);

    console.log(`removing ${folder}/node_modules`)
    await shell.rm('-rf', `${folder}/node_modules`);

    // shell.cd(folder)

    // console.log(`running npm install`.red)
    // await shell.exec('npm install')

  } catch (error) {
    console.log('Noe gikk galt');
  }
}



run();