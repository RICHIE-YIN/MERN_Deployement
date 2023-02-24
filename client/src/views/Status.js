import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';
    
const GameStatus = (props) => {
    const [note, setNote] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/allnotes')
            .then(res => setNote(res.data));
    }, [])

    // const updateNote = note => {
    //     axios.put('http://localhost:8000/api/note/' + id, note)
    //         .then((res) => {navigate("/note")}) 
    //         .catch(err=>{
    //             const errorResponse = err.response.data.errors; // Get the errors from err.response.data
    //             const errorArr = []; // Define a temp error array to push the messages in
    //             for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
    //                 errorArr.push(errorResponse[key].message)
    //             }
    //             // Set Errors
    //             setErrors(errorArr);
    //         })            
    // }
    
    const removeFromDom = noteId => {
        setNote(note.filter(note => note._id != noteId))
    }
    
    return (
        <div>
        <table>
            <thead>
                <th>Note Name</th>
                <th>Preferred Position</th>
                <th>Actions</th>
            </thead>
            {note
            .sort((a,b) => {
            if(a.name < b.name) {return -1;}
            if(a.name > b.name) {return 1;}
            return 0;
            })
            .map((note, idx) => {
                return (
                <tr key={idx}>
                    <td><Link to={"/" + note._id}>
                    {note.name}
                    </Link></td>
                    <td>{note.position}</td>
                    <td>
                        <Link to={"/edit/" + note._id}>
                        Edit
                        </Link>
                        <DeleteButton
                        noteId={note._id}
                        successCallback={() => removeFromDom(note._id)}
                        />
                    </td>
                </tr>
                );
            })}
        </table>
    </div>
    );
}
    
export default GameStatus;

