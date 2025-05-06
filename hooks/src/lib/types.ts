export type ValidationFn = {
  condition: () => boolean;
  errorMsg: string;
};

export type CheckValidationType<T extends Record<string, string>> = {
  length: number;
  value: string;
  type: keyof T;
};

export type GetValidationFnsType = (
  length: number,
  value: string
) => ValidationFn[];

export type UseInputErrorProps<T extends Record<string, string>> = {
  initError: T;
  getValidationFns: GetValidationFnsType;
};
