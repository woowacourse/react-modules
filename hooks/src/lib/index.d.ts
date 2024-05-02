declare module 'cookie-nice-card-hooks' {
  type ValidationResult = {
    isValid: boolean;
    errorMessage: string;
  };

  type CardNumbersOptions = {
    isAutoFocus?: boolean;
  };

  type UseCardTypeProps = {
    initialValue: string;
    options: string[];
    placeholder: string;
  };

  type ExpiryDateOptions = {
    month?: {
      isAutoFocus?: boolean;
    };
    year?: {
      isAutoFocus?: boolean;
    };
  };

  function useCVC(initialValue: string): {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    errorInfo: ValidationResult;
  };

  function useCardHolder(initialValue: string): {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    errorInfo: ValidationResult;
  };

  function useCardNumbers(
    initialValue: Record<string, string>,
    options?: CardNumbersOptions,
  ): {
    value: Record<string, string>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>, name: string) => void;
    errorInfo: Record<string, ValidationResult>;
  };

  function useCardType({ initialValue, options, placeholder }: UseCardTypeProps): {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    errorInfo: ValidationResult;
  };

  const useExpiryDate: (
    initialValue: {
      month: string;
      year: string;
    },
    options?: ExpiryDateOptions,
  ) => {
    month: {
      value: string;
      handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
      errorInfo: ValidationResult;
    };
    year: {
      value: string;
      handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
      errorInfo: ValidationResult;
    };
  };

  function usePassword(initialValue: string): {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    errorInfo: ValidationResult;
  };
}
