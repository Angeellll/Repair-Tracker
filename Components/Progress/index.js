import React from "react";
import { styled } from "styled-components";
import CircularProgressBar from "./Circle";
import Card from "./Card"
import SeeMore from "./See";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const Titles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80vw;
  height: 80vh;
  margin: 350px 0 0 200px;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0 100px 100px 0;
  font-size: 64px;
  color: #03045e;
  font-family: Work Sans;
`;

const Ticket = styled.div`
  display: flex;
  margin-top: -120px;
  margin-left: -20px;
  flex-direction: row;
`;

const Img = styled.img`
  width: 50vw;
  height: 300px;
`;

function Progress() {

  const progress = 5;

  return (
    <Wrapper className="animate__animated animate__fadeIn animate__slow">
      <Titles>
        <Title>
          Connection Power Tools
        </Title>
        <Ticket>
          <Img src="Receipt.png" />
          <Card/>
          <CircularProgressBar progress={progress} />
        </Ticket>
        <SeeMore/>
      </Titles>
    </Wrapper>
  );
}

export default Progress;
