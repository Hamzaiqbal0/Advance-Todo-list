import inquirer from "inquirer"
let todos = [] = [];
let condition = true;

while(condition) {

let ans = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message:"select an operation",
        choices: ["add", "update", "view", "delete", "exit"],
        
},
    ]);
    
    if (ans.select === "add") {
let addTodo = await inquirer.prompt({
    name: "todo",
    type: "input",
    message: "add items in the list",
    validate: function (input) {
        if(input.trim() == "") {
            return "please enter a non-empty Item."
        }
        return true;
    }
})
if (addTodo.todo.trim() !== "") {
todos.push(addTodo.todo);
todos.forEach(todo => console.log(todos)
)
    }
}
if (ans.select === "update") {
    let updateTodo = await inquirer.prompt({
        name: "todo",
        type: "list",
        message: "update itemd in the list",
        choices: todos.map(item => item)
})
let addtodo = await inquirer.prompt({
    name: "todo",
    type: "input",
    message: "add items in the list",
})
let newTodo = todos.filter(val =>val !== updateTodo.todo);
console.log(todos);
}
if (ans.select === "view"){
    console.log("******** TO-DO LIST ********");
    todos.forEach(todo => console.log(todo)
)
}

if (ans.select === "delete"){
    let deleteTodo = await inquirer.prompt({
        name: "todo",
        type: "list",
        message: "select item to delete",
        choices: todos.map(item => item)
    })
    let newTodo = todos.filter(val =>val !== deleteTodo.todo);
    todos = [...newTodo];
    todos.forEach(todo => console.log(todo)
)
}
if (ans.select === "exit"){
    console.log("Exiting Program...");
    condition = false;
}
}
