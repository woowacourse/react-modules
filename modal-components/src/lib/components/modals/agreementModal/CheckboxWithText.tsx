import React from "react";
import Checkbox from "../../common/CheckBox";
import styled from "@emotion/styled";

const AgreementContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const ContentText = styled.span<{ details: boolean }>`
  cursor: ${({ details }) => (details ? "pointer" : "text")};
  &:hover {
    text-decoration: ${({ details }) => (details ? "underline" : "none")};
  }
`;

interface CheckboxWithLabelProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  isRequired: boolean;
  text: string;
  details?: string;
  autoFocus?: boolean;
  onOpenDetail: () => void;
}

const CheckboxWithText: React.FC<CheckboxWithLabelProps> = ({
  checked,
  onChange,
  isRequired,
  text,
  details,
  autoFocus,
  onOpenDetail,
}) => (
  <AgreementContentBox>
    <Checkbox
      checked={checked}
      onChange={onChange}
      {...(autoFocus ? { autoFocus: true } : {})}
    />
    <span style={{ opacity: 0.6 }}>{isRequired ? "[필수]" : "[선택]"}</span>
    <ContentText
      details={!!details}
      onClick={() => {
        if (!details) return;
        onOpenDetail();
      }}
    >
      {text}
    </ContentText>
  </AgreementContentBox>
);

export default CheckboxWithText;
