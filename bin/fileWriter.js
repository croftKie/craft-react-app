import { writeFile } from "./util.js";
export function writer(fileArray, userResponse) {
    fileArray.forEach((item, index) => {
        writeFile(`${userResponse.cwd}/${userResponse.dir}${item.path}`, item.name, item.content);
    });
}
