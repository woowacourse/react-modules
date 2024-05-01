import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  background-color: white;
  height: fit-content;
  box-sizing: border-box;
  border: none;
`;

export const ModalHeader = styled.header`
  display: flex;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-weight: bold;
`;
