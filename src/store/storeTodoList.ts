import {ITodo} from "../models/ITodo";
import {makeAutoObservable} from "mobx";

class StoreTodoList {
    todos: ITodo[] = [];
    newTodo: string = '';
    filter: 'all' | 'completed' | 'notCompleted' = 'all';
    constructor() {
        makeAutoObservable(this);
    }

    addTodo(){
        this.todos = [
            ...this.todos,
            {
                id: Math.max(0, Math.max(...this.todos.map(({id}) => id))) + 1,
                value: this.newTodo,
                completed: false
            }
        ]
        this.newTodo = '';
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }
}

export default new StoreTodoList()