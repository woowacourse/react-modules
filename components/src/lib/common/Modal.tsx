import { ReactNode } from "react";
import { css } from "@emotion/css";
import "../../reset.css";

export const POSITIONS = ["top", "bottom", "center"] as const;
export type Position = (typeof POSITIONS)[number];
export const SIZES = ["small", "medium", "large"] as const;
export type ModalSize = (typeof SIZES)[number];

interface ModalPositionerProps {
  position?: Position;
  size?: ModalSize;
  children: ReactNode;
}
const Positioner = ({ position = "center", size = "medium", children }: ModalPositionerProps) => {
  return <div className={css(modalContainerCSS, positionCSS[position], sizeCSS[size])}>{children}</div>;
};

const Header = ({
  title,
  closeButton = false,
  onClose,
}: {
  title: string;
  closeButton?: boolean;
  onClose: () => void;
}) => {
  return (
    <div className={css(headerContainerCSS)}>
      <p className={css(titleCSS)}>{title}</p>
      {closeButton && (
        <button className={css(closeButtonCSS)} onClick={onClose}>
          X
        </button>
      )}
    </div>
  );
};

const Content = ({ description, children }: { description?: string; children?: ReactNode }) => {
  return (
    <>
      {description && <p className={css(descriptionCSS)}>{description}</p>}
      {children && <div>{children}</div>}
    </>
  );
};

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  cancelLabel?: string;
  confirmLabel?: string;
  align?: "vertical" | "horizontal";
  onConfirm?: () => void;
  onClose?: () => void;
}

const Footer = ({
  cancelLabel,
  confirmLabel,
  onConfirm = () => {},
  onClose = () => {},
  align = "vertical",
  ...restProps
}: FooterProps) => {
  return (
    (confirmLabel || cancelLabel) && (
      <div className={css(buttonContainerCSS[align])} {...restProps}>
        {confirmLabel && (
          <button className={css(buttonCSS, confirmButtonCSS)} onClick={onConfirm}>
            {confirmLabel}
          </button>
        )}
        {cancelLabel && (
          <button className={css(buttonCSS, cancelButtonCSS)} onClick={onClose}>
            {cancelLabel}
          </button>
        )}
      </div>
    )
  );
};

interface ModalProps {
  children: ReturnType<typeof Positioner>;
  closeModal: () => void;
  isOpen: boolean;
}

const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  return (
    isOpen && (
      <>
        {children}
        <div className={css(backdropCSS)} onClick={closeModal} />
      </>
    )
  );
};

Modal.Positioner = Positioner;
Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

const modalContainerCSS = css`
  transform: translateX(-50%);
  left: 50%;
  width: 300px;
  gap: 16px;
  z-index: 1;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  background-color: white;
  box-sizing: border-box;
`;

const headerContainerCSS = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const sizeCSS = {
  small: css`
    width: 320px;
  `,
  medium: css`
    width: 480px;
  `,
  large: css`
    width: 600px;
  `,
};

const titleCSS = css`
  color: black;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
`;

const descriptionCSS = css`
  color: #333333;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`;

const buttonContainerCSS = {
  vertical: `
  display: flex;
  flex-direction: column;
  gap: 12px;`,
  horizontal: `
  display:flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap:12px;`,
};

const buttonCSS = css`
  aspect-ratio: 8;
  height: auto;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border: 2px solid #333333;
`;

const confirmButtonCSS = css`
  color: white;
  background-color: #333333;
`;

const cancelButtonCSS = css`
  color: #8b95a1;
  background-color: white;
`;

const closeButtonCSS = css`
  padding: 0;
  font-size: 24px;
  width: 24px;
  height: 24px;
  line-height: 0px;
  color: #333333;
  background-color: white;
`;

const backdropCSS = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const positionCSS = {
  top: css`
    width: 100%;
    top: 0;
    border-radius: 0 0 8px 8px;
  `,
  center: css`
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
  `,
  bottom: css`
    width: 100%;
    bottom: 0;
    border-radius: 8px 8px 0 0;
  `,
} as const;

export default Modal;
