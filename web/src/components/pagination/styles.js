import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    
    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 213px;
    }

`;

export const CurrentPages = styled.div`
    width: 32px;
    height: 31px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background-color: #FF3326;
    color: white;

    font-weight: 600;
    font-size: 15px;
    line-height: 22px;

    
`;

export const InactivePage = styled.div`
    width: 28px;
    height: 28px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    border: 1px solid var(--grey500);
    color: var(--grey500);

    font-weight: 600;
    font-size: 15px;
    line-height: 22px; 

    :hover{
        width: 32px;
        height: 31px;
        background-color: #FF3326;
        color: white;
        border: none;

    }
`;

export const ButtonPass = styled.button`
    width: 32px;
    height: 31px;

    border: 1px solid var(--grey500);
    background-color: transparent;
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    img{
        width: 16px;
        height: 16px;
    }
`;