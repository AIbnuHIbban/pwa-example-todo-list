document.addEventListener('DOMContentLoaded', () => {
    let todoInput = document.getElementById('todoInput');
    let addBtn = document.getElementById('addBtn');
    let todoList = document.getElementById('todoList');

    // Function to refresh the todo list from the database
    function refreshTodos() {
        // Clear the current list
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }

        // Fetch todos from the database and append to the list
        getAllTodosFromDB().then(todos => {
            todos.forEach(todo => {
                let listItem = document.createElement('li');
                listItem.textContent = todo.title;
                todoList.appendChild(listItem);
            });
        });
    }
    
    dbReady.then(() => {
        refreshTodos();
        addBtn.addEventListener('click', () => {
            // Save the new todo to the database
            addTodoToDB({ title: todoInput.value }).then(() => {
                // Clear the input
                todoInput.value = '';

                // Refresh the todo list
                refreshTodos();
            });
        });
    });
});

// register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function() {
            console.log('Service Worker Registered');
        });
    });
}
