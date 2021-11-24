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


     
      
      projectListItem.value = '';


    

      createRemoveBtn(projectItem);
      navigate(hrefas);
      // createNewTab(projectItem);
    }, false)
}


// Remove button
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
    i.addEventListener('click', (e) => {
    e.preventDefault()

    // Find active and hide it
    hideShow();

    // new project items UI
    const newTodoList = document.createElement('ul');
    newTodoList.innerHTML = `${projectListItem.value} list`;
    newTodoList.setAttribute('id', href);
    newTodoList.className = 'todo-list active';

    // Project todo list UI
    const todoList = document.querySelector('.todo');
    todoList.append(newTodoList);


    

  })
})

}

const hideShow = () => {
    const activeNow = document.querySelectorAll('div.todo ul.active');
  
    activeNow.forEach.call(activeNow, function(el) {
      console.log(activeNow);
      el.classList.remove('active');
      el.classList.add('hide');
    });
  
}


export {
  addProject,
  projectListArr
  
}
