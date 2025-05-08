import { css } from "@emotion/react";

export interface ModalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  css?: any;
}

const ModalButton = ({ children, css: overrideCss, ...rest }: ModalButtonProps) => {
  return (
    <button {...rest} css={[baseButtonStyle, overrideCss]}>
      {children}
    </button>
  );
};

export default ModalButton;

const baseButtonStyle = css`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
`;
