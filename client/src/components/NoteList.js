import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
    
const NoteList = (props) => {
    const [note, setNote] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/allnotes')
            .then(res => setNote(res.data));
    }, [])
    
    const removeFromDom = noteId => {
        setNote(note.filter(note => note._id != noteId))
    }

    
    return (
        <div>
        <Table striped bordered hover>
            <thead>
                {/* <th>Note Name</th> */}
                {/* <th>Actions</th> */}
            </thead>
            {note
            // .sort((a,b) => {
            // if(a.name < b.name) {return -1;}
            // if(a.name > b.name) {return 1;}
            // return 0;
            // })
            .map((note, idx) => {
                return (
                <tr key={idx}>
                    <td> 
                        Note Title: 
                        <br></br> 
                        {note.name}
                        <br></br>
                        <br></br>
                        Note Body: 
                        <br></br> 
                        {note.body}
                    </td>
                    <td>
                        <Link to={"/note/" + note._id}>
                        Edit
                        </Link>
                        {/* <DeleteButton
                        noteId={note._id}
                        successCallback={() => removeFromDom(note._id)}
                        /> */}
                    </td>
                </tr>
                );
            })}
        </Table>
    </div>
    );
}
    
export default NoteList;

