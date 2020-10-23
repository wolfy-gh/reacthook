import React from 'react'
import './card.css'
import {FaStar} from 'react-icons/fa'

function Moviecard({ title, postUrl, description, rate }) {
    return (
        <div className="movie_card">
            <img src={postUrl} alt="movie " />
            <div className="movie_head">
                <h3>{title}</h3>
                {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1
                            return <label key={i}>
                                            <input type="radio" name="rate" value={ratingValue}/>
                                            <FaStar className="star-p" color={ratingValue = rate ? "goldenrod": "gray"} />
                                    </label>
                        })}
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Moviecard
