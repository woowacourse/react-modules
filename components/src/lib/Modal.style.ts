import { css } from "@emotion/react";

export const ModalWrapperStyle = (show: boolean) => css`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  min-width: 300px;
  display: ${show ? "block" : "none"};
`;

export const backGroundStyle = (background: boolean) => css`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);
  visibility: ${background ? "visible" : "hidden"};
`;
export const ModalContainerStyle = (position: string, gap: number) => {
  const positionStyle = getPositionStyle(position);

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

export const getPositionStyle = (position: string) => {
  switch (position) {
    case "center":
      return css`
        width: calc(100% - 72px);
        border-radius: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;
    case "bottom":
      return css`
        width: 100%;
        border-radius: 8px 8px 0 0;
        position: fixed;
        bottom: 0;
        left: 0;
      `;
    case "top":
      return css`
        width: 100%;
        border-radius: 0 0 8px 8px;
        position: fixed;
        top: 0;
        left: 0;
      `;
    default:
      return css``;
  }
};
