#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
// let templates = require('./templates/templates.js')

let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`


/*


*/


// var nodeExec = shell.which('node');
// console.log(nodeExec);




const createFolders = () => {
  return new Promise(resolve=>{
    shell.cd(appDirectory)
    console.log(`cd into ${appDirectory}`)
    resolve()
  })
}




const updateTemplates = async () => {
  try {
    await shell.rm('-rf', 'testApp/src');
    console.log(`remove into testApp/src`)

    await shell.cp('-R', 'templates/', 'testApp/src');
    console.log(`copy templates to testApp/src `)

  } catch (error) {
    console.log('Noe gikk galt');

  }


  // return new Promise(resolve=>{
  //   let promises = []

  //   return new Promise(resolve=>{
  //     shell.rm('-rf', 'testApp/src');
  //     console.log(`remove into testApp/src`)

  //     shell.cp('-R', 'templates/', 'testApp/src');
  //     console.log(`copy templates to testApp/src `)
  //     // shell.cd(appDirectory)
  //     // console.log(`cd into ${appDirectory}`)
  //     resolve()
  //   })


  //   // Object.keys(templates).forEach((fileName, i)=>{
  //   //   promises[i] = new Promise(res=>{
  //   //     fs.writeFile(`testApp/src/${fileName}`, templates[fileName], function(err) {
  //   //         if(err) { return console.log(err) }
  //   //         res()
  //   //     })
  //   //   })
  //   // })


  //   Promise.all(promises).then(()=>{resolve()})

  // })
}




updateTemplates();
