import React from "react";
import Background from "../Components/Background";
import Main from "../Components/Main";
import { styled } from "styled-components";

const Bg = styled.div`
  z-index: -1;
  position: fixed;
`
const Mn = styled.div`
  z-index: 5;
  position: fixed;
`

function index() {
  return (
    <>
      <Bg><Background /></Bg>
      <Mn><Main /></Mn>
    </>
  );
}

export default index;
