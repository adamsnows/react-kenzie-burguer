import React from "react";
import StyledEmptyCart from "./styles";

const EmptyCart = () => {
  return (
    <StyledEmptyCart>
      <div className="container">
        <h1 className="empty-title">Sua sacola está vazia</h1>
        <span className="empty-description">Adicione itens</span>
      </div>
    </StyledEmptyCart>
  );
};

export default EmptyCart;
