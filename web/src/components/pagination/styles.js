import styled from "styled-components";

export const Container = styled.div`
    width: 223px;
    height: 32px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CurrentPages = styled.div`
    width: 28px;
    height: 28px;

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
`;

export const ButtonPass = styled.button`
    width: 32px;
    height: 31px;

    border: 1px solid var(--grey500);
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 16px;
        height: 16px;
    }
`;