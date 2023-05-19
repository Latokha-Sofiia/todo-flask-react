import style from "./DndTodos.module.css";
import TodosList from "../TodosList/TodosList";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export default function DndTodos(props) {
    const openTodos = props.todos.filter((item) => {
        return item.state === 'open'
    })

    const inProgressTodos = props.todos.filter((item) => {
        return item.state === 'progress'
    })

    const doneTodos = props.todos.filter((item) => {
        return item.state === 'done'
    })

    const moveTodo = (dragIndex, hoverIndex, dragColumn, hoverColumn) => {
        console.log('fromIndex ', dragIndex)
        console.log('fromColumn ', dragColumn)
        console.log('endIndex ', hoverIndex)
        console.log('endColumn ', hoverColumn)
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.wrapperTodos}>
                <TodosList todos={openTodos} moveTodo={moveTodo} column={0}></TodosList>
                <TodosList todos={inProgressTodos} moveTodo={moveTodo} column={1}></TodosList>
                <TodosList todos={doneTodos} moveTodo={moveTodo} column={2}></TodosList>
            </div>
        </DndProvider>
    )
}
