import CreateNote from "../CreateNote/CreateNote";
import { useEffect, useState } from "react";
import NotesList from "../NotesList/NotesList";


export default function NotesBlock() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/notes')
            .then(r => r.json())
            .then(r => setNotes(r))
    }, [])

    const addNote = (titleValue, textValue) => {
        fetch('http://127.0.0.1:5000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                title: titleValue,
                text: textValue
            })
        })
            .then(r => r.json())
            .then(r => setNotes(r))
    }

    return (
        <div>
            <CreateNote addNote={addNote} />
            <NotesList notes={notes} />
        </div>
    )
}