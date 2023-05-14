import { useState } from 'react';
import style from './CreateTodo.module.css';

export default function CreateTodo(props) {
    const [ inputValue, setInputValue ] = useState('')

    const onInput = (e) => {
        setInputValue(e.target.value);
    }

    const onClickAddTodo = () => {
        props.addTodo(inputValue)
    }

    return(
        <div className={style.wrapper}>
            <div className={style.inputWrapper}>
                <input onInput={onInput} className={style.todoInput} placeholder="Введите ToDo"/>
                <div onClick={onClickAddTodo} className={style.addTodo}>+</div>
            </div>
        </div>
    )
}