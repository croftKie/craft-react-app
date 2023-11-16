import { spawnSync } from "child_process";
import { userResponse } from "./interface.js";

export function packageInstaller(userResponse: userResponse, cmd: string) {
  spawnSync("npm", [cmd], {
    cwd: `${userResponse.cwd}/${userResponse.dir}/`,
    shell: true,
    stdio: "inherit",
  });
}

// Initialise Github repo clone command (if result object features true value)
export function gitHubCloner(userResponse: userResponse) {
  spawnSync("git", [`clone ${userResponse.gitHubRepo}`], {
    cwd: String(userResponse.cwd),
    shell: true,
    stdio: "inherit",
  });
}
