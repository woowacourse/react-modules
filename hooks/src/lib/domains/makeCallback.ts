import { ChangeEvent, FocusEvent } from "react";
import { InputState } from "./useInput";

export const makeOnChange = (inputState: InputState) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    inputState.setValue(value);
    inputState.setStatus("change");
  };
};
export const makeOnBlur = (inputState: InputState) => {
  return (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    inputState.setValue(value);
    inputState.setStatus("blur");
  };
};

export const makeChangeEvent = (value: string) =>
  ({
    target: {
      value,
    },
  }) as ChangeEvent<HTMLInputElement>;

export const makeBlurEvent = (value: string) =>
  ({
    target: {
      value,
    },
  }) as FocusEvent<HTMLInputElement>;
