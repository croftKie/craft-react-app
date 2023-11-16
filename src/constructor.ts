import fs from "fs";
import {
  gitHubCloner,
  packageInstaller,
} from "./initialiser.js";

import {
  usingGitPrompt,
  usingReduxPrompt,
  usingRouterPrompt,
  nameProjectAndFetchRepoLink,
} from "./questions.js";
import { directories } from "./assets.js";
import { userResponse } from "./interface.js";



export async function constructApplicationData() {
  const userResponse: userResponse = {
    usingGithub: false,
    usingRedux: false,
    usingRouter: false,
    cwd: "",
    dir: "",
    gitHubRepo: "",
  };

  userResponse["usingGithub"] = await usingGitPrompt();
  const { cwd, gitRepo, dir } = await nameProjectAndFetchRepoLink(
    userResponse.usingGithub
  );
  userResponse["usingRedux"] = await usingReduxPrompt();
  userResponse["usingRouter"] = await usingRouterPrompt();

  userResponse["cwd"] = cwd;
  userResponse["gitHubRepo"] = gitRepo;
  userResponse["dir"] = dir;

  return userResponse;
}

// Fire above command functions
export function constructApplicationSkeleton(userResponse: userResponse) {
  const completePath = userResponse.cwd + `/${userResponse.dir}`;
  if (userResponse.usingGithub) {
    gitHubCloner(userResponse);
  } else {
    fs.mkdirSync(completePath);
  }

  directories.forEach((dir: string)=>{
    fs.mkdirSync(`${completePath}/${dir}`)
  });
}

export function constructReduxDirectory(userResponse: userResponse){
  if (userResponse.usingRedux){
    fs.mkdirSync(`${userResponse.cwd}/${userResponse.dir}/src/redux`);
  }
}