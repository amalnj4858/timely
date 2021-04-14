import React from 'react';
import './Header.css';

const Header = () =>{
    return(
        <div className='header'>
            <div className='logo'>timely.</div>
             <div className='options'>
                <div className='option'>Home</div>
                <div className='option'>Features</div>
                <div className='option'>Sign Out</div>
             </div>   
        </div>
    )
}

export default Header;