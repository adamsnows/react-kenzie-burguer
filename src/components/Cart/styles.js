import styled from "styled-components";

const StyledCart = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 10px;
    font-family: 'Inter';
    background-color: var(--gray-0);
    height: 300px;
    overflow-y: auto;
    .card {
        display: flex;
        justify-content: space-between;
        animation: lightSpeedInLeft 0.8s;
    }    
    .details {
        display: flex;
        flex-direction: column;
        padding: 15px;

    }
    .photo {
        background-color: var(--gray-0);
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin: 10px;
    }
    img {
        width: 100%;
    }
    .container {
        display: flex;
        width: 40%;
    }
    .product-title {
        font-weight: bolder;
    
    }
    .product-type {
        font-weight: lighter;
        color: var(--gray-50);
        font-size: 0.7rem;
        margin-top: 20px;
    }
    .remove {
        font-size: 0.7rem;
        margin: 15px;
        color: var(--gray-50);
        cursor: pointer;
    }
    @media screen and (min-width:1000px) {
        width: 350px;
        img {
            width: 100px;
        }
        .card {
            width: 100%;
        }
        .photo {
            width: 100%;
        }
        .container {
            width: 100%;
        }
        .remove {
            width: 50px;
        }
    }
`

export default StyledCart