import styled from "@emotion/styled";

type InputProps = {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
};

const Input = ({ title, value, onChange, name, placeholder }: InputProps) => {
  return (
    <Wrapper>
      <Label>{title}</Label>
      <StyledInput
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  width: 100%;
`;

const Label = styled.p`
  margin-top: 20px;
  margin-bottom: 8px;
  font-size: 14px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;

  background: white;
  color: black;

  &:focus {
    outline: none;
    border-color: #333;
  }
`;
