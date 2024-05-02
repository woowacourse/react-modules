import { useState } from 'react';
import useOwnerNameValidation from './useOwnerNameValidation';
import { OWNER_NAME_ERROR_TYPE } from './useOwnerName.constant';

const useOwnerName = () => {
  const [ownerName, setOwnerName] = useState('');

  const { ownerNameError, validateOwnerName } = useOwnerNameValidation();

  const handleChangeOwnerName = (value: string) => {
    const errorType = validateOwnerName(value);

    if ((value.length !== 0 && errorType === OWNER_NAME_ERROR_TYPE.invalidName) || value.length > 20) return;

    setOwnerName(value);
  };

  return { ownerName: ownerName.toUpperCase(), ownerNameError, handleChangeOwnerName };
};

export default useOwnerName;
