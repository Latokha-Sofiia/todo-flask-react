import style from './TodoItem.module.css'

export default function TodoItem(props) {
    return(
        <div className={style.wrapper}>
            <img src="/images/todoText.png"/>
            {props.todo.title}
        </div>
    )
}