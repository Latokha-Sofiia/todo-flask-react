import style from './Sidebar.module.css'
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className={style.wrapper}>
            <Link to={'/'} className={style.logoWrapper}>
                <img src="/images/logo.png"/>
                <span className={style.logoTitle}>TaskFlow</span>
            </Link>
            <div className={style.list}>
                <Link to={'/todos'} className={style.listItem}>
                    <img src='/images/todoListItem.png'/>
                    <span className={style.listItemText}>ToDo</span>
                </Link>
            </div>
        </div>
    )
}

