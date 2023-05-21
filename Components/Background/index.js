import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100vw;
  height: 100vh;
`;

const Main = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 20px;
  z-index: 1;
  display: flex;
  justify-content: right;
  position: fixed;
`;

const Main1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  position: fixed;
  margin-right: 128px;
`;

const Line = styled.div`
  bottom: 0;
  right: 0;
  position: fixed;
`;

const Line1 = styled.div`
  left: 0;
  top: 0;
  position: fixed;
`;

const Blur = styled.img`
  position: relative;
`;

const Img = styled.img`
  position: relative;
  z-index: 2;
  height: 700px;
  margin-bottom: 8vh;
`;

const Main2 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 3;
  display: flex;
  justify-content: let;
  align-items: start;
  position: fixed;
`;

const Tools = styled.img`
  position: relative;
  height: 700px;
  width: 180px;
  height: auto;
  margin-right: -12px;
`;

const Logo = styled.img`
  position: fixed;
  height: 700px;
  margin-left: 12vw;
  width: 150px;
  height: auto;
  z-index: 1;
`;

function Index() {
  return (
    <Wrapper>
      <Main2>
        <Logo
          src="3.png"
          className="animate__animated animate__fadeInDown"
          alt="Image"
        />
        <Tools
          src="1.png"
          className="animate__animated animate__fadeInDown animate__slow"
          alt="Image"
        />
        <Tools
          src="2.png"
          className="animate__animated animate__fadeInDown"
          alt="Image"
        />
        <Tools
          src="4.png"
          className="animate__animated animate__fadeInDown animate__slow"
          alt="Image"
        />
        <Tools
          src="5.png"
          className="animate__animated animate__fadeInDown "
          alt="Image"
        />
        <Tools
          src="6.png"
          className="animate__animated animate__fadeInDown animate__slow "
          alt="Image"
        />
      </Main2>
      <Main>
        <Blur src="Blur.png" alt="Blurred Image" />
      </Main>
      <Main1>
        <Img src="img1.png" alt="Image" />
      </Main1>

      <Line>
        <img src="lines.png" alt="Line" height="600" />
      </Line>
      <Line1>
        <img src="lines1.png" alt="Line 1" height="600" />
      </Line1>
    </Wrapper>
  );
}

export default Index;
