import React from "react";
import StyledLoader from "./styles";
import hamburguer from "../../assets/img/hamburguer-svgrepo-com.svg"

const Loader = () => {
  return (
    <StyledLoader>
      <img src={hamburguer} alt="" />
    </StyledLoader>
  );
};

export default Loader;
