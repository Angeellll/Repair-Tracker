import React from "react";
import Background from "../Components/Background";
import { styled } from "styled-components";
import Progress from "@/Components/Progress";

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
      <Mn><Progress/></Mn>
    </>
  );
}

export default index;
