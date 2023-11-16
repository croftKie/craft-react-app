#!/usr/bin/env node
import { constructApplicationData, constructApplicationSkeleton, constructReduxDirectory, } from "./constructor.js";
import { writer } from "./fileWriter.js";
import { writeFile } from "./util.js";
import { app_files, react_files, redux_files, text, packages, } from "./assets.js";
import { packageInstaller } from "./initialiser.js";
//
// Intro Text
console.log(text.intro[0]);
console.log(text.intro[1]);
//
// Question function call
const userResponse = await constructApplicationData();
//
// CLI Text Response
console.log(text.setName[0] + userResponse.dir);
console.log(text.setName[1]);
//
// Skeleton File Creation
await constructApplicationSkeleton(userResponse);
//
// Package.json Creation
writeFile(`${userResponse.cwd}/${userResponse.dir}`, "package.json", `{
  "name": "${userResponse.dir}",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {

  },
  "devDependencies": {
  }
}`);
//
// Run various package install commands
packageInstaller(userResponse, `install ${[...packages.dev].join(" ")} --save-dev`);
packageInstaller(userResponse, `install ${[...packages.prod].join(" ")}`);
//
// Write required files
writer(app_files, userResponse);
//
// If using Redux, construct folders and write files
if (userResponse.usingRedux && !userResponse.usingRouter) {
    installReduxMode();
}
else if (userResponse.usingRouter && !userResponse.usingRedux) {
    packageInstaller(userResponse, `install ${[...packages.router].join(" ")}`);
    writer(react_files, userResponse);
}
else if (userResponse.usingRedux && userResponse.usingRouter) {
    installReduxMode();
    packageInstaller(userResponse, `install ${[...packages.router].join(" ")}`);
}
else {
    writer(react_files, userResponse);
}
//
// Success Text
console.log(`${text.gitHubCheck[0]} ${userResponse.usingGithub}`);
console.log(`${text.ReduxToolkit[0]} ${userResponse.usingRedux}`);
console.log(`${text.ReactRouter[0]} ${userResponse.usingRouter}`);
console.log(`${text.complete[0]}`);
//
//
// UTIL WRITE FUNCTIONS FOR MODES
// To be abstracted away in next update.
function installReduxMode() {
    packageInstaller(userResponse, `install ${[...packages.redux].join(" ")}`);
    constructReduxDirectory(userResponse);
    writer(redux_files, userResponse);
}
