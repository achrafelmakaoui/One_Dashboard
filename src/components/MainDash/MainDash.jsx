import React from "react";
import Cards from "../Cards/Cards";
import "./MainDash.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const MainDash = () => {
  return (
    <div className="MainDash">
      <Cards/>
      <div className="Gear">
        <Link to='Setting'>
            <FontAwesomeIcon icon={faGear} className="gearicon"/>
        </Link>
      </div>
    </div>
  );
};

export default MainDash;
