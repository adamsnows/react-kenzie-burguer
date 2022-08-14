import React from "react";
import StyledCart from "./styles";
import CartItem from "../CartItem";
import FlatList from "flatlist-react";
import EmptyCart from "../EmptyCart";

const Cart = ({ currentSale, setCurrentSale}) => {
  const totalSale = currentSale.reduce((acc, elem) => acc + elem.price, 0);
  const handleRemove = (item) => {
    const filtered = currentSale.filter(elem => elem.id !== item.id)
    setCurrentSale(filtered)
  }
  return (
    <div>
      <div className="title">
        <span>Carrinho de Compras</span>
      </div>
      <StyledCart>
        <FlatList
          list={currentSale}
          renderItem={(elem) => <CartItem key={elem.id} current={elem} handleRemove={handleRemove} />}
          renderWhenEmpty={EmptyCart}
        />
      </StyledCart>
      {currentSale.length > 0 && (
        <div className="price-container">
          <div className="price-info">
            <span className="total">Total</span>
            <span className="price">
              {totalSale.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button className="button-remove-currentSale" onClick={() => setCurrentSale([])}>Remover todos</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
