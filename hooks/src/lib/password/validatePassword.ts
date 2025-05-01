import validation from '../validation';

const validatePassword = (password: string) => {
  const errorObject = {
    errorState: false,
    errorMessage: ''
  };

  if (!validation.isNumber(password) && password !== '') {
    return { errorState: true, errorMessage: '숫자만 입력하세요.' };
  }

  if (!validation.isValidLength(password, 2) && password !== '') {
    return { errorState: true, errorMessage: '2자리 숫자를 입력하세요.' };
  }

  return errorObject;
};

export default validatePassword;
