import styled from 'styled-components';

interface Props {
  title: string;
}
function ModalTitle({ title }: Props) {
  return <Title>{title}</Title>;
}

const Title = styled.span`
  color: black;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

export default ModalTitle;
