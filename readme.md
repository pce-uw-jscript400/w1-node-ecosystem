# Setting up a Project with Node

Welcome to JSCRIPT 400 - Server Side Development with JavaScript

During class, we will be using repositories like these to develop skills and solidify concepts. I would recommend reading through the instructions _before_ coming to class to prime yourself to the material.

Part of your homework assignment for each class will be to make a Pull Request against this repository. Your Pull Request should include answers to any questions in this document.

As we work together on this during class, I would encourage you to make comments next to code we write. Explain what is happening in your own words so that later you have those notes as a reference.

## Core Learning Objective

*	Use NodeJS APIs to interact with files and the web

## Sub-Objectives

* Setup a basic NPM project
* Run your project from the command line with scripts
* Export and require your own files
* Require and use core Node libraries
* Install, require, and use packages from the web

### Prereqs

To complete this lesson, make sure that `node` and `npm` is installed and can be run from the command line. My versions of each are as follows:

```bash
$ node -v
v12.2.0

$ npm -v
6.9.0
```

### Instructions & Guiding Questions

- [ ] Fork & Clone this repository

* **Question:** What is the difference between forking and cloning a repository as opposed to just cloning a repository?

* **Your Answer:** A fork is a copy of a repository that allows you to experiment with changes without affecting the original project. Cloning makes a local repo that is not connected to the original repo. 

- [ ] Run `npm init -y` from the command line

* **Question:** What does `npm init` do? How does the `-y` flag modify that command?

* **Your Answer:** Create a package.json file. -y generate it without having it ask any questions.

- [ ] Take a look at the file that was generated by the previous command

* **Question:** What is the purpose of the following keys? "name", "scripts", "license"

* **Your Answer:** 'Name' is the name of the project folder. 'Scripts' - a list of various commands like npm start, npm stop, npm restart etc. 'License' - an open source license you might be using.

- [ ] Create a `.gitignore` file

* **Question:** What is the purpose of the `.gitignore` file? What is the significance of a "dot-file?"

* **Your Answer:** A dot file indicates a hidden file. A .gitignore file is where you list any other files you want gut to ignore (large files, API key)

- [ ] Create an `index.js` file with the following contents: `console.log('Hello, Node!')`

* **Question:** From the command line, how can you run this file?

* **Your Answer:** node index.js

- [ ] Run `npm test` from the command line

* **Question:** What happens and how is this related to what is in the `package.json` file? 

* **Your Answer:** Will run tests specified in the scripts section in the package.json file. We get an error as per file. 

- [ ] Create a new "script" command called "start" that has the following value: `node index.js`

* **Question:** What will you enter on the command line to run that script?

* **Your Answer:** npm start

- [ ] Change the name of your "start" script to "my-file"

* **Question:** The same pattern will not work to try and run this script. How can you successfully get this script to run?

* **Your Answer:** npm run my-file

- [ ] Create a new file called `profile.js`. Inside the file, copy the following but replace `<your-name>` with your name:
  ```js
  module.exports = '<your-name>'
  ```

  Add the following to your `index.js` file. Then, run your file.
  ```js
  const profile = require('./profile.js')
  console.log(profile)
  ```

* **Question:** What gets logged? Why?

* **Your Answer:** 
Hello, Node!
Katrina
As per profile.js

* **Question:** What is `module.exports` and what is its _type_ in JavaScript? What is `require` and what is its _type_ in JavaScript?

* **Your Answer:** `module.exports` is an object (exported from profile.js). `require` is a function.

- [ ] We can only export one thing from files when using Node. With that said, export both your name and your birthday from the `profile.js` file.

* **Question:** What are some ways you can solve this problem?

* **Your Answer:** Create an array.

- [ ] Add the following to your `index.js` file. Then, run your file.
  ```js
  const path = require('path')
  console.log(path.resolve())
  ```

* **Question:** What is `path` and where does it come from?

* **Your Answer:** It's the path/folder structure of the file. It comes from the node module by default.

- [ ] Install the [moment](https://www.npmjs.com/package/moment) package

* **Question:** What command can you run to install this package?

* **Your Answer:** npm install moment

- [ ] On your own, use this package in the `index.js` file

* **Question:** Do you need to use a `./` to require the package? Why or why not?

* **Your Answer:** No, it is in the `node_modules` folder

- [ ] Move your `profile.js` file into a `src/` folder. Update the path in your `index.js` file to ensure everything continues to work.

#### Resources

- [Node.js Built-In Modules](https://nodejs.org/dist/latest-v12.x/docs/api/)
- [NPM: Moment](https://www.npmjs.com/package/moment)