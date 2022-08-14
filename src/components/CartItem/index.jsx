import React from "react";

const CartItem = ({ current, handleRemove }) => {
  return (
    <div className="card">
      <figure className="photo">
        <img src={current.img} alt="" />
      </figure>
      <div className="container">
        <div className="details">
          <h1 className="product-title">{current.name}</h1>
          <span className="product-type">{current.category}</span>
        </div>
      </div>
      <div className="remove">
        <span onClick={() => handleRemove(current)}>Remover</span>
      </div>
    </div>
  );
};

export default CartItem;
