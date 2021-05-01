import React from 'react';
import './SearchBar.css';

const SearchBar = ({image,...otherProps})=>{ //otherProps uses the new ecmascript syntax, the spread operator
    return(
        <div className = 'searchBar'>
            <img src = {image} className = 'searchImage' alt = 'search' />
            <input className='searchTextField' type = 'text' placeholder = 'Search notes...' {...otherProps} />
        </div>
        
    )
}

export default SearchBar;