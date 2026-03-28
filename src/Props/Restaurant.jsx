import React from "react";

const Restaurant = ({ name, loc, pincode }) => {
  return (
    <div>
      <h2> The famous Restaurant {name}</h2>
      <p> It is located at {loc} </p>
      <p> Easy Pincode To Locate Easyli {pincode} </p>
    </div>
  );
};

export default Restaurant;
