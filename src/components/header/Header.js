import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleIconClick = () => {
    
    navigate('/login');
  };

  return (
    <div className="header bg-bodyColor">
      <Link to={"/"}>Logo</Link>
      <FaUserAlt className="icon" onClick={handleIconClick} />
    </div>
  );
}

export default Header;
