let db;
const dbReady = new Promise((resolve, reject) => {
    const request = indexedDB.open("todoDB", 1);

    request.onupgradeneeded = function (event) {
        db = event.target.result;
        const objectStore = db.createObjectStore("todos", {
            keyPath: "id",
            autoIncrement: true
        });

        objectStore.createIndex("title", "title", {
            unique: false
        });
    };

    request.onerror = function (event) {
        console.log("Kenapa ga di allow IndexedDB?!");
        reject(event);
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        resolve();
    };
});

function addTodoToDB(todo) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["todos"], "readwrite");
        const objectStore = transaction.objectStore("todos");
        const request = objectStore.add(todo);

        request.onsuccess = function (event) {
            console.log("Todo added to database.");
            resolve();
        };

        request.onerror = function (event) {
            console.log("Unable to add todo to database.");
            reject(event);
        };
    });
}

function getAllTodosFromDB() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["todos"], "readonly");
        const objectStore = transaction.objectStore("todos");
        const request = objectStore.getAll();

        request.onsuccess = function (event) {
            const todos = request.result;
            resolve(todos); // Resolve with the todos
        };

        request.onerror = function (event) {
            console.log("Unable to retrieve todos from database.");
            reject(event);
        };
    });
}