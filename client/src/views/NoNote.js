import React from "react";
import {Link} from 'react-router-dom'

const NoNote = () => {
    return (
        <div>
            <p>
            We're sorry, but we could not find the note you are looking for. 
            Would you like to add this note to our database?
            </p>
            <Link to="/players/addplayer">Create a note</Link>
        </div>
    );
}

export default NoNote;