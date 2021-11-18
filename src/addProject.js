import addTodo from "./addTodo";
import browseP from "./browseP"

const addToProjectList = document.querySelector('#add-to-project-list');
const projectListItem = document.querySelector('#project-list-item');
const projectList = document.querySelector('.projects-nav');


const projectListArr = [];

const addProject = () => {
    // Listen for new project
    addToProjectList.addEventListener('submit', (e) => {
      e.preventDefault();
      if(projectListItem.value.length < 1) return;


      const navTabs = document.querySelectorAll('.nav-tabs');
      const projectItem = document.createElement('li');
      projectListArr.push(projectItem);
      const hrefas = `project-item-${projectListArr.indexOf(projectItem)}`;
      projectItem.href = "hrefas";
      projectItem.innerHTML = `<a href=${hrefas}>${projectListItem.value}</a>`;
      projectList.append(projectItem);
      
      console.log(hrefas);
      console.log(projectItem);

    
      projectListItem.value = '';


    

      createRemoveBtn(projectItem);
      // createNewTab(projectItem);
    }, false)
}

const createRemoveBtn = (el) => {
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = ('remove');
        removeBtn.id = ('remove-button');

        removeBtn.addEventListener('click', () => {
          projectListArr.splice(projectListArr.indexOf(el), 1);
          projectList.removeChild(el)
        })
        el.append(removeBtn);
}

// const createNewTab = (e) => {
//   const todoPlaceHolder = document.querySelector('.todo');

//   const toDoTab = document.createElement('ul');
//   toDoTab.classList.add(`list-${projectListArr.indexOf(e)}`);

//   todoPlaceHolder.replaceChild(toDoTab, todoPlaceHolder.firstElementChild);
//   console.log(toDoTab);

//   addTodo(projectListArr.indexOf(e));
// }


export {
  addProject,
  projectListArr
  
}
