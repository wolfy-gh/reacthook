import React, { useState } from 'react'
import Card from './Moviecard'
import MovieData from '../data'
import './list.css'
import Add from './Add'


function Movielist() {
    const [movies, setMovies] = useState([])
    function AddMovie(newMovie) {
        setMovies(prevMovies => {
            return [...prevMovies, newMovie]
        })
    }
    return (
        <div>
            <div className="AddMovie" >
                <Add onAdd={AddMovie} />
            </div>
            <div className="movie_list">
                {MovieData.map((movie, index) => (
                    <Card
                        key={index}
                        title={movie.title}
                        postUrl={movie.posteUrl}
                        description={movie.description}
                        rate={movie.rate}
                    />
                ))
                }
                {movies.map((moviesItem, index) => {
                    return <Card
                        key={index}
                        title={moviesItem.title}
                        postUrl={moviesItem.postUrl}
                        description={moviesItem.description}
                        rate={moviesItem.rate}
                    />
                })}
            </div>
        </div>
    )
}

export default Movielist
