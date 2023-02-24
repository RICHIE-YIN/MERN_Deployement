import React, { useState } from "react";
import axios from "axios";

const Random = () => {
    const [notes, setNotes] = useState([]);

    const handleSort = (order) => {
        axios.get(`api/notes/sort.${order}`).then((res) => {
            setNotes(res.data);
        }).catch((err) => {
            console.error(err);
        })
        }
        
        const renderNotes = () => {
            return notes.map((note) => (
            <div key={note._id}>
                <h3>{note.name}</h3>
                <p>{note.body}</p>
            </div>
        ))
    }
    
    return(
        <div>
            <button onClick={() => handleSort('asc')}>
                Sort by Asc
            </button>
            <button onClick={() => handleSort('desc')}>
                Sort by Desc
            </button>
            {renderNotes()}
        </div>
    )
}

export default Random