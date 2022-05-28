import * as utilities from './utilities.js';
import * as localStorage from './ls.js';


export default class Todos{
    constructor(list){
        this.todoslist= [];
    }
}

export function saveTodo(){
    localStorage.setLocalStorage(this.todosList);
}

export function getListTodos(){
    localStorage.getLocalStorage(this.todosList, utilities.todoTemplate);
}

export function addTodo(){
    utilities.addTodo();
}







