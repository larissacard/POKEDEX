import styled from "styled-components";

export const Container = styled.div`
    width: 223px;
    height: 32px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonPages = styled.button`
    width: 28px;
    height: 28px;

    border: 1px solid var(--grey500);
    background-color: transparent;

    color: var(--grey500);
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    
    :hover{
        width: 32px;
        height: 31px;

        border: 1px solid #FF3326;
    }
`;

export const ButtonPass = styled.button`
    width: 32px;
    height: 31px;

    border: 1px solid var(--grey500);
    border-radius: 50%;

    img{
        width: 16px;
        height: 16px;
    }
`;