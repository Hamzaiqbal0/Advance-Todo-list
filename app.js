#! /usr/bin/env node
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var condition = true;
var _loop_1 = function () {
    var ans = await inquirer_1.default.prompt([
        {
            name: "select",
            type: "list",
            message: "select an operation",
            choices: ["add", "update", "view", "delete", "exit"],
        },
    ]);
    if (ans.select === "add") {
        var addTodo = await inquirer_1.default.prompt({
            name: "todo",
            type: "input",
            message: "add items in the list",
            validate: function (input) {
                if (input.trim() == "") {
                    return "please enter a non-empty Item.";
                }
                return true;
            }
        });
        if (addTodo.todo.trim() !== "") {
            todos.push(addTodo.todo);
            todos.forEach(function (todo) { return console.log(todos); });
        }
    }
    if (ans.select === "update") {
        var updateTodo_1 = await inquirer_1.default.prompt({
            name: "todo",
            type: "list",
            message: "update itemd in the list",
            choices: todos.map(function (item) { return item; })
        });
        var addtodo = await inquirer_1.default.prompt({
            name: "todo",
            type: "input",
            message: "add items in the list",
        });
        var newTodo = todos.filter(function (val) { return val !== updateTodo_1.todo; });
        console.log(todos);
    }
    if (ans.select === "view") {
        console.log("******** TO-DO LIST ********");
        todos.forEach(function (todo) { return console.log(todo); });
    }
    if (ans.select === "delete") {
        var deleteTodo_1 = await inquirer_1.default.prompt({
            name: "todo",
            type: "list",
            message: "select item to delete",
            choices: todos.map(function (item) { return item; })
        });
        var newTodo = todos.filter(function (val) { return val !== deleteTodo_1.todo; });
        todos = __spreadArray([], newTodo, true);
        todos.forEach(function (todo) { return console.log(todo); });
    }
    if (ans.select === "exit") {
        console.log("Exiting Program...");
        condition = false;
    }
};
while (condition) {
    _loop_1();
}
