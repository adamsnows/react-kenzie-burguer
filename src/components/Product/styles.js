import styled from "styled-components";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    border-radius: 5px;
    font-family: 'Inter';
    gap: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    transition: 1s;
    :hover {
        animation: pulse 1s;
    }
    .photo {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        background-color: var(--gray-0);
        
    }
    .photo-img {
        width: 160px;
        height: 160px;
        animation: bounce 2s;
    }
    .container {
        display: flex;
        align-self: flex-start;
        flex-direction: column;
        gap: 15px;
        margin: 10px;
        width: 50%;
    }
    .product-title {
        width: 150%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bolder;
        height: 20px ;
    }
    .product-type {
        color: var(--gray-50);
        font-weight: lighter;
        font-size: 0.8rem;
    }
    .product-value {
        color: var(--color-primary);
        font-weight: bolder;
    }
    .product-button {
        border: none;
        background-color: var(--color-primary);
        color: white;
        border-radius: 5px;
        width: 100px;
        height: 35px;
        transition: 0.5s;
    }
    .product-button:hover {
        transition: 0.5s;
        background-color: var(--color-primary-50);
    }
    @media screen and (min-width:1000px) {
        width: 30%;
        border-radius: 10px; 
        .product-title {
            /* overflow: unset;
            text-overflow: unset; */
        }       
    }    
`

export default StyledCard 