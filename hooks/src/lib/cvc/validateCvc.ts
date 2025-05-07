import validation from '../validation';

const validateCvc = (cvc: string) => {
  const errorObject = {
    errorState: false,
    errorMessage: ''
  };

  if (!validation.isNumber(cvc) && cvc !== '') {
    return { errorState: true, errorMessage: '숫자만 입력하세요.' };
  }

  if (!validation.isValidLength(cvc, 3) && cvc !== '') {
    return { errorState: true, errorMessage: '3자리 숫자를 입력하세요.' };
  }

  return errorObject;
};

export default validateCvc;
