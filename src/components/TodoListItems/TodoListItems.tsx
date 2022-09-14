import {Button, Checkbox, Input} from 'antd';
import React, {FC} from 'react';
import StoreTodoList from "../../store/storeTodoList";
import {observer} from "mobx-react-lite";
import TodoItem from "../TodoItem/TodoItem";

const TodoListItems = observer(({}) => {
    return (
        <>
            {StoreTodoList.todos.map(todo => <TodoItem todo={todo}/>)}
        </>
    );
});

export default TodoListItems;