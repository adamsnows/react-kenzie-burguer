import styled from "styled-components";


const StyledLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    img {
        width: 50%;
        animation: bounce 1.5s;
        animation-iteration-count: infinite;
    }
    @media screen and (min-width: 1000px){
        img {
        width: 40%;        
        }
    }
`

export default StyledLoader