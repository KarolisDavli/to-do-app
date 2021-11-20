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
      // new project UI
      projectItem.href = "hrefas";
      projectItem.innerHTML = `<a href=${hrefas}>${projectListItem.value}</a>`;
      projectList.append(projectItem);
      // new project items UI
      const todoList = document.createElement('section');
      todoList.innerHTML = `${projectListItem.value} list`;
      todoList.setAttribute('href', hrefas);
      todoList.className = 'project-content hide';
      
      console.log(todoList);
     

    
      projectListItem.value = '';


    

      createRemoveBtn(projectItem);
      navigate(hrefas);
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

// Navigate through projects
const navigate = (href) => {
  const anchor = Array.from(document.querySelectorAll('a'));
  anchor.forEach(i => {
    i.addEventListener('click', () => {
      let activeProjectSelector = href;
      console.log(activeProjectSelector);
      
      // Find active project and remove class
      let activeProject = document.querySelectorAll('nav-tabs li.active');

      // href link to separate page instead of tab
      console.log(activeProject);
    })


  })
  console.log(anchor);
  // console.log(href);
}


export {
  addProject,
  projectListArr
  
}
