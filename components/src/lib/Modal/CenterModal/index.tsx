import styled from 'styled-components';

import { ModalContentsProps } from '../../types/modal';

const CenterModalContents = styled.div`
  -webkit-box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.19);
  border-radius: 0.5rem;
  min-width: 50vw;
  max-width: 90vw;
  min-height: 12.5rem;
  max-height: 90vw;
  background-color: #fff;
  position: relative;
`;

function CenterModal({ children }: ModalContentsProps) {
  return <CenterModalContents>{children}</CenterModalContents>;
}

export default CenterModal;
