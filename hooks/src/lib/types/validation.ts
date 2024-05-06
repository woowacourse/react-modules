export type ValidatorFunction = (value: string) => boolean;

export interface Validator {
  test: ValidatorFunction;
  errorMessage: string;
}

export type Validators<T extends string> = Record<T, ValidatorFunction>;

export interface ValidationRules {
  onChange?: Validator[];
  onBlur?: Validator[];
}

export interface Validations {
  onChange?: Record<string, string>;
  onBlur?: Record<string, string>;
}
