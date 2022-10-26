import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 50px;

    background-color: var(--yellow);

    font-family: 'Poppins', sans-serif;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-left: 138px;
    padding-right: 138px;


`;

export const Navmenu = styled.div`
    width: 297px;
    height: 34px;

    margin-top: 16px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a {
        text-decoration: none;

        color: var(--grey500);

        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
    }

    a:hover{
        font-weight: 600;
        border-bottom: 2px solid var(--grey500);
        width: 100px;
        text-align: center;
    }
`;

export const Logo = styled.div`
    width: 75px;
    height: 30px;

    background-image: url("assets/loguinho.svg");
`;

export const Button = styled.div`
    width: 89px;
    height: 28px;

    border: 1px solid var(--label);
    border-radius: 8px;

    color: var(--label);
    font-size: 12px;
    line-height: 18px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    align-items: center;

`;