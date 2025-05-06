export type ValidationFn = {
  condition: () => boolean;
  errorMsg: string;
};

export type CheckValidationType<T extends Record<string, string>> = {
  value: string;
  type: keyof T;
};

export type GetValidationFnsType = (value: string) => ValidationFn[];

export type UseInputErrorProps<T extends Record<string, string>> = {
  initError: T;
  getValidationFns: GetValidationFnsType;
};
