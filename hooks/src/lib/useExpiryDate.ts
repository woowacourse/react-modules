import useExpiryMonth from './useExpiryMonth';
import useExpiryYear from './useExpiryYear';

interface Options {
  month?: {
    isAutoFocus?: boolean;
  };
  year?: {
    isAutoFocus?: boolean;
  };
}

const useExpiryDate = (options?: Options) => {
  const month = useExpiryMonth({ ...options?.month });
  const year = useExpiryYear({ ...options?.year });

  return { month, year };
};

export default useExpiryDate;
