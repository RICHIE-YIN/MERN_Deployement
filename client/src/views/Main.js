import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
export default () => {
    const [note, setNote] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/allnotes')
            .then(res =>{
                setNote(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = noteId => {
        setNote(note.filter(note => note._id != noteId));
    }

    return (
        <div>
            <Link to={"/note/new"}>Write note</Link>
            <h1>Note Wall</h1>
            <h5>Leave a note</h5>
            {/* <Link to={"/players/list"}>Manage Players</Link>|<Link to={"/players/list"}>Manage Players Status</Link> */}
            {/* <h1>Favorite Notes</h1> */} <br></br>
            {/* <Link to={"/players/list"}>List</Link>|<Link to={"/new/note"}>Add a note</Link> */}
            {/* <h5>Note</h5> */}
            {loaded && <NoteList note={note} removeFromDom={removeFromDom}/>}
        </div>
    )
}