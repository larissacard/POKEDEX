import styled from "styled-components";

export const Card = styled.div`
    width: 175px;
    height: 236px;

    background: #FFFFFF;

    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
        display: flex;
        justify-content: center;
           > img {
                width: 56px;
                height: 60px;
            }
    }
`;

export const CardHeader = styled.div`
    width: 100px;
    
    display: flex;
    justify-content: space-between;
    margin-left: 30%;

    button {
        width: 28px;
        height: 28px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: transparent;
        border: none;

        > img {
            width: 28px;
            height: 28px;
        }
    }

`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 9px;

    h4 {
        font-family: 'pixelada', sans-serif;
        width: 144px;

        color: var(--grey500);
        font-size: 18px;
        line-height: 27px;
    }

    p {
        font-size: 13px;
        line-height: 20px;  

        color: var(--grey300);
    }

    div {
        > div {
            color: black;

            width: 50px;
            height: 20px;
        }
    }
`;

export const CardFooter = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    button {
        width: 147px;
        height: 32px;
        
        background-color: var(--yellow);
        border-radius: 8px;
        border: none;
    }
`;