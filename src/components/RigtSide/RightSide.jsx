import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
// import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
