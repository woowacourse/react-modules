import {
  useRef,
  useEffect,
  HTMLAttributes,
  CSSProperties,
  ButtonHTMLAttributes,
} from "react";

import * as Styled from "./Modal.styled";

export interface ModalProps extends React.PropsWithChildren {
  children?: React.ReactNode;
  isOpen: boolean;
  position: "top" | "bottom" | "center";
  onClose: () => void;
  style?: CSSProperties;
}

const Modal: React.FC<ModalProps> & {
  ModalHeader: ModalHeaderType;
  ModalTitle: ModalTitleType;
  ModalCloseButton: ModalButtonType;
  ModalLongButton: ModalButtonType;
  ModalContent: ModalContentType;
  ModalFooter: ModalFooterType;
} = ({ children, isOpen, position, ...restProps }) => {
  const modalBackdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModalHandler();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", keyListener);
    }

    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  }, [isOpen]);

  const closeModalHandler = () => {
    if (restProps.onClose) {
      restProps.onClose();
    }
  };

  const clickBackDropHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === modalBackdropRef.current) {
      closeModalHandler();
    }
  };

  return (
    <>
      {isOpen && (
        <Styled.ModalBackdrop
          ref={modalBackdropRef}
          onClick={clickBackDropHandler}
        >
          <Styled.ModalWrapper position={position} {...restProps}>
            {children}
          </Styled.ModalWrapper>
        </Styled.ModalBackdrop>
      )}
    </>
  );
};

type ModalHeaderType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLElement>>
>;

const ModalHeader: ModalHeaderType = ({ children, ...restProps }) => {
  return <Styled.ModalHeader {...restProps}>{children}</Styled.ModalHeader>;
};

type ModalTitleType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLSpanElement>>
>;

const ModalTitle: ModalTitleType = ({ children, ...restProps }) => {
  return <Styled.ModalTitle {...restProps}>{children}</Styled.ModalTitle>;
};

type ModalButtonType = React.FC<ButtonHTMLAttributes<HTMLButtonElement>>;

const ModalCloseButton: ModalButtonType = ({ children, ...restProps }) => {
  return (
    <Styled.ModalCloseButton {...restProps}>{children}</Styled.ModalCloseButton>
  );
};

const ModalLongButton: ModalButtonType = ({ children, ...restProps }) => {
  return (
    <Styled.ModalLongButton type="button" {...restProps}>
      {children}
    </Styled.ModalLongButton>
  );
};

type ModalContentType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLElement>>
>;

const ModalContent: ModalContentType = ({ children, ...restProps }) => {
  return <Styled.ModalContent {...restProps}>{children}</Styled.ModalContent>;
};

type ModalFooterType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>;

const ModalFooter: ModalFooterType = ({ children, ...restProps }) => {
  return <Styled.ModalFooter {...restProps}>{children}</Styled.ModalFooter>;
};

Modal.ModalHeader = ModalHeader;
Modal.ModalTitle = ModalTitle;
Modal.ModalCloseButton = ModalCloseButton;
Modal.ModalLongButton = ModalLongButton;
Modal.ModalContent = ModalContent;
Modal.ModalFooter = ModalFooter;

export default Modal;
