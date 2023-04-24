import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 30vh;
  left: 5%;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ModalHeader = styled.div`
  width: 100%;
  height: 30px;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  padding: 10px;
  margin-bottom: 45px;
`;
let portalElement = document.getElementById('modal');

const Modal = ({ children, showModal, height, width, header }) => {
  return (
    <>
      {createPortal(<Backdrop onClick={showModal} />, portalElement)}
      {createPortal(
        <ModalOverlay height={height} width={width}>
          <ModalHeader>{header}</ModalHeader>
          {children}
        </ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
