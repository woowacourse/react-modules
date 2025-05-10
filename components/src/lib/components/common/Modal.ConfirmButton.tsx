import styled from '@emotion/styled';

const ModalConfirmButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <StyledConfirmButton type="button" onClick={onClick} aria-label="confirmButton">
      {children}
    </StyledConfirmButton>
  );
};

export default ModalConfirmButton;

const StyledConfirmButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 8px 4px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;
