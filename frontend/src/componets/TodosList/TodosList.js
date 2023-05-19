import TodoItem from '../TodoItem/TodoItem';
import style from './TodosList.module.css'

export default function TodosList(props) {
    return(
        <div className={style.wrapper}>
            {props.todos.length ? 
                props.todos.map((todo, index) => (
                    <TodoItem todo={todo} key={index} index={index} id={todo.id} moveTodo={props.moveTodo} column={props.column}></TodoItem>
                ))
                : <TodoItem todo={null} key={0} index={0} id={null} moveTodo={props.moveTodo} column={props.column} /> 
            }

        </div>
    )
}
