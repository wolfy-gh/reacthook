import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import './add.css'
import AddBoxIcon from '@material-ui/icons/AddBox';

function Add(props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movie, setMovie] = useState({
        title: "",
        postUrl:"",
        description: "",
        rate: "",
    })
    function handleChange(e) {
        const { name, value } = e.target
        setMovie(prevMovie => {
            return {
                ...prevMovie,
                [name]: value
            }
        })
    }
    function submitMovie(e) {
        e.preventDefault()
        props.onAdd(movie)
    }
    return (
        <div className="add_movies">
            <button onClick={handleShow}>
                <AddBoxIcon /> Add
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="add_header" closeButton>
                    <Modal.Title>Add New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input onChange={handleChange} name="title" value={movie.title} placeholder="Movie Title" />
                        <input onChange={handleChange} name="postUrl" value={movie.postUrl} placeholder="Movie subtitleTitle" />
                        <textarea name="description" onChange={handleChange} value={movie.description} placeholder="Description" />
                        <select name="rate" value={movie.rate} onChange={handleChange} placeholder="Rate">
                            <option>-Rate-</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <button type="submit" onClick={submitMovie}>Add</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Add
