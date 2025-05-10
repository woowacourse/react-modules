import styled from "@emotion/styled";

type CancelButtonProps = {
  cancelText: string;
  onClick: () => void;
};

const CancelButton = ({ cancelText, onClick }: CancelButtonProps) => {
  return <Button onClick={onClick}>{cancelText}</Button>;
};

export default CancelButton;

const Button = styled.button`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #333333;
  background-color: white;
`;
