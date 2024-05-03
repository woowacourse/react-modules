import { useEffect } from "react";
import { Validator } from "./validation";
import { InputState } from "./useInput";
import validations from "./validations";
import { makeOnBlur, makeOnChange } from "./makeCallback";

const flatten = <K extends keyof InputState>(states: InputState[], key: K) =>
  states.map((inputState) => inputState[key]);

const useDeepCompareEffect = <T>(callback: () => void, dependencies: T[]) => {
  const dependency = dependencies.map((dependency) => JSON.stringify(dependency)).join("+");
  useEffect(callback, [dependency]);
};

const useValidations = (inputStates: InputState[], validators: Validator[]) => {
  const values = flatten(inputStates, "value");
  const isErrors = flatten(inputStates, "isError");

  useDeepCompareEffect(() => {
    validations(inputStates, validators);
  }, [values, isErrors]);

  const onChanges = inputStates.map(makeOnChange);
  const onBlurs = inputStates.map(makeOnBlur);
  return { inputStates, onChanges, onBlurs };
};

export default useValidations;
