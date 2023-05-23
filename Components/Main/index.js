import React, { useState } from "react";
import { styled } from "styled-components";
import { useRouter } from 'next/router';

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

const Subtitle = styled.h5`
  margin: 0 100px 100px 0;
  font-size: 40px;
  color: #03045e;
  font-family: Quicksand;
  margin-bottom: 0px;
`;

const Line = styled.img``;

const InputDiv = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
`;

const Input = styled.input.attrs({
  type: "text",
})`
  width: 30vw;
  height: 32px;
  border: 3px solid #03045e;
  border-radius: 2px;
  font-family: "Quicksand";
  color: rgba(3, 4, 94, 0.5);
  font-size: 18px;
  padding-left: 12px;
  display: flex;

  &:hover {
    background-color: #e6e6fa;
    border: 3px solid rgba(3, 4, 94, 0.5);
  }

  &:focus {
    color: #03045e;
    outline: none;
    background-color: white;
  }
`;

const Button = styled.button`
  background: #023e8a;
  border-radius: 2px;
  color: #ffffff;
  font-family: "Quicksand";
  font-size: 16px;
  padding: 10px;
  border: none;
  margin-top: 20px;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #6b8db9;
  }
`;

const First = styled.div`
  margin-top: -90px;
`;

const Index = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/Progress")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Titles>
        <Title className="animate__animated animate__fadeIn animate__slow">
          Connection Power Tools
        </Title>
        <First>
          <Subtitle className="animate__animated animate__fadeIn animate__slow">
            Repair Tracker
          </Subtitle>
          <Line
            className="animate__animated animate__fadeIn animate__faster"
            src="line2.png"
          />
          <InputDiv className="animate__animated animate__fadeIn animate__slow">
            <form
              
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <Input placeholder="Input reference number" />
              <Button onClick={handleButtonClick} >CHECK PROGRESS</Button>
            </form>
          </InputDiv>
        </First>
      </Titles>
      
    </Wrapper>
  );
};

export default Index;
