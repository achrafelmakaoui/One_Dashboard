import React from "react";
import "./Sidebar.css";
import Logo from '../imgs/onelg.png'
import Mrc from '../imgs/bnnerelec.jpeg'
import { Link } from "react-router-dom";

const Sidebar = () => {
 
  return (
    <>
      <nav>
        <div class="logo">
            <img src={Logo} alt='one banner'/>
        </div>
        <ul class="nav-links">
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="Tables">Tables</Link>
            </li>
            <li>
                <Link to="Analytics">Analytics</Link>
            </li>
            <li>
                <Link to="Customers">Customers</Link>
            </li>
        </ul>
        <div className="mins">
            <img src={Mrc} className='mrc' alt=''/>
        </div>
    </nav>
    <hr className="hr"/>
    </>
  );
};
export default Sidebar;
