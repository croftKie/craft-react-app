import { writeFileSync } from "fs";

export function dirNameFromGitHubRepo(repoURL: string) {
  return repoURL.substring(
    repoURL.lastIndexOf("/") + 1,
    repoURL.lastIndexOf(".")
  );
}

export const writeFile = async(filePath: string, fileName: string, content: string) =>{
  writeFileSync(`${filePath}/${fileName}`, content);
}