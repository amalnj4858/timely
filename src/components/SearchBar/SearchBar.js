import React from 'react';
import './SearchBar.css';

const SearchBar = ({image,...otherProps})=>{
    return(
        <div className = 'searchBar'>
            <img src = {image} className = 'searchImage' alt = 'search' />
            <input className='searchTextField' type = 'text' placeholder = 'search notes...' {...otherProps} />
        </div>
        
    )
}

export default SearchBar;