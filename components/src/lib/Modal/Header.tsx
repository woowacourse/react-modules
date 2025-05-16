import { ReactNode } from "react";
import { useModalContext } from "../useModalContext";
import styled from "@emotion/styled";

const Header = ({ children }: { children: ReactNode }) => {
  const { onClose, hasTopCloseButton } = useModalContext();
  return (
    <TitleSection>
      <TitleText>{children}</TitleText>
      {hasTopCloseButton && (
        <CloseButton onClick={onClose} aria-label="모달 닫기">
          ✕
        </CloseButton>
      )}
    </TitleSection>
  );
};

export default Header;

const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const TitleText = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
