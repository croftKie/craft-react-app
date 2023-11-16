export interface userResponse {
  usingGithub: boolean;
  usingRedux: boolean;
  usingRouter: boolean;
  cwd: string;
  dir: string;
  gitHubRepo: string;
}

export interface fileArray {
  name: string;
  path: string;
  content: string;
}
