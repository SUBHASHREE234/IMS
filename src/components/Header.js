import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = ({setOpen}) => {
    const nav = useNavigate();
  return (
    <div className='header'>
        <div className='' style={{fontSize:"1.5rem"}}>LOGO</div>
        <div className="header-buttons">
            <button className='header-button mx-2' onClick={()=>setOpen(true)}>Register</button>
            <button className='header-button' onClick={()=>nav('/login')}>Logout</button>
        </div>
    </div>
  )
}

export default Header