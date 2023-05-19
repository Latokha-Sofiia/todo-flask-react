import NotesBlock from "../NotesBlock/NotesBlock";
import styles from './RightPanel.module.css'

export default function RightPanel() {
    return (
        <div className={styles.wrapper}>
            <NotesBlock />
        </div>
    )
}