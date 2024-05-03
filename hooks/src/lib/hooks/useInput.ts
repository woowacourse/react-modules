import useRestrictedState from "./useRestrictedState";

const useInput = () => {
  const { valueState, errorState } = useRestrictedState();
  const { value, setValue } = valueState;
  const { isError, errorMessage, setError } = errorState;

  return {
    valueState: { value, setValue },
    errorState: { isError, errorMessage, setError },
  };
};

export default useInput;
