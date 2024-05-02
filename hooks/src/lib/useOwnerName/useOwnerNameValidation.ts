import { useState } from 'react';
import { isValidName } from './useOwnerName.util';
import { OWNER_NAME_ERROR_TYPE } from './useOwnerName.constant';

const useOwnerNameValidation = () => {
  const [ownerNameError, setOwnerNameError] = useState({ isError: false, errorMessage: '' });

  const validateOwnerName = (value: string) => {
    if (!isValidName(value)) {
      setOwnerNameError({ isError: true, errorMessage: '카드 소유자 이름은 영문으로 입력해야 합니다.' });
      return OWNER_NAME_ERROR_TYPE.invalidName;
    }

    setOwnerNameError({ isError: false, errorMessage: '' });
    return OWNER_NAME_ERROR_TYPE.notError;
  };

  return { ownerNameError, validateOwnerName };
};

export default useOwnerNameValidation;
