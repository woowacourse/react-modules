import { Dispatch, SetStateAction } from 'react';
import { ErrorMessage } from './hooks';

export interface Validator<V> {
  test: (value: V) => boolean;
  errorMessage: string;
}
export interface ValidatorWithKey<V, K> {
  test: (value: V, key: K) => boolean;
  errorMessage: string;
}

export interface UseValidationProps<V> {
  validators: Validator<V>[];
  value: V;
}

export interface ValidationResult {
  isValid: boolean;
  errorMessage: string | null;
}

export interface ValidationParam<V> {
  value: V;
  validators: Validator<V>[];
}
export interface ValidationWidthKeyParam<V, K> {
  value: V;
  key: K;
  validators: ValidatorWithKey<V, K>[];
}

export interface UseCardValidationProps<V> {
  blurEventValidators?: Validator<V>[];
  changeEventValidators?: Validator<V>[];
  totalValidators?: Validator<V>[];
  setValue: Dispatch<SetStateAction<V>>;
  setErrorMessage: Dispatch<SetStateAction<ErrorMessage>>;
}

export interface UseCardValidationWidthKeyProps<V, K> extends Omit<UseCardValidationProps<V>, 'setValue'> {
  applyNewValue: (value: V, key: K) => void;
  applyNewError: (isValid: boolean, key: K) => void;
}
