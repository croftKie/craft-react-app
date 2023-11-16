import { spawnSync } from "child_process";
export function packageInstaller(userResponse, cmd) {
    spawnSync("npm", [cmd], {
        cwd: `${userResponse.cwd}/${userResponse.dir}/`,
        shell: true,
        stdio: "inherit",
    });
}
// Initialise Github repo clone command (if result object features true value)
export function gitHubCloner(userResponse) {
    spawnSync("git", [`clone ${userResponse.gitHubRepo}`], {
        cwd: String(userResponse.cwd),
        shell: true,
        stdio: "inherit",
    });
}
