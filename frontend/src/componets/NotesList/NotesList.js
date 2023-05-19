import NoteItem from '../NoteItem/NoteItem'
import styles from './NotesList.module.css'

export default function NotesList(props) {
    return (
        <div className={styles.wrapper}>
            {props?.notes.map(note => (
                <NoteItem key={note.id} note={note}/>
            ))}
        </div>
    )
}