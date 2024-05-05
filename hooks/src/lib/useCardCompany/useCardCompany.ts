import useInputValidate from '../useInputValidate/useInputValidate';

const useCardCompany = (initValue: string, companyList: string[]) => {
  const validateOnChange = () => {
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    if (!companyList.includes(value)) {
      return { isValid: false, errorMessage: '존재하지 않는 카드사입니다.' };
    }
    return { isValid: true, errorMessage: '' };
  };

  const {
    value,
    errorMessage,
    isCompleted,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  } = useInputValidate({
    initValue,
    validateOnChange,
    validateOnBlur,
  });

  return {
    value,
    errorMessage,
    isCompleted,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useCardCompany;
