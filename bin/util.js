import { writeFileSync } from "fs";
export function dirNameFromGitHubRepo(repoURL) {
    return repoURL.substring(repoURL.lastIndexOf("/") + 1, repoURL.lastIndexOf("."));
}
export const writeFile = async (filePath, fileName, content) => {
    writeFileSync(`${filePath}/${fileName}`, content);
};
