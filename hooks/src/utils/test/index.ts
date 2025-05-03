import { act } from "@testing-library/react";
import { BaseInputState, ErrorState } from "../../lib/types";
import {
  handleChangeFn,
  TesInvalidInputParams,
  TestInputUpdateParams,
  TestMaxLengthParams,
  TestValidInputParams,
} from "./type";

export function testInputUpdate<T, K extends keyof T>({
  renderHookFn,
  handleChangeKey,
  stateKey,
  input,
}: TestInputUpdateParams<T, K>) {
  const { result } = renderHookFn();

  act(() => {
    (result.current[handleChangeKey] as handleChangeFn)(input);
  });

  expect((result.current[stateKey] as BaseInputState).value).toBe(input);
}

export function testInvalidInput<T, K extends keyof T>({
  renderHookFn,
  handleChangeKey,
  errorStateKey,
  input,
  errorMessage,
}: TesInvalidInputParams<T, K>) {
  const { result } = renderHookFn();

  act(() => {
    (result.current[handleChangeKey] as handleChangeFn)(input);
  });

  const errorState = result.current[errorStateKey] as ErrorState;
  expect(errorState.isValid).toBe(false);
  expect(errorState.errorMessage).toBe(errorMessage);
}

export function testValidInput<T, K extends keyof T>({
  renderHookFn,
  handleChangeKey,
  errorStateKey,
  input,
}: TestValidInputParams<T, K>) {
  const { result } = renderHookFn();

  act(() => {
    (result.current[handleChangeKey] as handleChangeFn)(input);
  });

  expect((result.current[errorStateKey] as ErrorState).isValid).toBe(true);
}

export function testMaxLength<T, K extends keyof T>({
  renderHookFn,
  handleChangeKey,
  stateKey,
  maxLength,
}: TestMaxLengthParams<T, K>) {
  const { result } = renderHookFn();

  act(() => {
    Array.from({ length: maxLength + 1 }).forEach((_, index) => {
      const userInput = "1".repeat(index + 1);
      (result.current[handleChangeKey] as handleChangeFn)(userInput);
    });
  });

  expect((result.current[stateKey] as BaseInputState).value).toHaveLength(
    maxLength
  );
}
