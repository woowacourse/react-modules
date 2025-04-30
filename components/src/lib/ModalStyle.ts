import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.38);
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 70%;
  max-width: 800px;
  height: fit-content;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
