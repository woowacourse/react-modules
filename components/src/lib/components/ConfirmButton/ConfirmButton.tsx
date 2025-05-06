import styled from "@emotion/styled";

type ConfirmButtonProps = {
  confirmText: string;
  onClick: () => void;
};

const ConfirmButton = ({ confirmText, onClick }: ConfirmButtonProps) => {
  return <Button onClick={onClick}>{confirmText}</Button>;
};

export default ConfirmButton;

const Button = styled.button`
  width: 100%;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;
