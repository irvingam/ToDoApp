// Selectores
const todoInput = document.querySelector('.todo_input');
const addBtn = document.querySelector('.add_btn');
const todoList = document.querySelector('.todo_list');

// Event Listeners
addBtn.addEventListener('click', addtodo);
document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {addtodo();}
});
todoList.addEventListener('click', deleteCheck);

// Functions

function addtodo(event) {
    // Create Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // Create List
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo_list");
    todoDiv.appendChild(newTodo);
    
    // Check Button
    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-check-square"></i>';
    checkButton.classList.add('checkBtn');
    todoDiv.appendChild(checkButton);
    
    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('deleteBtn');
    todoDiv.appendChild(deleteButton);
    
    // Add to List
    todoList.appendChild(todoDiv);
    
    // CLear Input
    todoInput.value = "";
    
}

function deleteCheck(e) {
    const item = e.target;
    console.log(e.target);
    
    // Delete todo
    if(item.classList[0] === 'deleteBtn') {
        const todo = item.parentElement;
        todo.remove();
    }
    
    // Check todo
    if(item.classList[0] === 'checkBtn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
