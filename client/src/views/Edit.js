import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    
    const navigate = useNavigate()
    const { id } = useParams();
    const [note, setNote] = useState({ name: '', body: '' });
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([])
    const { removeFromDom } = props;    
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/note/${id}`)
            .then(res => {
                console.log(res.data)
                if(res.data.reason){
                    navigate("/error")
                } 
                setNote(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                navigate("/error")
            });
    }, [id]);

    const deleteNote = (noteId) => {
        axios.delete(`http://localhost:8000/api/note/${id}`)
            .then(res => {
                removeFromDom(noteId)
            })
            .catch(err => console.error(err));
    }
    
    const updateNote = note => {
        axios.put('http://localhost:8000/api/note/' + id, note)
            .then((res) => {
                navigate("/")
            }) 
            .catch(err => {
                if (err.response.data.errors) {
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                } else if (err.response.data.code === 11000) {
                    setErrors(['Name must be unique']);
                } else {
                    console.error(err);
                }
            })            
    }
    
    return (
        <div>
            <Link to={"/"}>
                Home
            </Link>
            <h1>Favorite notes</h1>
            {errors.map((err, index) => <p key={index}> {err} </p>)}
            {loaded && (
                <>
                    <NoteForm
                        onSubmitProp={updateNote}
                        initialName={note.name}
                        initialBody={note.body}
                    />
                    <button onClick={(e)=>{deleteNote(note._id)}}>
                        <Link to={`/`}>
                            Delete
                        </Link>
                    </button>
                </>
            )}
        </div>
    )
}
    
export default Update;