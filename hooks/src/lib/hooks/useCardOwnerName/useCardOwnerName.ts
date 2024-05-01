import { useState } from 'react';
import { unifySpaces, filterEnglishAndSpaces } from '../../utils/stringHelpers';

export const OWNER_NAME_ERROR_MESSAGES = {
  EXCESSIVE_WHITE_SPACE: '공백을 연속으로 입력할 수 없습니다.',
  NOT_ENG: '영어만 입력 가능합니다.',
};

const useCardOwnerName = () => {
  const [ownerName, setOwnerName] = useState('');
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

    if (isExcessiveWhiteSpace && unifiedSpaceName.length !== 0)
      return OWNER_NAME_ERROR_MESSAGES.EXCESSIVE_WHITE_SPACE;

    if (engName.length < name.length) return OWNER_NAME_ERROR_MESSAGES.NOT_ENG;

    return '';
  };

  const handleOwnerNameChange = (name: string) => {
    const validOwnerName = makeValidOwnerName(name);
    const errorMessage = getErrorMessage(name);

    setOwnerNameErrorMessage(errorMessage);
    setOwnerName(validOwnerName);

    setIsValidOwnerName(validOwnerName.length >= 1);
  };

  return {
    ownerName,
    isValidOwnerName,
    ownerNameErrorMessage,
    handleOwnerNameChange,
  };
};

export default useCardOwnerName;
