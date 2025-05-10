import React from "react";
import styled from "@emotion/styled";

interface CheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  autoFocus?: boolean;
}

const CheckboxContainer = styled.button<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => (props.disabled ? "#E0E0E0" : "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const CheckIcon = styled.svg`
  width: 14px;
  height: 14px;
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  ...props
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <CheckboxContainer onClick={handleClick} disabled={disabled} {...props}>
      {checked && (
        <CheckIcon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </CheckIcon>
      )}
    </CheckboxContainer>
  );
};

export default Checkbox;
