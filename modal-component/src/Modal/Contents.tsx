import styled from 'styled-components';

type ModalContentsProps = {
  children: React.ReactNode;
};

const Contents = ({ children }: ModalContentsProps) => {
  return <ModalContents>{children}</ModalContents>;
};

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
`;

export default Contents;
