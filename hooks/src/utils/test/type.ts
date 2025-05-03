import type { RenderHookResult } from "@testing-library/react";

export type handleChangeFn = (value: string) => void;

export interface TestInputBaseParams<T, K extends keyof T> {
  renderHookFn: () => RenderHookResult<T, unknown>;
  handleChangeKey: K;
}

export interface TestInputUpdateParams<T, K extends keyof T>
  extends TestInputBaseParams<T, K> {
  stateKey: K;
  input: string;
}

export interface TesInvalidInputParams<T, K extends keyof T>
  extends TestInputBaseParams<T, K> {
  errorStateKey: K;
  input: string;
  errorMessage: string;
}

export interface TestValidInputParams<T, K extends keyof T>
  extends TestInputBaseParams<T, K> {
  errorStateKey: K;
  input: string;
}

export interface TestMaxLengthParams<T, K extends keyof T>
  extends TestInputBaseParams<T, K> {
  stateKey: K;
  maxLength: number;
}
