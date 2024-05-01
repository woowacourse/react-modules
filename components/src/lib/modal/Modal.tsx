import * as Styled from "./Modal.styled";

interface ModalMainProps extends React.ComponentPropsWithRef<"section"> {
  children?: React.ReactNode;
  isOpen: boolean;
}

const ModalMain: React.FC<ModalMainProps> = ({
  children,
  isOpen,
  ...restProps
}) => {
  return (
    <>
      {isOpen && (
        <Styled.ModalBackdrop>
          <Styled.ModalWrapper {...restProps}>{children}</Styled.ModalWrapper>
        </Styled.ModalBackdrop>
      )}
    </>
  );
};

interface ModalHeaderProps extends React.ComponentPropsWithRef<"header"> {
  children?: React.ReactNode;
}

const ModalHeader = ({ children, ...restProps }: ModalHeaderProps) => {
  return <Styled.ModalHeader {...restProps}>{children}</Styled.ModalHeader>;
};

interface ModalTitleProps extends React.ComponentPropsWithRef<"span"> {
  children?: React.ReactNode | string;
}

const ModalTitle = ({ children, ...restProps }: ModalTitleProps) => {
  return <span {...restProps}>{children}</span>;
};

interface ModalCloseButtonProps extends React.ComponentPropsWithRef<"button"> {
  children?: React.ReactNode | string;
  onClick: () => void;
}

const ModalCloseButton = ({
  children,
  onClick,
  ...restProps
}: ModalCloseButtonProps) => {
  return (
    <button type="button" onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};

interface ModalContentProps extends React.ComponentPropsWithRef<"section"> {
  children?: React.ReactNode | string;
}

const ModalContent = ({ children, ...restProps }: ModalContentProps) => {
  return <section {...restProps}>{children}</section>;
};

interface ModalFooterProps extends React.ComponentPropsWithRef<"footer"> {
  children?: React.ReactNode;
}

const ModalFooter = ({ children, ...restProps }: ModalFooterProps) => {
  return <footer {...restProps}>{children}</footer>;
};

const Modal = Object.assign(ModalMain, {
  Header: ModalHeader,
  Title: ModalTitle,
  Button: ModalCloseButton,
  Content: ModalContent,
  Footer: ModalFooter,
});

export default Modal;
