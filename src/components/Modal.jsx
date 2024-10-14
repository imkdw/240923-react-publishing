import styled from "styled-components";
import ModalPortal from "./ModalPortal";

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContent = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px;
`;

const StyledModalCloseButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default function Modal({ handleCloseModal }) {
  return (
    <ModalPortal>
      <StyledModal>
        <StyledModalContent>
          <StyledModalCloseButton onClick={handleCloseModal}>X</StyledModalCloseButton>
          <h1>Modal</h1>
          <p>Modal Content</p>
        </StyledModalContent>
      </StyledModal>
    </ModalPortal>
  );
}
