import styled from 'styled-components';

type ModalTitleProps = {
  title: string;
};

const Title = ({ title }: ModalTitleProps) => {
  return <ModalTitle>{title}</ModalTitle>;
};

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
  position: absolute;
  top: 20px;
  left: 20px;
  text-align: start;
`;

export default Title;
