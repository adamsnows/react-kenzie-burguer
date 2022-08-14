import { useState } from "react";
import logo from "../../assets/img/logo.svg";
import StyledHeader from "./styles";

const Header = ({ setFilteredProducts, products }) => {
  const [input, setInput] = useState("");
  const handleInput = () => {
    const filtered = products.filter(({ name, category}) => 
    name.toLowerCase().includes(input) || category.toLowerCase().includes(input));
    setFilteredProducts(() => filtered);
  };

  return (
    <StyledHeader>
      <figure>
        <img src={logo} alt="" />
      </figure>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          onChange={(event) => setInput(event.target.value.toLowerCase())}
        />
        <button onClick={handleInput}>Pesquisar</button>
      </form>
    </StyledHeader>
  );
};

export default Header;
