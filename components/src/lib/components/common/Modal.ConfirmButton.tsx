import styled from '@emotion/styled';

const ModalConfirmButton = ({
  onClick,
  children,
  $autoFocus = false,
}: {
  onClick: () => void;
  children: React.ReactNode;
  $autoFocus?: boolean;
}) => {
  return (
    <StyledConfirmButton
      type="button"
      onClick={onClick}
      aria-label="confirmButton"
      autoFocus={$autoFocus}
    >
      {children}
    </StyledConfirmButton>
  );
};

export default ModalConfirmButton;

const StyledConfirmButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  padding: 8px 4px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;
