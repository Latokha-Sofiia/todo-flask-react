import { useEffect, useState } from 'react'
import TodosTable from "../../componets/TodosTable/TodosTable"
import style from './TodoPage.module.css'


export default function TodoPage() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/todos')
            .then(r => r.json())
            .then(r => setTodos(r))
    }, [])

    const addTodo123 = () => {
        fetch('http://127.0.0.1:5000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                title: 'from front'
            })
        })
    }

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

    return <div className={style.wrapper}>
        <TodosTable todos={todos} addTodo={addTodo}></TodosTable>
    </div>
}

