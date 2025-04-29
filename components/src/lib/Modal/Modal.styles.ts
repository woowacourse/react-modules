import styled from "@emotion/styled";

export const Backdrop = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  inset: 0;
`;

export const ModalBox = styled.div`
  position: absolute;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
