#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let templates = require('./templates/templates.js')

let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`

/*
  - propt user for project name

  - check node version
    - if not - show what to do

  - storybook https://storybook.js.org/docs/guides/quick-start-guide/

  - tests
  - primitives?
  - tailwind


*/


const run = async () => {
  let success = await createReactApp()
  if(!success){
    console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
    return false;
  }
  await cdIntoNewApp()
  // await installPackages()
  await updateTemplates()
  console.log("All done")
}

const createReactApp = () => {
  return new Promise(resolve=>{
    if(appName){
      shell.exec(`npx create-react-app ${appName}`, (code) => {
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







const cdIntoNewApp = () => {
  return new Promise(resolve=>{
    shell.cd(appDirectory)
    console.log(`cd into ${appDirectory}`)
    resolve()
  })
}



const updateTemplates = () => {
  return new Promise(resolve=>{
    let promises = []
    Object.keys(templates).forEach((fileName, i)=>{
      promises[i] = new Promise(res=>{
        fs.writeFile(`${appDirectory}/src/${fileName}`, templates[fileName], function(err) {
            if(err) { return console.log(err) }
            res()
        })
      })
    })
    Promise.all(promises).then(()=>{resolve()})
  })
}



run();