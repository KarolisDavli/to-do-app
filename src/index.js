import "./styles/styles.css"

// Content elements
const listsContainer = document.querySelector('[data-lists]')
const newListFrom = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]')
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const tasksContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('what')

console.log(taskTemplate);

const LOCAL_STORAGE_LIST_KEY = 'tasks.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'tasks.selectedListId'

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

listsContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId
    saveAndRender();
  }
})

deleteListButton.addEventListener('click', e => {
  lists = lists.filter(list => list.id !== selectedListId)
  selectedListId = null
  saveAndRender()
})


newListFrom.addEventListener('submit', e => {
  e.preventDefault()
  const listName = newListInput.value
  if (listName == null || listName === '') return
  const list = createList(listName)
  newListInput.value = null
  lists.push(list)
  saveAndRender()
})

function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [{
    id: 'kas',
    name: 'Sitas',
    complete: false
  }] }
}

function saveAndRender() {
  save()
  render()
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}

function render() {
  clearElement(listsContainer)
  renderList()
  const selectedList = lists.find(list => list.id === selectedListId)

  if (selectedListId == null) {
    listDisplayContainer.style.display = 'none'
  } else {
    listDisplayContainer.style.display = ''
    listTitleElement.innerHTML = selectedList.name
    renderTaksCount(selectedList)
    clearElement(tasksContainer)
    renderTasks(selectedList)
  }
}


function renderTasks(selectedList) {
  selectedList.tasks.forEach(task => {
    const taskElement = document.importNode(taskTemplate.content, true)
    const checkbox = taskElement.querySelector('input')
    checkbox.id = task.id
    checkbox.checked = task.complete
    const label = taskElement.querySelector('label')
    label.htmlFor = task.id
    label.append(task.name)
    tasksContainer.appendChild(taskElement)
  })
}

function renderTaksCount(selectedList) {
  const incompleteTasksCount = selectedList.tasks.filter(task => !task.complete).length
  const taskString = incompleteTasksCount === 1 ? "task" : "tasks"
  listCountElement.innerText = `${incompleteTasksCount} ${taskString} remaining`
}

function renderList() {
  lists.forEach(list => {
    const listElement = document.createElement('li')
    listElement.dataset.listId = list.id
    listElement.classList.add('list-item')
    listElement.innerHTML = list.name
    if (list.id === selectedListId) {
      listElement.classList.add('active')
    }
    listsContainer.appendChild(listElement)
  })
}


function clearElement(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}


render()

