import { projectListArr } from "./addProject";

const browseP = (e) => {

  console.log(projectListArr);

  const index = projectListArr.indexOf(e);
  console.log(index);

}

export default browseP;