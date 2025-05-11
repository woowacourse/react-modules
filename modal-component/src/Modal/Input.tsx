import styled from 'styled-components';

const Input = ({ placeholder }) => {
  return <ModalInput placeholder={placeholder} />;
};

const ModalInput = styled.input`
  padding: 10px;
  min-height: 20px;
`;

export default Input;
