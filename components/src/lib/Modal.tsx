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
  ModalPromptContainerProps,
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
import FocusTrap from "./FocusTrap";

const Modal = ({ show, onHide, children, ...props }: ModalProps) => {
  useKeyEscClose(onHide);

  return (
    <ModalContext.Provider value={{ onHide }}>
      <FocusTrap>
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          css={ModalWrapperStyle(show)}
          onClick={onHide}
          {...props}
        >
          {children}
        </div>
      </FocusTrap>
    </ModalContext.Provider>
  );
};

const BackDrop = (props: Omit<BaseProps, "children">) => {
  return <div css={backGroundStyle} {...props}></div>;
};

const Container = ({ size = "default", position = "center", gap = 16, children, ...props }: ModalContainerProps) => {
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

const Header = ({ closeButton = false, children, ...props }: ModalHeaderProps) => {
  const { onHide } = useModalContext();
  return (
    <header css={ModalHeaderStyle} {...props}>
      <span>{children}</span>
      {closeButton && <IconClose css={ModalCloseStyle} onClick={onHide} />}
    </header>
  );
};

const Body = ({ children, ...props }: BaseProps) => {
  return (
    <div css={ModalBodyStyle} {...props}>
      {children}
    </div>
  );
};

const Footer = ({ children, ...props }: BaseProps) => {
  return (
    <footer css={ModalFooterStyle} {...props}>
      {children}
    </footer>
  );
};

const Title = ({ children, ...props }: BaseProps) => {
  return (
    <span id="modal-title" css={ModalTitleStyle} {...props}>
      {children}
    </span>
  );
};

const Button = ({
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

const Input = (props: ComponentProps<"input">) => {
  return <input css={ModalInputStyle} {...props} />;
};

const Trigger = ({ children }: BaseProps) => {
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
const AlertContainer = ({ title, description, ...props }: ModalAlertContainerProps) => {
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
const ConfirmContainer = ({ title, description, onClick, ...props }: ModalConfirmContainerProps) => {
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

/**입력(Prompt) 모달 */
const PromptContainer = ({ title, value, onChange, onClick, ...props }: ModalPromptContainerProps) => {
  return (
    <Modal.Container {...props}>
      {title && (
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>
        <Modal.Input value={value} onChange={onChange} />
      </Modal.Body>
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

BackDrop.displayName = "Modal.Backdrop";
Container.displayName = "Modal.Container";
Header.displayName = "Modal.Header";
Body.displayName = "Modal.Body";
Footer.displayName = "Modal.Footer";
Title.displayName = "Modal.Title";
Button.displayName = "Modal.Button";
Input.displayName = "Modal.Input";
Trigger.displayName = "Modal.Trigger";
AlertContainer.displayName = "Modal.AlertContainer";
ConfirmContainer.displayName = "Modal.ConfirmContainer";
PromptContainer.displayName = "Modal.PromptContainer";

Modal.BackDrop = BackDrop;
Modal.Container = Container;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.Title = Title;
Modal.Button = Button;
Modal.Input = Input;
Modal.Trigger = Trigger;
Modal.AlertContainer = AlertContainer;
Modal.ConfirmContainer = ConfirmContainer;
Modal.PromptContainer = PromptContainer;

export default Modal;
