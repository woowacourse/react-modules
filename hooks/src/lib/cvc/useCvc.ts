import { ChangeEvent, useState } from 'react';
import validateCvc from './validateCvc';

function useCvc() {
  const [cvc, setCvc] = useState<string>('');

  const handleCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCvc(value);
  };

  return {
    cvc,
    errorState: validateCvc(cvc),
    handleCvcChange
  };
}

export default useCvc;
