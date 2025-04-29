import styled from 'styled-components';

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = () => {
  return <BackDrop></BackDrop>;
};

export default Modal;
