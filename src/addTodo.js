

const addTodo = () => {
  // Listen for new project
  const addToTodoList = document.getElementById('add-to-todo-list');
  const todoListItem = document.querySelector('#todo-list-item');
  const todoList = document.querySelector(`.todo-list`);



  addToTodoList.addEventListener('submit', function (e) {
    // Don't submit the form
    e.preventDefault();

    

    // Ignore it if the wishlist item is empty
    if(todoListItem.value.length < 1) return;

    // Add item to project list
    todoList.innerHTML += '<li>' + todoListItem.value + '</li>';
    // todoList.append(todoListItem.value);

    console.log(todoListItem.value);
    console.log(todoList);

    // Clear input
    todoListItem.value = '';
  }, false)
}

export default addTodo;