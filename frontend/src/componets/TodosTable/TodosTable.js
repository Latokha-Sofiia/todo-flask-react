import style from './TodosTable.module.css'
import TodosList from '../TodosList/TodosList'
import CreateTodo from '../CreateTodo/CreateTodo'
import DndTodos from "../DndTodos/DndTodos";

export default function TodosTable(props) {



    return (
        <div className={style.wrapper}>
            <CreateTodo addTodo={props.addTodo}></CreateTodo>
            <div className={style.wrapperStates}>
                <div className={style.state}>
                    <div className={style.stateSqure} style={{backgroundColor: "#B8B7BE"}}></div>
                    <span>Open</span>
                </div>
                <div className={style.state}>
                    <div className={style.stateSqure} style={{backgroundColor: '#5577FF'}}></div>
                    <span>In progress</span>
                </div>
                <div className={style.state}>
                    <div className={style.stateSqure} style={{backgroundColor: '#00B884'}}></div>
                    <span>Done</span>
                </div>
            </div>

            <DndTodos todos={props.todos}></DndTodos>
        </div>
    )
}
