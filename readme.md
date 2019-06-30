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

* **Your Answer:** When you fork a repository, you duplicate the current state of a repository into a new repository. You take all of the files along and when you clone it, you will now commit changes against that new repository. A clone of a repository would mean you are developing against the repository and any changes would be committed to the original repo. 

---

- [ ] Run `npm init -y` from the command line

* **Question:** What does `npm init` do? How does the `-y` flag modify that command?

* **Your Answer:** `npm init` creates a new npm project/package. It will create a `package.json` file and prompt you to enter the appropriate information. The `-y` flag appears to initialize the package without requiring any user input. It creates the package with default values. 

---

- [ ] Take a look at the file that was generated by the previous command

* **Question:** What is the purpose of the following keys? "name", "scripts", "license"

* **Your Answer:** Name is the title of your package, scripts are a way to shorthand a CLI command or commands for the project, and license is for applying a license to your package that establishes the rules for reuse of your package.

---

- [ ] Create a `.gitignore` file

* **Question:** What is the purpose of the `.gitignore` file? What is the significance of a "dot-file?"

* **Your Answer:** `.gitignore` is used to flag to git that certain files should not be included in the repository and should therefore not be watched. A dot file is generally a hidden file in most operating systems. 

---

- [ ] Create an `index.js` file with the following contents: `console.log('Hello, Node!')`

* **Question:** From the command line, how can you run this file?

* **Your Answer:** `node index.js`

---

- [ ] Run `npm test` from the command line

* **Question:** What happens and how is this related to what is in the `package.json` file? 

* **Your Answer:** It runs the CLI command in the key:value pair for "test" under the scripts key in package.json. In this case, it echos the string and exits.

---

- [ ] Create a new "script" command called "start" that has the following value: `node index.js`

* **Question:** What will you enter on the command line to run that script? 

* **Your Answer:** `npm start`

---

- [ ] Change the name of your "start" script to "my-file"

* **Question:** The same pattern will not work to try and run this script. How can you successfully get this script to run?

* **Your Answer:** `npm run my-file`

---

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
``` js 
  Hello, Node!
  Colin Griffiths
```
  The imported value from the exported string is displayed as it is assigned to the variable profile. 

* **Question:** What is `module.exports` and what is its _type_ in JavaScript? What is `require` and what is its _type_ in JavaScript?

* **Your Answer:** `module.exports` is an object consisting of the encapsulated code to be made available to other modules. `require()` is a function that retrieves the specified package/module or file.  

---

- [ ] We can only export one thing from files when using Node. With that said, export both your name and your birthday from the `profile.js` file.

* **Question:** What are some ways you can solve this problem?

* **Your Answer:** make your `module.exports` an object consisting of key:value pairs for the variables you are attempting to export. 

---

- [ ] Add the following to your `index.js` file. Then, run your file.
  ```js
  const path = require('path')
  console.log(path.resolve())
  ```

* **Question:** What is `path` and where does it come from?

* **Your Answer:** `path` appears to be a function for obtaining the path of a file within the project file structure. 

---

- [ ] Install the [moment](https://www.npmjs.com/package/moment) package

* **Question:** What command can you run to install this package?

* **Your Answer:** `npm install moment`

---

- [ ] On your own, use this package in the `index.js` file

* **Question:** Do you need to use a `./` to require the package? Why or why not?

* **Your Answer:** No, not if the module is within the node_modules directory. Node defaults to checking that folder for a package first. 

---

- [ ] Move your `profile.js` file into a `src/` folder. Update the path in your `index.js` file to ensure everything continues to work.

#### Resources

- [Node.js Built-In Modules](https://nodejs.org/dist/latest-v12.x/docs/api/)
- [NPM: Moment](https://www.npmjs.com/package/moment)