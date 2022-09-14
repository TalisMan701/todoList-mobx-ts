import React from 'react';
import classes from './Filter.module.scss'
import {Option} from "antd/es/mentions";
import {Select} from "antd";
import StoreTodoList from "../../store/storeTodoList";
import {observer} from "mobx-react-lite";

const Filter = observer(() => {
    const handleChangeSelect = (value: 'all' | 'completed' | 'notCompleted') => StoreTodoList.filter = value
    return (
        <>
            <Select onChange={handleChangeSelect} value={StoreTodoList.filter}>
                <Option value='all'>Все</Option>
                <Option value='completed'>Выполненные</Option>
                <Option value='notCompleted'>Невыполненные</Option>
            </Select>
        </>
    );
});

export default Filter;