import { isOnlyEnglishWithOneSpace } from '../utils/validateCardInfo';
import useValidateInput from '../useValidateInput/useValidateInput';

const useCardHolderName = (initValue: string, maxLength: number = 50) => {
  const validateOnChange = (newValue: string) => {
    if (newValue.length > maxLength) {
      return {
        isValid: false,
        errorMessage: `이름은 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (isOnlyEnglishWithOneSpace(newValue)) {
      return {
        isValid: false,
        errorMessage:
          '이름은 영어만 입력이 가능해요.(글자 간 공백은 1개까지만 가능합니다.)',
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    return { isValid: true, errorMessage: '' };
  };

  const {
    value,
    errorMessage,
    isCompleted,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  } = useValidateInput({
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
export default useCardHolderName;
