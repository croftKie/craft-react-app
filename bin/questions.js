import inquirer from "inquirer";
import { dirNameFromGitHubRepo } from "./util.js";
// Defines input question for Github usage
export async function usingGitPrompt() {
    const question = await inquirer.prompt({
        name: "selection",
        type: "confirm",
        message: "Are you using a Github Repo?",
    });
    return question.selection;
}
// Defines input question for Redux usage
export async function usingReduxPrompt() {
    const question = await inquirer.prompt({
        name: "selection",
        type: "confirm",
        message: "Would you like to include Redux Toolkit?",
    });
    return question.selection;
}
export async function usingRouterPrompt() {
    const question = await inquirer.prompt({
        name: "selection",
        type: "confirm",
        message: "Would you like to include React Router?",
    });
    return question.selection;
}
// Manages top level inputs and returns completed result object
export async function nameProjectAndFetchRepoLink(usingGit) {
    let dir;
    let repoURL;
    if (usingGit) {
        const question = await inquirer.prompt({
            name: "selection",
            type: "input",
            message: "What is the GitHub repo URL you wish to clone?",
        });
        repoURL = question.selection;
        dir = dirNameFromGitHubRepo(repoURL);
    }
    else {
        const question = await inquirer.prompt({
            name: "selection",
            type: "input",
            message: "What is the name of your new React App?",
        });
        repoURL = null;
        dir = question.selection;
    }
    return {
        cwd: process.cwd(),
        gitRepo: repoURL,
        dir: dir,
    };
}
