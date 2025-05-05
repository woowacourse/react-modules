import styled from "@emotion/styled";
import { ModalTypeProps } from "../types/modalTypes";

export const ModalContainer = styled.div<ModalTypeProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: ${({ modalType }) =>
    modalType === "center" ? "center" : "flex-end"};
  position: fixed;
`;
export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  width: 100%;
  position: absolute;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBoxContainer = styled.div<ModalTypeProps>`
  width: ${({ modalType }) => (modalType === "center" ? "70%" : "100%")};
  max-width: ${({ modalType }) => (modalType === "center" ? "800px" : "none")};
  height: fit-content;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: ${({ modalType }) =>
    modalType === "center" ? "0.5rem" : "0.5rem 0.5rem 0rem 0rem"};
`;

export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalBottomCloseBtn = styled.div`
  color: #8b95a1;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px;
  cursor: pointer;
`;
