import React from 'react';
import classes from './Header.module.scss'
import Filter from "../Filter/Filter";

const Header = () => {
    return (
        <header className={classes.header}>
            <h2>Todo List</h2>
            <Filter/>
        </header>
    );
};

export default Header;