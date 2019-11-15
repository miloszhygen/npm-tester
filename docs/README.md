
<!-- IMAGE/GIF -->

## Running the script using npx (recommented)
```
npx npm-test-starter-milosz

# follow the instructions
```

## Installing the script globally
```
npm -g npm-test-starter-milosz

# follow the instructions
```

## How the script works
The script is ment as a helper for scaffolding different types of projects. The scaffolded project is bare minimum of a project and it is up to the developer to populate it properly.

The script adds:
- tests
- [storybook](https://storybook.js.org/)
- primitives
- preset styling (or none of chosen)


## The different project types
- `Clean create-react-app` sets up a basic [create react app](https://github.com/facebook/create-react-app) for you. It also adds husky that runs tests on all `git push`

- `Netlife super awesome react starter` sets up a basic app with [storybook](https://storybook.js.org/), tests (unit, integration tests), and primitives.


## After the script is finished running
This script creates the base for a project in any size. It is now up to the developers, designers, ux, managers etc to use this base accordingly.

Look at the primitives using the storybook, how do they look, are they ok, what changes needs to be done?

Are you missing any primitives?

How is the userflow? Should you add some kind of routing?

What about a global state? (redux etc?)