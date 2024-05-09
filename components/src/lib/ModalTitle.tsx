import styled from 'styled-components';

export interface ModalTitleProps {
  title: string;
}
const ModalTitle: React.FC<ModalTitleProps> = ({ title }: ModalTitleProps) => {
  return <Title>{title}</Title>;
};

const Title = styled.span`
  color: black;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

export default ModalTitle;
