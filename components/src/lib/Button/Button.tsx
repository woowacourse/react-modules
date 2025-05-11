import styled from '@emotion/styled';

type ButtonProps = {
  variant: 'confirm' | 'cancel'; // 'type'을 'variant'로 변경
  onClick: () => void;
  children: React.ReactNode;
};

function Button({variant, onClick, children}: ButtonProps) {
  return <StyledButton variant={variant} onClick={onClick}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button<{ variant: 'confirm' | 'cancel' }>` // 'type'을 'variant'로 변경
    width: 80px;
    height: 36px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 15px;
    color: ${({variant}) => (variant === 'confirm' ? '#ffffff' : '#333333')};
    background-color: ${({variant}) => (variant === 'confirm' ? '#333333' : '#ffffff')};
    border: ${({variant}) => (variant === 'confirm' ? 'none' : '1px solid #33333340')};

    &:hover {
        background-color: ${({variant}) =>
                variant === 'confirm' ? 'rgba(28, 28, 28, 0.6)' : 'rgba(224, 224, 224, 0.8)'};
    }
`;
