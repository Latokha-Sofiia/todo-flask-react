import style from "./DndTodos.module.css";
import TodosList from "../TodosList/TodosList";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export default function DndTodos(props) {
    const openTodos = props.todos[0]

    const inProgressTodos = props.todos[1]

    const doneTodos = props.todos[2]

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.wrapperTodos}>
                <TodosList todos={openTodos} moveTodo={props.moveTodo} column={0}></TodosList>
                <TodosList todos={inProgressTodos} moveTodo={props.moveTodo} column={1}></TodosList>
                <TodosList todos={doneTodos} moveTodo={props.moveTodo} column={2}></TodosList>
            </div>
        </DndProvider>
    )
}
