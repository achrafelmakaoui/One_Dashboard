import React, { useState } from "react";
import "./Sidebar.css";
import Logo from '../imgs/onelg.png'
import Mrc from '../imgs/bnnerelec.jpeg'
import { Link } from "react-router-dom";
import MenuIcon  from '../imgs/burger-menu.svg'
import MenuCloseIcon  from '../imgs/icon-close.svg'

const Sidebar = () => {
    const [links,setLinks]=useState(false);
    const handelMenuIcon = () =>{
      setLinks(true)
    }
    const handelMenuCloseIcon = () =>{
      setLinks(false)
    }
  return (
    <>
      <nav>
        <div className="logo">
            <img src={Logo} alt='one banner'/>
        </div>
        <ul className="nav-links">
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="Tables">Tables</Link>
            </li>
            <li>
                <Link to="Data">Data</Link>
            </li>       
        </ul>
        <div className="mins">
            <img src={Mrc} className='mrc' alt=''/>
        </div>
        <div className="burger">
          {!links && (<img className='headerMenuIcon' src={MenuIcon} alt='svg' onClick={handelMenuIcon}/>)}
          {links && (<img className='headerMenuCloseIcon' src={MenuCloseIcon} alt='svg' onClick={handelMenuCloseIcon}/>)}
        </div>
    </nav>
    {links && (<div className="RespLinks">
        <ul className="ulLinks">
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="Tables">Tables</Link>
                </li>
                <li>
                    <Link to="Data">Data</Link>
                </li>       
          </ul>
    </div>)}
    </>
  );
};
export default Sidebar;