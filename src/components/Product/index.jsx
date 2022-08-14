import React from "react";
import StyledCard from "./styles";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ products, currentSale, setCurrentSale, filteredProducts}) => {
  const handleProduct = (element) => {
    const findOut = currentSale.find(elem => elem.id === element.id)
    if (!findOut) {
      setCurrentSale((prev) => [...prev, element])
      toast.success('Produto adicionado com sucesso!', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        limit: 1,
        })
    } else {
toast.error('Produto já adicionado!', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }
};
  return (
    <div className="container-geral">
      {(!filteredProducts.length ? products : filteredProducts).map((elem) => {
        return (
          <StyledCard key={elem.id}>
            <figure className="photo">
              <img className="photo-img" src={elem.img} alt="" />
            </figure>
            <div className="container">
              <h1 className="product-title">{elem.name}</h1>
              <span className="product-type">{elem.category}</span>
              <span className="product-value">
                {elem.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <button className="product-button" onClick={() => handleProduct(elem)}>Adicionar</button>
            </div>
          </StyledCard>
        );
      })}
    </div>
  );
};

export default Product;
