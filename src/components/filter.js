import React from 'react'
import './filter.css'
import SearchIcon from '@material-ui/icons/Search';



function filterMovie() {

    return (
        <div className="filter">
            <div className="search">
                <SearchIcon className="search_icon" />
                <input type="text" placeholder="Search Movie" />
            </div>
            <select>
                <option> - Rating - </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    )
}

export default filterMovie
