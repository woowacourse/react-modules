import useKeyEscClose from "./hooks/useKeyEscClose";
import IconClose from "./components/IconClose";
import { BaseProps, ModalHeaderProps, ModalProps, ModalContainerProps, ModalButtonProps } from "./types";
import {
  backGroundStyle,
  ModalBodyStyle,
  ModalButtonStyle,
  ModalCloseStyle,
  ModalContainerStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
  ModalTitleStyle,
  ModalWrapperStyle,
} from "./Modal.style";
import ModalContext, { useModalContext } from "./contexts/ModalContext";
import React, { HTMLAttributes } from "react";

const Modal = ({ show, onHide, children, ...props }: ModalProps) => {
  useKeyEscClose(onHide);

  return (
    <ModalContext.Provider value={{ onHide }}>
      <div css={ModalWrapperStyle(show)} onClick={onHide} {...props}>
        {children}
      </div>
    </ModalContext.Provider>
  );
};

Modal.BackDrop = (props: Omit<BaseProps, "children">) => {
  return <div css={backGroundStyle} {...props}></div>;
};

Modal.Container = ({ position = "center", gap = 16, children, ...props }: ModalContainerProps) => {
  return (
    <div css={ModalContainerStyle(position, gap)} onClick={(e: React.MouseEvent) => e.stopPropagation()} {...props}>
      {children}
    </div>
  );
};

Modal.Header = ({ closeButton = false, children, ...props }: ModalHeaderProps) => {
  const { onHide } = useModalContext();
  return (
    <div css={ModalHeaderStyle} {...props}>
      <span>{children}</span>
      {closeButton && <IconClose css={ModalCloseStyle} onClick={onHide} />}
    </div>
  );
};

Modal.Body = ({ children, ...props }: BaseProps) => {
  return (
    <div css={ModalBodyStyle} {...props}>
      {children}
    </div>
  );
};

Modal.Footer = ({ children, ...props }: BaseProps) => {
  return (
    <div css={ModalFooterStyle} {...props}>
      {children}
    </div>
  );
};

Modal.Title = ({ children, ...props }: BaseProps) => {
  return (
    <span css={ModalTitleStyle} {...props}>
      {children}
    </span>
  );
};

Modal.Button = ({
  onClick,
  fontSize = 16,
  color = "#fff",
  backgroundColor = "#333",
  borderColor = "#333",
  borderRadius = 5,
  children,
  ...props
}: ModalButtonProps) => {
  const cssProps = { fontSize, color, backgroundColor, borderColor, borderRadius };
  return (
    <button css={ModalButtonStyle(cssProps)} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Modal.Trigger = ({ children }: BaseProps) => {
  const { onHide } = useModalContext();

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const element = child as React.ReactElement<HTMLAttributes<Element>>;
      return React.cloneElement(element, {
        onClick: (e: React.MouseEvent) => {
          element.props.onClick?.(e);
          onHide();
        },
      });
    }
    return child;
  });
};

export default Modal;
