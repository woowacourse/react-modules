export interface CardError {
  errorMessage: string;
  isError: boolean;
}

export interface ExpiryDateError {
  errorMessage: {
    month: string;
    year: string;
  };
  isError: {
    month: boolean;
    year: boolean;
  };
}
