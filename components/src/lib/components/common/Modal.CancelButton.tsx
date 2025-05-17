import styled from '@emotion/styled';

const ModalCancelButton = ({
  onClose,
  children,
  $autoFocus = false,
}: {
  onClose: () => void;
  children: React.ReactNode;
  $autoFocus?: boolean;
}) => {
  return (
    <StyledCancelButton
      type="button"
      onClick={onClose}
      aria-label="cancelButton"
      autoFocus={$autoFocus}
    >
      {children}
    </StyledCancelButton>
  );
};

export default ModalCancelButton;

const StyledCancelButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  padding: 8px 0;
  background-color: #f3f4f6;
  color: #333333;
  cursor: pointer;
  border: 1px solid #333333;
  border-radius: 4px;
`;
