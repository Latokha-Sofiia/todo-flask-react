import { useEffect, useState } from 'react'
import TodosTable from "../../componets/TodosTable/TodosTable"
import style from './TodoPage.module.css'

export default function TodoPage() {
    const [todos, setTodos] = useState([[], [], []])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/todos')
            .then(r => r.json())
            .then(r => {
                setTodos(r)
            })
    }, [])

    const addTodo = (todoTitle) => {
        fetch('http://127.0.0.1:5000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                title: todoTitle
            })
        })
            .then(r => r.json())
            .then(r => setTodos(r))
    }

    const moveTodo = (fromIndex, fromColumn, endIndex, endColumn) => {
        fetch('http://127.0.0.1:5000/todos/change', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                fromIndex: fromIndex,
                fromColumn: fromColumn,
                endIndex: endIndex,
                endColumn: endColumn
            })
        })
            .then(r => r.json())
            .then(r => setTodos(r))
    }

    return (
        <div className={style.wrapper}>
            <TodosTable todos={todos} addTodo={addTodo} moveTodo={moveTodo}></TodosTable>
        </div>
    )
}

