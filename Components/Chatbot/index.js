import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Chat from "./Chat";

const Container = styled.div`
  width: 50px;
  background-color: white;
  border-radius: 50px;
  
  &:hover {
    cursor: pointer;
  }
`;

const Chatbot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container onClick={handleOpenModal}>
        <Icon icon="mdi:customer-service" width="50" color="#03045e" />
      </Container>
      <Chat isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Chatbot;
