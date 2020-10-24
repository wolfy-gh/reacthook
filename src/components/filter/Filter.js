import React from 'react'
import './filter.css'
import SearchIcon from '@material-ui/icons/Search';
import {FaStar} from 'react-icons/fa'



function filterMovie(props) {

    const  handleSearch =(e) => {
        props.setSearch(e.target.value)
    }
    const handleRate =  (e) => {
        props.setRateSearch(e.target.value)
    }

    return (
        <div className="filter">
            <div className="search">
                <SearchIcon className="search_icon" />
                <input onChange={handleSearch} type="text" placeholder="Search Movie" />
            </div>
            {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1
                            return <label key={i}>
                                            <input type="radio" name="rate" value={ratingValue} onClick={handleRate}/>
                                            <FaStar className="star-p" color={ratingValue <= props.rateSearch  ? "goldenrod": "gray"} />
                                    </label>
                        })}
            {/* <select onChange={handleRate }>
                <option value=""> - Rating - </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
            </select> */}
        </div>
    )
}

export default filterMovie
