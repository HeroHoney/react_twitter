import React from "react";
import {Link } from 'react-router-dom';
import '/Users/batyrbekasel/Desktop/react/prj/src/styles/App.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/home'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/posts'>Posts</Link>
            </div>
      </div>
    )
}

export default Navbar;