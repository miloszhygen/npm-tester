# NEXT
- github pages
x create a release script that bumps version, creates a git tag and publish to npm
- make template project with
  - cra
  - stodybook
  - tests
  - primitives
- finnish the build
  - use the template that already exist
- install storybook
  - https://github.com/netliferesearch/imdi-design-system
  - use the `template-netlife-storybook` project


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
- add tests to the scaffold project - not the project that is scaffolded
x remove eject script from package.json

- publish to npm
  - bump version
  - git tag
  - publish to npm

x run git commit after all scaffolding is done to add latest changes to package json

- create a good readme on every project types
  - what have to be done!
  - how to start
  - how to test
  - how to use storybook
  - what is used
  - link to docs

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
