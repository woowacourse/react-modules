import { useState, ChangeEvent } from "react";
import { validateLength } from "@/validate/validate";
import { ErrorStatus } from "@/types/errorStatus";

type ValidateType = (value: string) => void;

type InputsType<T> = {
  value: string;
  error: T | null;
};

const useInputs = <T>(
  initialValues: string[],
  validate: ValidateType,
  validLength: number[]
) => {
  const [values, setValues] = useState<InputsType<T>[]>(
    initialValues.map(() => ({
      value: "",
      error: null,
    }))
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    try {
      validate(e.target.value);
      setValues((prev) => {
        return prev.map((input, i) =>
          i === index ? { ...input, value: e.target.value, error: null } : input
        );
      });
    } catch (err) {
      if (err instanceof Error) {
        setValues((prev) => {
          return prev.map((input, i) =>
            i === index
              ? { ...input, value: e.target.value, error: err.message as T }
              : input
          );
        });
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    try {
      if (e.target.value.length !== validLength[index]) {
        validateLength(values[index].value, validLength[index]);
      } else {
        if (values[index].error === ErrorStatus.INVALID_LENGTH) {
          setValues((prev) => {
            return prev.map((input, i) =>
              i === index
                ? {
                    ...input,
                    error: null,
                  }
                : input
            );
          });
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        setValues((prev) => {
          return prev.map((input, i) =>
            i === index ? { ...input, error: err.message as T } : input
          );
        });
      }
    }
  };

  return {
    values,
    onChange: handleChange,
    onBlurValidLength: handleBlur,
  };
};

export default useInputs;
