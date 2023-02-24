import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import NoteForm from '../components/NoteForm';

export default () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
    const [note, setNote] = useState();

    const createNote = (note) => {
        axios.post('http://localhost:8000/api/note', note)
        .then((res) => {
            console.log("response", res)
            if (res.data.errors) {
            setErrors(res.data.errors)
            } else if (res.data.code === 11000) {
            setErrors({ name: { message: "Name must be unique" }})
            } else {
            navigate("/")
            }
        }) 
        .catch(err=>{
            console.log("error", err)
        })            
    }

    return (
        <div>
            <h5>{errors.name ? errors.name.message:""}</h5>
            <h5>{errors.body ? errors.body.message:""}</h5>
            {/* <Link to={"/players/list"}>Manage Players</Link>|<Link to={"/players/list"}>Manage Players Status</Link> */}
            {/* <h1>Favorite Notes</h1> */} <br></br>
            {/* <Link to={"/players/list"}>List</Link>|<Link to={"/players/addplayer"}>Add a note</Link> */}
            <Link to={"/"}>go back home</Link>

            {/* <h1>Add a new Note</h1> */}
            {/* {errors.map((err, index) => <p key={index}> {err} </p>)} */}
            <NoteForm onSubmitProp={createNote} initialNote="" />
        </div>
    )
}