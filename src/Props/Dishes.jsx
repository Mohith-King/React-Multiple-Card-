import React from "react";

const Dishes = ({ dname, price }) => {
  return (
    <div>
      <h2> This is dishname {dname} </h2>
      <p> The Price OF Dish ₹{price} </p>
    </div>
  );
};

export default Dishes;
