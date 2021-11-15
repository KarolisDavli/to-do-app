import browseP from "./browseP"

const addToProjectList = document.querySelector('#add-to-project-list');
const projectListItem = document.querySelector('#project-list-item');
const projectList = document.querySelector('.project-list');


const projectListArr = [];

const addProject = () => {
    // Listen for new project
    addToProjectList.addEventListener('submit', (e) => {
      e.preventDefault();
      if(projectListItem.value.length < 1) return;

      const divItemas = document.createElement('div');
      projectListArr.push(divItemas);
      divItemas.classList.add(`project-item-${projectListArr.indexOf(divItemas)}`);
      divItemas.innerHTML = projectListItem.value;

      
      projectList.append(divItemas);
      projectListItem.value = '';


      // Switch between project tabs
      divItemas.addEventListener('click', browseP);
    

      createRemoveBtn(divItemas);
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


export {
  addProject,
  projectListArr
}
