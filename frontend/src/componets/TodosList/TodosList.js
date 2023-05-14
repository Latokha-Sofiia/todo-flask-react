import TodoItem from '../TodoItem/TodoItem';
import style from './TodosList.module.css'
export default function TodosList(props) {

    return(
        <div className={style.wrapper}>
            {props.todos.map((todo, index) => (
                <TodoItem todo={todo} key={index}></TodoItem>
            ))}
        </div>
    )
}