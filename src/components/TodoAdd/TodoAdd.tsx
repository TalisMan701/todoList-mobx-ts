import React from 'react';
import classes from "./TodoAdd.module.scss"
import {Button, Col, Input, Row} from "antd";
import {observer} from "mobx-react-lite";
import StoreTodoList from "../../store/storeTodoList";

const TodoAdd = observer(() => {
    return (
        <div className={classes.container}>
            <Input
                placeholder='Что хотите сделать?'
                value={StoreTodoList.newTodo}
                onChange={(e)=>StoreTodoList.newTodo = e.target.value}
            />
            <Button onClick={() => StoreTodoList.addTodo()}>Создать</Button>
        </div>
    );
});

export default TodoAdd;