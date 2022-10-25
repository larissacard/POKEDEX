import styled from "styled-components";

export const Container = styled.div`
    
    width: 100vw;
    height: 100vh;
    
    font-family: 'Poppins', sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Catalogo = styled.div`
`;

export const EmptyState = styled.div`
    width: 515px;

    margin-top: 26px;

    display: flex;
    flex-direction: column;

    align-items: center;

    img {
        width: 616px;
        height: 444px;

    }
    h2 {
        color: var(--grey500);
        font-size: 24px;
        line-height: 36px;
    }

    p {
        width: 366px;

        font-size: 14px;
        line-height: 21px;
        text-align: center;

        color: var(--grey300);
    }
`;

export const Button =  styled.div`
    width: 233px;
    height: 45px;

    border: 1px solid var(--grey300);
    border-radius: 8px;

    color: var(--grey300);

    margin-top: 39px;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        width: 235px;
        height: 47px;
        
        font-weight: 600;

        cursor: pointer;
        
        border: 2px solid var(--grey300);
    }
`;