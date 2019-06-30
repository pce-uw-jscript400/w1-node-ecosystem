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

* **Your Answer:**
Forking is making a copy of a repository. After cloning your forked repo, any commits will be against the copy. Cloning a repository means that any commits will be against the original repo.
---

- [ ] Run `npm init -y` from the command line

* **Question:** What does `npm init` do? How does the `-y` flag modify that command?

* **Your Answer:**
`npm init` created package.json file and then `-y` automatically filled out the contents (made some good assumptions)
---

- [ ] Take a look at the file that was generated by the previous command

* **Question:** What is the purpose of the following keys? "name", "scripts", "license"

* **Your Answer:**
name - name of the app/project, scripts - any scripts used to help run the app, license - it's a license!
---

- [ ] Create a `.gitignore` file

* **Question:** What is the purpose of the `.gitignore` file? What is the significance of a "dot-file?"

* **Your Answer:**
A file that lists files that you want git to ignore. A dot file is a hidden file.
---

- [ ] Create an `index.js` file with the following contents: `console.log('Hello, Node!')`

* **Question:** From the command line, how can you run this file?

* **Your Answer:**
`node index.js`
---

- [ ] Run `npm test` from the command line

* **Question:** What happens and how is this related to what is in the `package.json` file?

* **Your Answer:**

`> w1-node-ecosystem@1.0.0 test /Users/charlotte.west/js_cert/js-course-3/w1-node-ecosystem
> echo "Error: no test specified" && exit 1

Error: no test specified
npm ERR! Test failed.  See above for more details.`

The test script isn't set up in the scripts section of package.json. Whatever string is in the package.json script section will get run. In this case an echo command.
---

- [ ] Create a new "script" command called "start" that has the following value: `node index.js`

* **Question:** What will you enter on the command line to run that script?

* **Your Answer:**
`npm start`
---

- [ ] Change the name of your "start" script to "my-file"

* **Question:** The same pattern will not work to try and run this script. How can you successfully get this script to run?

* **Your Answer:**
`npm run my-file`
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
'charlotte' - because we exported the string from the profile.js file and imported it into our index file. Then when we ran our start command (which runs the index.js file) it does what we asked it to do in profile.js

* **Question:** What is `module.exports` and what is its _type_ in JavaScript? What is `require` and what is its _type_ in JavaScript?

* **Your Answer:**
`module.exports` -
`require` - It's a function that takes a string that is a path to a file.
---

- [ ] We can only export one thing from files when using Node. With that said, export both your name and your birthday from the `profile.js` file.

* **Question:** What are some ways you can solve this problem?

* **Your Answer:**
We can export both variables as an array
---

- [ ] Add the following to your `index.js` file. Then, run your file.
  ```js
  const path = require('path')
  console.log(path.resolve())
  ```

* **Question:** What is `path` and where does it come from?

* **Your Answer:**
Path is a built in node module.
---

- [ ] Install the [moment](https://www.npmjs.com/package/moment) package

* **Question:** What command can you run to install this package?

* **Your Answer:**
`npm i moment`
---

- [ ] On your own, use this package in the `index.js` file

* **Question:** Do you need to use a `./` to require the package? Why or why not?

* **Your Answer:**
Not if it's within the node_modules folder. Node will automatically check that folder.
---

- [ ] Move your `profile.js` file into a `src/` folder. Update the path in your `index.js` file to ensure everything continues to work.

#### Resources

- [Node.js Built-In Modules](https://nodejs.org/dist/latest-v12.x/docs/api/)
- [NPM: Moment](https://www.npmjs.com/package/moment)
