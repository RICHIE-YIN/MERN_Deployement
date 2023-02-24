import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default props => {
    const { noteId, successCallback } = props;
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const deleteNote = e => {
        axios.delete('http://localhost:8000/api/note/' + noteId)
            .then(res=>{
                successCallback();
            })
    }
    
    
    return (
        // <>
        // <Button variant="danger" onClick={handleShow}>
        //     Delete
        // </Button>
    
        // <Modal show={show} onHide={handleClose}>
        //     <Modal.Header closeButton>
        //     <Modal.Title>Confirm Delete</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>Are you sure you want to delete {noteId.name}?</Modal.Body>
        //     <Modal.Footer>
        //     <Button variant="primary" onClick={handleClose}>
        //         Close
        //     </Button>
        //     <Button variant="danger" onClick={deleteNote}>
        //         Delete
        //     </Button>
        //     </Modal.Footer>
        // </Modal>
        // </>
        //EXAMPLE FOR JUST DELETE
        <button onClick={deleteNote}>
            Delete
        </button>
    )
}
