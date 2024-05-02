import { InputState, Status } from "./useInput";

export type ValidatorStatus = Extract<Status, "change" | "blur">;
export interface Validator {
  validate: (value: string) => boolean;
  errorMessage: string;
  index?: number[];
  type?: ValidatorStatus;
}

const validation = (inputState: InputState, validators: Validator[]) => {
  if (inputState.status === "default") {
    if (inputState.isError) inputState.resetError();
    return;
  }
  // focus 여부가 동일하고, 에러가 발생하는 것만 필터링
  const invalidValidators = validators
    .filter(({ type }) => type === inputState.status || type === undefined)
    .filter(({ validate }) => !validate(inputState.value));

  // 만약 에러가 없다면 에러를 초기화
  if (invalidValidators.length === 0) {
    if (inputState.isError) inputState.resetError();
    return;
  }

  // 에러메시지가 동일하지않으면, 에러메시지를 설정
  if (invalidValidators[0].errorMessage !== inputState.errorMessage) {
    inputState.setError(invalidValidators[0].errorMessage);
  }
};

export default validation;
