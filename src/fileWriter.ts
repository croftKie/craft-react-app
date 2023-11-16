import { writeFile } from "./util.js";
import { fileArray, userResponse } from "./interface.js";
export function writer(fileArray: fileArray[], userResponse: userResponse) {
  fileArray.forEach((item: fileArray, index: number) => {
    writeFile(
      `${userResponse.cwd}/${userResponse.dir}${item.path}`,
      item.name,
      item.content
    );
  });
}
