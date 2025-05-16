import { css } from "@emotion/react";

export const ConfirmButtonStyle = (disabled?: boolean) => css`
  border: 0;
  background-color: ${disabled ? "#ccc" : "#333333"};
  color: ${disabled ? "#666" : "#ffffff"};
  padding-left: 18px;
  padding-right: 18px;
  height: 36px;
  border-radius: 5px;
  cursor: ${disabled ? "not-allowed" : "pointer"};
`;

export const CancelButtonStyle = css`
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding-left: 18px;
  padding-right: 18px;
  height: 36px;
  border-radius: 5px;
`;
