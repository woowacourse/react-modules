import useExpiryMonth, { ExpiryMonthOptions } from './useExpiryMonth';
import useExpiryYear, { ExpiryYearOptions } from './useExpiryYear';

export interface ExpiryDateOptions {
  month?: ExpiryMonthOptions;
  year?: ExpiryYearOptions;
}

const useExpiryDate = (
  initialValue: { month: string; year: string },
  options?: ExpiryDateOptions,
) => {
  const month = useExpiryMonth(initialValue.month, { ...options?.month });
  const year = useExpiryYear(initialValue.year, { ...options?.year });

  return { month, year };
};

export default useExpiryDate;
