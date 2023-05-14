import style from './TodosTable.module.css'
import TodosList from '../TodosList/TodosList'
import CreateTodo from '../CreateTodo/CreateTodo'

export default function TodosTable(props) {

    const openTodos = props.todos.filter((item) => {
        return item.state === 'open' 
    })

    const inProgressTodos = props.todos.filter((item) => {
        return item.state === 'progress' 
    })

    const doneTodos = props.todos.filter((item) => {
        return item.state === 'done' 
    })

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

            <div className={style.wrapperTodos}>
                <TodosList todos={openTodos}></TodosList>
                <TodosList todos={inProgressTodos}></TodosList>
                <TodosList todos={doneTodos}></TodosList>
            </div>
        </div>
    )
}
