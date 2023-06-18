import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Chatbox = styled.div`
  margin: auto;
  width: 300px;
  height: 400px;
  background-color: white;
  position: fixed;
  right: 25px;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const Close = styled.div`
  margin-top: 10px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
`;

const Greeting = styled.div`
  height: 80px;
  grid-column: 1/3;
  grid-row: 1;
  padding: 0 10px 0 10px;
`;

const Title = styled.h1`
  color: #03045e;
  font-family: Quicksand;
`;

const Bot = styled.div`
  height: 80px;
  grid-column: 3/4;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px 0 10px;
`;

const Convo = styled.div`
  border-top: solid 3px #03045e;
  height: 240px;
  grid-column: 1/4;
  grid-row: 2;
  padding: 0 10px 0 10px;
`;

const CContainer = styled.div`
  border-radius: 10px;
  background-color: #03045e;
  width: fit-content;
  padding: 0 10px 0 10px;
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 5px;
`;

const Input = styled.div`
  border-top: solid 3px #03045e;
  grid-column: 1/4;
  grid-row: 3;
  display: flex;
  flex-direction: row;
  overflow: auto;
  height: 45px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const OContainer = styled.div`
  border-radius: 50px;
  background-color: #03045e;
  height: 30px;
  width: 60px;
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const Option = styled.h5`
  font-family: Quicksand;
  font-size: 12px;
  text-align: justify;
  color: white;
`;

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Chatbox>
      <Close>
        <Icon onClick={onClose} icon="mingcute:close-line" color="#03045e" />
      </Close>
      <Container>
        <Greeting>
          <Title style={{ fontSize: "22px" }}>Hello there!</Title>
          <Title
            style={{ fontSize: "15px", fontWeight: "400", marginTop: "-15px" }}
          >
            I am here to help you!
          </Title>
        </Greeting>
        <Bot>
          <Icon icon="mdi:customer-service" width="70" color="#03045e" />
        </Bot>

        <Convo>
          <CContainer>
            <Option>U need to calm down oh oh ohhhh you need to calm dowwn your being to loudd oooh ooohh ohhh</Option>
          </CContainer>
        </Convo>
        <Input>
          <OContainer>
            <Option>Update</Option>
          </OContainer>
          <OContainer>
            <Option>Services</Option>
          </OContainer>
          <OContainer>
            <Option>Location</Option>
          </OContainer>
          <OContainer>
            <Option>Status</Option>
          </OContainer>
          <OContainer>
            <Option>Repair</Option>
          </OContainer>
          <OContainer>
            <Option>Openning time</Option>
          </OContainer>
          <OContainer>
            <Option>Contact</Option>
          </OContainer>
        </Input>
      </Container>
    </Chatbox>
  );
};

export default Modal;
