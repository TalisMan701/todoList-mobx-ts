import React, {FC} from 'react';
import classes from './TodoItem.module.scss'
import {Button, Checkbox, Input} from "antd";
import StoreTodoList from "../../store/storeTodoList";
import {ITodo} from "../../models/ITodo";
import {observer} from "mobx-react-lite";
import clsx from "clsx";

interface PropsTodoItem {
    todo: ITodo
}

const TodoItem: FC<PropsTodoItem> = observer(({todo}) => {
    const draw = StoreTodoList.filter === 'all' || (StoreTodoList.filter === "completed" && todo.completed) || (StoreTodoList.filter === "notCompleted" && !todo.completed)
    if(!draw) return null
    return (
        <div className={clsx(classes.container, todo.completed && classes.completed)} key={todo.id}>
            <Checkbox checked={todo.completed} onClick={()=> todo.completed = !todo.completed}/>
            <Input disabled={todo.completed} value={todo.value} onChange={(e)=> todo.value = e.target.value}/>
            <Button onClick={() => StoreTodoList.removeTodo(todo.id)}>Удалить</Button>
        </div>
    );
});

export default TodoItem;