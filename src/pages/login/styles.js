import styled from "styled-components";

export const Container = styled.div`
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 15px;
    margin-left: 138px;


`;

export const Logo = styled.img`
    background-image: url("../../../assets/logo.svg");
    width: 206px;
    height: 76px;
    
    margin-bottom: 75px;

    border:none;
`;

export const Input = styled.input`
    width: 365px;
    height: 54px;

    border: 1px solid var(--grey300);
    border-radius: 8px;
    margin-bottom: 15px;

    ::placeholder{
        padding-left: 26px;
    }
`;

export const Title = styled.text`
    width: 365px;
    height: 108px;

    margin-bottom: 48px;

    font-weight: 700;
    font-size: 36px;
    line-height: 54px;

    color: var(--grey500);
`;

export const Animation = styled.img`
`;
 
