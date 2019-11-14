# This module is created for testing purposes! The real thing is coming soon :)

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
[shelljs cheatsheet](https://devhints.io/shelljs)

[Terminal animations](https://github.com/sindresorhus/ora)

[Node temrinal prompt](https://nodejs.org/api/readline.html)

[Terminal select from list](https://alligator.io/nodejs/interactive-command-line-prompts/)

[Run create react test once](https://stackoverflow.com/questions/39724017/running-cra-jest-in-non-interactive-mode)



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

