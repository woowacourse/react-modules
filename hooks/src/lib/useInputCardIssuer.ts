import { useInput } from "./useInput";

const useInputCardIssuer = () => {
  const { value, status, setValue, setStatus } = useInput("");

  const handleChange = (value: string) => {
    setStatus("complete");
    setValue(value);
  };

  return [value, status, handleChange];
};

export default useInputCardIssuer;
