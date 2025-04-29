import styled from "@emotion/styled";

const Modal = () => {
  return (
    <Background>
      <ModalContainer />
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ModalContainer = styled.div`
  width: 304px;
  height: 216px;
  border-radius: 8px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: 100;
`;

export default Modal;
