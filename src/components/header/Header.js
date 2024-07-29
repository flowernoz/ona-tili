import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import "./Header.css"
import {Link} from "react-router-dom"

function Header() {



  return (
    <div className='header'>
      <Link to={"/"}>
        Logo
      </Link>
      <FaUserAlt className='icon'/>
    </div>
  );
}

export default Header;
