import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: flex-end;
`;

export const AgreementContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AgreementContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const ContentText = styled.span<{ details: boolean }>`
  cursor: ${({ details }) => (details ? "pointer" : "text")};
  &:hover {
    text-decoration: ${({ details }) => (details ? "underline" : "none")};
  }
`;
