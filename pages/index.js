import React from "react";
import Background from "../Components/Background";
import Main from "../Components/Main";
import { styled } from "styled-components";
import Chatbot from "@/Components/Chatbot";

const Bg = styled.div`
  z-index: -1;
  position: fixed;
`;
const Mn = styled.div`
  z-index: 5;
  position: fixed;
`;

const Cb = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
  z-index: 5;
`;

function index() {
  return (
    <>
      <Bg>
        <Background />
      </Bg>
      <Mn>
        <Main />
      </Mn>
      <Cb>
        <Chatbot />
      </Cb>
    </>
  );
}

export default index;
