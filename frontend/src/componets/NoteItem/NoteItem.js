import styles from './NoteItem.module.css';

export default function NoteItem(props) {
    const date = new Date(props.note.date);

    return (
        <div className={styles.wrapper}>
            <div className={styles.dateWithIcon}>
                <img src="/images/addNote.png"/>
                {date.getDate() + ' '}
                {date.toLocaleString('default', { month: 'long' }) + ' '}
                {date.getFullYear()}
            </div>
            <div className={styles.titleText}>{props.note.title}</div>
            <div className={styles.descriptiontext}>{props.note.text}</div>
        </div>
    )
}