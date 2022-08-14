import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: var(--gray-0);
    margin-bottom: 2rem;
    form {
        display: flex;
        border-radius: 7px;
        border: 2px solid var(--gray-20); 
        background-color: white;
        padding: 10px;
    }
    form, figure {
        margin: 2% ;
    }
    figure {
        margin-top: 1rem;
    }
    button {
        background-color: var(--color-primary);
        color: white;
    }
    input, button {
        padding: 10px; 
        border: none;
        border-radius: 7px;
    }    
    @media screen and (min-width:1000px) {
    flex-direction: row;
}
`;

export default StyledHeader