# NEXT
- make template project with
  - cra
  - stodybook
  - tests
  - primitives
- finnish the build
  - use the template that already exist
- install storybook



# TODO
- github pages
  - https://pages.github.com/
- create the perfect template... do a create-react-app and make it awesome!
  - see the template folder
    - default client app
    - sanity
    - next
    - next+sanity

- add tests for the scripts, to make sure that all is there
- check node version
  - if not - show what to do
      - or do it?

- storybook https://storybook.js.org/docs/guides/quick-start-guide/

- tests
- primitives?
- tailwind

- remember to validate input
  - foldername should have - or _

- remove eject script from package.json

- publish to npm
  - bump version
  - git tag
  - publish to npm



# What happens when running the app
- check node version
- check if there is a newer version of the script (for those that has installed it globally)
  <!--
  - help if wrong number
  - select installation options
    - use nvm - link
    - install yourself
  - "this will install nvm" - link
    - y/n?
  - install correct node and set it
  -->
- folder name
  - remember to validate
- select type
  - default react project
  - sanity
  - next
  - next+sanity
- select styling
  - basic scss
  - bootstrap
  - foundation
  - tailwind
  - none - set it up yourself

- run create-react-app / or based on type
- install template based on selected type
  - primitives
  - helpers/util
- clean up after cra - remove yarn.lock file etc.
- run storybook setup
- install tests + husky
- config
  - package.json
  - storybook
- add gitignore

// - intitate git
  // - info on how to push to github

- info about what next
  - link to webpage on what next
  - remember to initiate git
  - talk to a designer / UX





# For article - how I made my first npm package/module
- understand npm
- create a dummy package
- create a scaffolder script that runs cra
- test script blocks
  - moving files
  - updateing files
  - listen for user input
- put things together



# Start

Main project - `npm-test-starter-milosz`

### Running the script

`node index.js`

### Publish to npm

1. update package.json version
2. `npm release major | minor | patch`
3. run `npm publish`


# Documentation
[A guide to creating a NodeJS command-line package](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

[npm-package.json](https://docs.npmjs.com/files/package.json.html)

[Create react app git](https://github.com/facebook/create-react-app/blob/master/packages/create-react-app/createReactApp.js)

[An easy to understand scaffolding script](https://github.com/chrisjpatty/create-react-redux-router-app)

[shelljs - terminal commands in node](https://github.com/shelljs/shelljs)

[Terminal animations](https://github.com/sindresorhus/ora)

[Node temrinal prompt](https://nodejs.org/api/readline.html)

[Terminal select from list](https://alligator.io/nodejs/interactive-command-line-prompts/)


# NPM

For the lazy one here is a bunch of videos on how to publish to npm [npm videos](https://www.youtube.com/playlist?list=PLQso55XhxkgBMeiYmFEHzz1axDUBjTLC6)


## installing npm

[How to register to npm](https://docs.npmjs.com/creating-a-new-npm-user-account)

- register to npmjs.com
- login in terminal `npm login` & `npm whoami`


## Creating a npm package

[Creating a npm package.json](https://docs.npmjs.com/creating-a-package-json-file)
To create a default package.json using information extracted from the current directory, use the npm init command with the --yes or -y flag. Initiate package.json `npm init --yes` or `npm init`


## How to release to npm
[Creating a module](https://docs.npmjs.com/creating-node-js-modules)

Create a basic package.json file

```
  {
    "name": "npm-test-starter-milosz",
    "version": "1.0.0",
    "description": "a simple test",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
      "test"
    ],
    "author": "Milosz Hygen <miloszhygen@gmail.com>",
    "license": "ISC"
  }
```

Create an `index.js` file with exports code

```
  exports.printMsg = function() {
    console.log("This is a message from the demo package");
  }
```

run `npm publish`

