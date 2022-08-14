import styled from "styled-components";

const StyledEmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px;
    height: 100%;
    .container {
        text-align: center;
        flex-direction: column;
        font-family: 'Inter';
        width: 100%;
    }
    .empty-title {
        font-weight: bolder;
    }
    .empty-description {
        color: var(--gray-50);
    }
    .empty-title, .empty-description {
        margin: 10px;        
    }

`
export default StyledEmptyCart