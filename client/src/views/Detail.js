import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';
    
const Detail = (props) => {
    const [note, setNote] = useState({})
    const { id } = useParams();
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { removeFromDom } = props;    
    const deleteNote = (noteId) => {
        axios.delete(`http://localhost:8000/api/note/${id}`)
            .then(res => {
                removeFromDom(noteId)
            })
            .catch(err => console.error(err));
        }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/note/${id}`)
            .then(res => setNote(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
                <Link to={`/`}>
                go back home
                </Link>
            <p>Note: {note.name}</p>
            <p>Body: {note.body}</p>
            {/* <Link to={`/edit/${note._id}`}>
                Edit
            </Link> */}
            <button>
                <Link to={`/`}>
                Edit
                </Link>
            </button>

        <button onClick={(e)=>{deleteNote(note._id)}}>
                <Link to={`/`}>
                    Delete
                </Link>
        </button>
        </div>
    )
}
    
export default Detail;

