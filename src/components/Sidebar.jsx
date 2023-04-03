import React from "react";
import "./Sidebar.css";
import Logo from '../imgs/onelg.png'
import Mrc from '../imgs/bnnerelec.jpeg'
import { Link } from "react-router-dom";


const Sidebar = () => {
    
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
            {/* <li>
                <Link to="Setting">Setting</Link>
            </li> */}
            
        </ul>
        <div className="mins">
            <img src={Mrc} className='mrc' alt=''/>
        </div>
    </nav>
    </>
  );
};
export default Sidebar;
