import styled from "@emotion/styled";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1_000_000_000;
`;

export const StyledContent = styled.div<{
  position?: "center" | "bottom";
  size?: "small" | "medium" | "large";
}>`
  position: fixed;
  background-color: white;

  width: ${(props) => {
    if (props.size === "small") return "320px";
    if (props.size === "medium") return "480px";
    if (props.size === "large") return "600px";
  }};

  ${(props) =>
    props.position === "bottom"
      ? `
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  `
      : `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `};
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCloseButton = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #666;
`;
