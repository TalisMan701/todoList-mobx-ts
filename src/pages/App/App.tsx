import TodoAdd from "../../components/TodoAdd/TodoAdd";
import classes from './App.module.scss'
import TodoListItems from "../../components/TodoListItems/TodoListItems";
import Header from "../../components/Header/Header";

function App() {
    return (
        <div className={classes.container}>
            <Header/>
            <TodoAdd/>
            <TodoListItems/>
        </div>
    )
}

export default App
