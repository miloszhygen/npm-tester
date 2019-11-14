#!/usr/bin/env node
let shell = require('shelljs');
const path = require("path");
let colors = require('colors')


const package = require('./package.json')
const oldVersion = package.version
// console.log(package);

// Release script
// npm deploy patch | minor | major-> release.js bumps etc
// TODO:
// 0. check who is logged in - if not allowed return
// 1. bump version - see script for flex app
// 2. git tag
// 3. publish


// THIS :::> https://docs.npmjs.com/updating-your-published-package-version-number


// 1. update package.json version
// 2. `npm release major | minor | patch`
// 3. run `npm publish`



//*****

// npm version <update_type> -> also adds a tag to git
// npm publish


const PATCH = 'patch';



let versionType = process.argv[2]
console.log(versionType);


const releseToNpm = async () => {
  // const manifestFile = path.resolve('package.json')
  // const manifest = await readFileSync(manifestFile)
  // const json = JSON.parse(manifest.toString())
  // console.log(json);


  const version = versionType ? versionType : PATCH;



  try {
    console.log(`Updating package.json version | ${version}`);
    console.log(`npm version ${version}`);
    await shell.exec(`npm version ${version}`)

    console.log(`Updated pacakge from ${oldVersion} to ${package.version}`.blue);

    console.log(`Release to script to npm with version ${package.version}`);



    // await shell.exec(`npm publish`)



  } catch (error) {
    console.log('Something went wrong - no great success!');
  }
}



releseToNpm();