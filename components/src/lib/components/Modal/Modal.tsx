import React, { useState } from 'react';
import {
  CloseButtonContainer,
  FooterContainer,
  HeaderContainer,
  ModalContainer,
  ModalContentContainer,
  ModalOverlay,
  StyledButton,
  StyledDescription,
  StyledTitle,
  TitleContainer,
} from './Modal.styles';
import { CloseIcon } from './CloseIcon';
import useModalContext, { ModalContext } from './hooks/useModalContext';
import useFocusTrap from './hooks/useFocusTrap';
import Button from '../Button/Button';
import { ActionButtonType, BaseProps, ModalProps } from './Modal.types';

function Modal({ children, className, size = 'medium' }: ModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen, size }}>
      <ModalContainer className={className}>{children}</ModalContainer>
    </ModalContext.Provider>
  );
}

function Trigger({ children, className, asChild }: BaseProps & { asChild?: boolean; children?: React.ReactNode }) {
  const { setOpen } = useModalContext();

  if (asChild && React.isValidElement(children)) {
    const element = children as React.ReactElement<{
      onClick?: (e: React.MouseEvent) => void;
      className?: string;
    }>;

    return React.cloneElement(element, {
      ...element.props,
      onClick: (e: React.MouseEvent) => {
        element.props.onClick?.(e);
        setOpen(true);
      },
      className: `${element.props.className || ''} ${className || ''}`.trim(),
    });
  }

  return (
    <StyledButton className={className} onClick={() => setOpen(true)}>
      {children}
    </StyledButton>
  );
}

function Content({ children, className }: BaseProps) {
  const { open, setOpen, size } = useModalContext();
  const contentRef = useFocusTrap(open, setOpen);

  if (!open) return null;

  return (
    <>
      <ModalOverlay onClick={() => setOpen(false)} />
      <ModalContentContainer
        ref={contentRef}
        className={className}
        size={size || 'medium'}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </ModalContentContainer>
    </>
  );
}

function Header({ children, className }: BaseProps) {
  if (React.Children.count(children) > 0) {
    return <HeaderContainer className={className}>{children}</HeaderContainer>;
  }

  return (
    <HeaderContainer className={className}>
      <TitleContainer />
      <CloseButton />
    </HeaderContainer>
  );
}

function Title({ children, className }: BaseProps) {
  return <StyledTitle className={className}>{children}</StyledTitle>;
}

function Description({ children, className }: BaseProps) {
  return <StyledDescription className={className}>{children}</StyledDescription>;
}

function Footer({ children, className }: BaseProps) {
  return <FooterContainer className={className}>{children}</FooterContainer>;
}

function CloseButton({ className }: Pick<BaseProps, 'className'>) {
  const { setOpen } = useModalContext();

  return (
    <CloseButtonContainer className={className} onClick={() => setOpen(false)}>
      <CloseIcon />
    </CloseButtonContainer>
  );
}

function HeaderTitleWrapper({ children, className }: BaseProps) {
  return (
    <>
      <TitleContainer className={className}>{children}</TitleContainer>
      <CloseButton />
    </>
  );
}

function ActionButton({
  children,
  className,
  onClick,
  action = 'confirm',
  closeOnClick = true,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  action?: ActionButtonType;
  closeOnClick?: boolean;
}) {
  const { setOpen } = useModalContext();

  const defaultText = action === 'confirm' ? '확인' : action === 'cancel' ? '취소' : '확인';
  const buttonVariant = action === 'confirm' ? 'primary' : action === 'cancel' ? 'secondary' : 'primary';

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick(e);
    if (closeOnClick) setOpen(false);
  };

  return (
    <Button className={className} onClick={handleClick} variant={buttonVariant} {...props}>
      {children || defaultText}
    </Button>
  );
}

const ConfirmButton = (props: Omit<React.ComponentProps<typeof ActionButton>, 'action'>) => (
  <ActionButton action="confirm" {...props} />
);

const CancelButton = (props: Omit<React.ComponentProps<typeof ActionButton>, 'action'>) => (
  <ActionButton action="cancel" {...props} />
);

Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Header = Header;
Modal.Title = Title;
Modal.Description = Description;
Modal.Footer = Footer;
Modal.CloseButton = CloseButton;
Modal.HeaderTitleWrapper = HeaderTitleWrapper;
Modal.ActionButton = ActionButton;
Modal.ConfirmButton = ConfirmButton;
Modal.CancelButton = CancelButton;

export { Modal };
