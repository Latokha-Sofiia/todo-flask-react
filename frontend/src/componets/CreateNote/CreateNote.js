import { useState } from 'react';
import styles from './CreateNote.module.css';

export default function CreateNote(props) {
    const [ titleValue, setTitleValue ] = useState('')
    const [ textValue, setTextValue ] = useState('')

    const onInputTitle = (e) => {
        setTitleValue(e.target.value);
    }

    const onInputText = (e) => {
        setTextValue(e.target.value);
    }

    const onClickAddNotes = () => {
        props.addNote(titleValue, textValue)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputWrapper}>
                <input onInput={onInputTitle} className={styles.noteInput} placeholder="Введите заголовок"/>
                <div className={styles.textWithButton}>
                    <input onInput={onInputText} className={styles.noteInput} placeholder="Введите текст заметки"/>
                    <div onClick={onClickAddNotes} className={styles.addNote}>+</div>
                </div>
            </div>
        </div>
    )
}