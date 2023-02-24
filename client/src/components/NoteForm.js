import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default props => {
    const { initialName, initialBody, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [body, setBody] = useState(initialBody);
    const [nameErrors, setNameErrors] = useState("Name must be 3 characters");
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, body});
    }

    // const ValidationName = (e) => {
    //     setName(e.target.value)
    //     if (name.length > 1){
    //         return setNameErrors("")
    //     } else if (name.length < 8) {
    //         setNameErrors("Name must be 3 characters")
    //     }
    // }

    return (
        <form onSubmit={onSubmitHandler}>
            {/* <p>
                <label>Name:</label><br />
                <input
                    type="text"
                    name="name" value={name}
                    onChange={ValidationName} />
            </p> */}
            <h1>Write Notes</h1>
            <h5>Write a new note!</h5>
            <p>
                <label>Note Title:</label><br />
                <input
                    type="text"
                    name="position" value={name}
                    onChange={(e) => { setName(e.target.value) }} />
            </p>
            <p>
                <label>Note Body:</label><br />
                <textarea
                    rows="4" cols="50"
                    name="body" value={body}
                    onChange={(e) => { setBody(e.target.value) }} />
            </p>
            {/* {!nameErrors?:""} */}
            <button type="submit">Write this note!</button>
            {/* <button>
                    <Link to={"/players/list"}>
                    Cancel
                    </Link>
                </button> */}
        </form>
    )
}