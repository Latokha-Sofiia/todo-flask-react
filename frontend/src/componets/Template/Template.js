import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import RightPanel from "../RightPanel/RightPanel";
import styles from './Template.module.css'

// Компонент обёртка для каждой страницы
export default function Template() {
    return (
        <div className={styles.wrapper}>
            <Sidebar></Sidebar>
            {/*Компонент для отображения отдельной страницы*/}
            <div className={styles.main_content}>
                <Outlet />
            </div>
            <RightPanel></RightPanel>
        </div>
    )
}