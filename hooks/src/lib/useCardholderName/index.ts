import REGEXPS from '../constants/regExps';
import { useState } from 'react';
import useValidation from '../useValidation';

const TWO_BLANKS = '  ';
const cardholderNameValidators = [
  (value: string) => {
    if (!REGEXPS.onlyEnglishOrSpace.test(value)) {
      return '소유자명은 영문 대문자만 포함해야 합니다.';
    }
  },
  (value: string) => {
    if (value.trim() !== value) {
      return '소유자명 양 끝에 공백이 포함될 수 없습니다.';
    }
  },
  (value: string) => {
    if (value.includes(TWO_BLANKS)) {
      return '소유자명의 사이 공백은 최대 한 칸 입력할 수 있습니다';
    }
  },
];

export default function useCardholderName() {
  const [value, setValue] = useState('');
  const { errorStatus, validate } = useValidation<string>(
    cardholderNameValidators
  );

  const setCardholderName = (string: string) => {
    setValue(string);
    validate(string);
  };

  return { cardholderName: value, setCardholderName, errorStatus };
}
