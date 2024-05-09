import { useState } from 'react';
import { unifySpaces, filterEnglishAndSpaces } from '../../utils/stringHelpers';

export const OWNER_NAME_DEFAULT_LENGTH = 21;

export const OWNER_NAME_ERROR_MESSAGES = {
  NOT_ENG: 'NOT_ENG',
  MAX_LENGTH: 'MAX_LENGTH',
  EXCESSIVE_WHITE_SPACE: 'EXCESSIVE_WHITE_SPACE',
};

const useCardOwnerName = (validLength: number = OWNER_NAME_DEFAULT_LENGTH, initialValue: string = '') => {
  const [ownerName, setOwnerName] = useState(initialValue);
  const [isValidOwnerName, setIsValidOwnerName] = useState(false);
  const [ownerNameErrorMessage, setOwnerNameErrorMessage] = useState('');

  const makeValidOwnerName = (name: string) => {
    const engName = filterEnglishAndSpaces(name.toUpperCase());
    return unifySpaces(engName);
  };

  const getErrorMessage = (name: string) => {
    const engName = filterEnglishAndSpaces(name.toUpperCase());
    const unifiedSpaceName = unifySpaces(engName);
    const isExcessiveWhiteSpace = engName.length > unifiedSpaceName.length;

    if (isExcessiveWhiteSpace && unifiedSpaceName.length !== 0) return OWNER_NAME_ERROR_MESSAGES.EXCESSIVE_WHITE_SPACE;
    if (engName.length < name.length) return OWNER_NAME_ERROR_MESSAGES.NOT_ENG;
    if (unifiedSpaceName.length > validLength) return OWNER_NAME_ERROR_MESSAGES.MAX_LENGTH;

    return '';
  };

  const validateOwnerName = (name: string) => {
    const errorMessage = getErrorMessage(name);

    setOwnerNameErrorMessage(errorMessage);
    setIsValidOwnerName(!errorMessage);
  };

  const handleOwnerNameChange = (name: string) => {
    const validOwnerName = makeValidOwnerName(name);

    if (validOwnerName.length > validLength) return;

    validateOwnerName(validOwnerName);
    setOwnerName(validOwnerName);
  };

  return {
    ownerName,
    isValidOwnerName,
    ownerNameErrorMessage,
    handleOwnerNameChange,
  };
};

export default useCardOwnerName;
