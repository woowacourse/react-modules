import useKeyEscClose from "./hooks/useKeyEscClose";
import IconClose from "./components/IconClose";
import {
  BaseProps,
  ModalHeaderProps,
  ModalProps,
  ModalContainerProps,
  ModalButtonProps,
  ModalAlertContainerProps,
  ModalConfirmContainerProps,
} from "./types";
import {
  backGroundStyle,
  ModalBodyStyle,
  ModalButtonStyle,
  ModalCloseStyle,
  ModalContainerStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
  ModalInputStyle,
  ModalTitleStyle,
  ModalWrapperStyle,
} from "./Modal.style";
import ModalContext, { useModalContext } from "./contexts/ModalContext";
import React, { ComponentProps, HTMLAttributes } from "react";

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

Modal.Container = ({ size = "default", position = "center", gap = 16, children, ...props }: ModalContainerProps) => {
  return (
    <div
      css={ModalContainerStyle(size, position, gap)}
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      {...props}
    >
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

Modal.Input = (props: ComponentProps<"input">) => {
  return <input css={ModalInputStyle} {...props} />;
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

/** 커스텀 모달 Container */
/**확인(Alert) 모달 */
Modal.AlertContainer = ({ title, description, ...props }: ModalAlertContainerProps) => {
  return (
    <Modal.Container {...props}>
      {title && (
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      {description && <Modal.Body>{description}</Modal.Body>}
      <Modal.Footer style={{ display: "flex", justifyContent: "flex-end" }}>
        <Modal.Trigger>
          <Modal.Button>확인</Modal.Button>
        </Modal.Trigger>
      </Modal.Footer>
    </Modal.Container>
  );
};

/**확인/취소(Confirm) 모달 */
Modal.ConfirmContainer = ({ title, description, onClick, ...props }: ModalConfirmContainerProps) => {
  return (
    <Modal.Container {...props}>
      {title && (
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      {description && <Modal.Body>{description}</Modal.Body>}
      <Modal.Footer style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
        <Modal.Trigger>
          <Modal.Button color="rgba(51, 51, 51, 0.75)" backgroundColor="#fff" borderColor="rgba(51, 51, 51, 0.25)">
            취소
          </Modal.Button>
          <Modal.Button onClick={onClick}>확인</Modal.Button>
        </Modal.Trigger>
      </Modal.Footer>
    </Modal.Container>
  );
};
export default Modal;
