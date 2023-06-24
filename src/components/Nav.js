import React from 'react'
import { Link,useLocation } from 'react-router-dom';

const Nav = () => {
  let location=useLocation();
    

    
  
    return (
        <ul className="nav nav-tabs">
            <li className='nav-item'><Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to='/'>All</Link></li>
            <li className='nav-item'><Link className={`nav-link ${location.pathname === "/completed" ? "active" : ""}`} to='/completed'>Completed</Link></li>
            <li className='nav-item'><Link className={`nav-link ${location.pathname === "/pending" ? "active" : ""}`} to='/pending'>Pending</Link></li>
        </ul>
    );
}

export default Nav


