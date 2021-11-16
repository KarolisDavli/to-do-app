import { projectListArr } from "./addProject";

// To do ul list
const todoPlaceHolder = document.querySelector('.todo-list');

const browseP = (e) => {

  const index = projectListArr.indexOf(e);
  console.log(index);

  const toDoList = document.createElement('ul');
  toDoList.classList.add(`todo-list`);
  todoPlaceHolder.replaceWith(toDoList);
  console.log(toDoList);

}

export default browseP;