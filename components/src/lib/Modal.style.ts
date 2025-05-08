import { css } from "@emotion/react";
import { ModalButtonCSSProps } from "./types";

export const ModalWrapperStyle = (show: boolean) => css`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  min-width: 300px;
  display: ${show ? "block" : "none"};
`;

export const backGroundStyle = css`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;
export const ModalContainerStyle = (size: string, position: string, gap: number) => {
  const positionStyle = getPositionStyle(position);
  const sizeStyle = getSizeStyle(size);
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    z-index: 99;
    box-sizing: border-box;
    padding: 24px 32px;
    gap: ${gap}px;
    ${positionStyle}
    ${sizeStyle}
  `;
};

export const ModalHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    cursor: pointer;
  }
`;

export const ModalTitleStyle = css`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ModalBodyStyle = css`
  width: 100%;
`;

export const ModalFooterStyle = css`
  width: 100%;
`;

export const ModalCloseStyle = css`
  cursor: pointer;
`;

export const ModalButtonStyle = (cssProps: ModalButtonCSSProps) => css`
  background: ${cssProps.backgroundColor};
  border: 1px solid ${cssProps.borderColor};
  box-shadow: none;
  border-radius: ${cssProps.borderRadius}px;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  color: ${cssProps.color};
  font-size: ${cssProps.fontSize}px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 7px 21px;
`;

export const getSizeStyle = (size: string) => {
  switch (size) {
    case "small":
      return css`
        width: 320px;
      `;
    case "medium":
      return css`
        width: 480px;
      `;
    case "large":
      return css`
        width: 600px;
      `;
    default:
      return css`
        width: calc(100% - 72px);
      `;
  }
};

export const getPositionStyle = (position: string) => {
  switch (position) {
    case "center":
      return css`
        border-radius: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;
    case "bottom":
      return css`
        border-radius: 8px 8px 0 0;
        position: fixed;
        bottom: 0;
        left: 0;
      `;
    case "top":
      return css`
        border-radius: 0 0 8px 8px;
        position: fixed;
        top: 0;
        left: 0;
      `;
    default:
      return css``;
  }
};
