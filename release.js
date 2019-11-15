#!/usr/bin/env node

/*

  # Release script

  This script bumpes the package.json version and creates a tag, then pushes the tag.

  When tagging is done the script does a npm releases

  The script takes three version type argument [major | minor | patch] that updates the version accordingly

  major: X.0.0
  minor: 0.X.0
  patch: 0.0.X

  `node release.js major | minor | patch`

  If no version type is provided, it does a patch release

  ## USAGE:

  `npm run deploy major | minor | patch`

  ## DOCS:

  ### Update package version
  [npm update package version](https://docs.npmjs.com/updating-your-published-package-version-number)

  ### Adding tag
  [Docs on how to work with tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

  ### Releasing to npm
  [Releasing to npm](https://docs.npmjs.com/creating-node-js-modules)

*/



let shell = require('shelljs');
let colors = require('colors')
let spitt = require('./helpers/logger')


const PATCH = 'patch';
let versionType = process.argv[2]


const releseToNpm = () => {
  const version = versionType ? versionType : PATCH;
  // Doing a npm version also creates a tag
  spitt('\n**** Intitiating release script ****\n'.cyan)
  spitt(`npm version ${version}`)
  shell.exec(`npm version ${version}`);

  spitt('Pushing new tag');
  shell.exec(`git push --tags`);

  spitt('Publishing to npm');
  shell.exec(`npm publish`);

  spitt('\n**** DONE ***\n'.cyan);
}



releseToNpm();