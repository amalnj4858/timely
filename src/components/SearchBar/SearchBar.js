import React from 'react';
import './SearchBar.css';

const SearchBar = ({image})=>{
    return(
        <div className = 'searchBar'>
            <img src = {image} className = 'searchImage' alt = 'search' />
            <input className='searchTextField' type = 'text' />
        </div>
        
    )
}

export default SearchBar;