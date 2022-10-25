import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100vw;
    height: 100vh;

    background-image: url("assets/background.svg");
    background-repeat: no-repeat;
    background-size: cover;
`;

const FlyingClouds = keyframes`
  0%{
    margin-left: -1400px;
  }
  100%{
    margin-left: 1300px;

  }
`;
export const Clouds = styled.div`
    background-image: url("assets/clouds/clouds2.svg");
    background-size: contain;
    background-repeat: no-repeat;

    width: 296px;
    height: 275px;

    position: absolute;

    left: 1200px;
    top: 214px;

    z-index: 1;

    animation: ${FlyingClouds} 19s linear infinite;
`;

export const CloudsTwo = styled.div`
    background-image: url("assets/clouds/clouds4.svg");
    background-size: contain;
    background-repeat: no-repeat;

    width: 330px;
    height: 153px;

    position: absolute;

    left:  853px;
    top: 229px;

    z-index: 1;

    animation: ${FlyingClouds} 20s linear infinite;
`;

export const CloudsThree = styled.div`
    background-image: url("assets/clouds/clouds5.svg");
    background-size: contain;
    background-repeat: no-repeat;

    width: 330px;
    height: 153px;

    position: absolute;

    left:  605px;
    top: 319px;

    z-index: 1;

    animation: ${FlyingClouds} 19s linear infinite;
`;

export const CloudsFour = styled.div`
    background-image: url("assets/clouds/clouds1.svg");
    background-size: contain;
    background-repeat: no-repeat;

    width: 330px;
    height: 153px;

    position: absolute;

    left:  404px;
    top: 194px;

    z-index: 1;

    animation: ${FlyingClouds} 21s linear infinite;
`;

export const CloudsFive = styled.div`
    background-image: url("assets/clouds/clouds7.svg");
    background-size: contain;
    background-repeat: no-repeat;

    width: 330px;
    height: 153px;

    position: absolute;

    left:  384px;
    top: 361px;

    z-index: 1;
    animation: ${FlyingClouds} 20s linear infinite;
`;

export const CloudsSix = styled.div`
    background-image: url("assets/clouds/clouds8.svg");
    background-size: contain;
    background-repeat: no-repeat;

    width: 330px;
    height: 153px;

    position: absolute;

    left: 54px;
    top: 305px;

    z-index: 1;

    animation: ${FlyingClouds} 20s linear infinite;
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 15px;
    margin-left: 138px;
    z-index: 2;


`;

export const Logo = styled.div`
    background-image: url("assets/logo.svg");
    width: 206px;
    height: 76px;
    
    margin-bottom: 70px;
    margin-top: 60px;


`;

export const Input = styled.input`
    width: 365px;
    height: 54px;

    background: rgba(255, 255, 255, 0.5);
    border: 1px solid #FFFFFF;

    border-radius: 8px;
    margin-bottom: 15px;

    padding-left: 26px;

    color: var(--label);
`;

export const Title = styled.text`
    width: 365px;
    height: 108px;

    margin-bottom: 48px;

    font-weight: 700;
    font-size: 36px;
    line-height: 54px;

    color: var(--yellow);
`;

export const Animation = styled.div`
    background-image: url("assets/background/poke.gif");

    width: 301px;
    height: 224px;

    margin-top: 65vh;
    margin-right: 282px;

`;
 
