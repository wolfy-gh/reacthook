import React from 'react'
import './card.css'

function Moviecard({ title, postUrl, description, rate }) {
    return (
        <div className="movie_card">
            <img src={postUrl} alt="movie " />
            <div className="movie_head">
                <h3>{title}</h3>
                <p>{rate}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Moviecard
