import { useCallback, useMemo, useState } from 'react';
import {
  CARD_NUMBER_ERROR_TYPES,
  CardBrandType,
  CardNumberFieldType,
  ERROR_MESSAGE,
} from '../config';
import { ValidationResult } from '../types';
import {
  createFieldLengthMap,
  createInitialCardNumbers,
  createValidationResult,
  detectCardBrand,
} from '../utils';
import { objectEntries } from '../utils/objectEntries';
import { checkIsNumber, checkIsValidLength } from '../validators';

/**
 * @description
 * `useCardNumbers`는 여러 카드 번호 입력 필드를 관리하고,
 * 각 입력 값의 유효성 검사 및 카드 브랜드를 감지하는 React 훅입니다.
 *
 * @param {CardNumberFieldType[]} fields - 관리할 카드 번호 입력 필드 배열입니다.
 *   각 필드는 입력 필드의 이름(`name`)과 허용할 최대 길이(`length`)를 포함합니다.
 *
 * @returns {object} 카드 번호 입력 상태 및 관련 기능을 포함하는 객체입니다.
 * @property {Record<T, string>} cardNumbers - 각 입력 필드의 현재 입력 값입니다.
 * @property {Record<T, ValidationResult>} validationResults - 각 입력 필드의 유효성 검사 결과입니다.
 * @property {CardBrandType} cardBrand - 현재 입력된 카드 번호로 감지된 카드 브랜드입니다. (예: VISA, MASTERCARD 등)
 * @property {(key: T, value: string) => keyof typeof CARD_NUMBER_ERROR_TYPES | null} getCardNumberValidationError - 특정 입력 값에 대한 유효성 검사 에러를 반환하는 함수입니다.
 * @property {(params: { key: T; value: string; options?: { skipValidation?: boolean } }) => void} handleCardNumbersChange - 카드 번호 입력 값을 업데이트하는 함수입니다.
 *   - `params.key` : 업데이트할 필드 이름입니다.
 *   - `params.value` : 업데이트할 입력 문자열입니다.
 *   - `params.options.skipValidation` : 유효성 검사를 건너뛸지 여부입니다. 기본값은 `false`입니다.
 *     `true`로 설정하면 입력 값이 형식에 맞지 않아도 강제로 상태를 업데이트합니다. (예: 서버 응답 적용, 자동 입력 상황)
 *
 * @example
 * const { cardNumbers, validationResults, cardBrand, handleCardNumbersChange } = useCardNumbers([
 *   { name: 'part1', length: 4 },
 *   { name: 'part2', length: 4 },
 *   { name: 'part3', length: 4 },
 *   { name: 'part4', length: 4 },
 * ]);
 *
 * <input
 *   value={cardNumbers.part1}
 *   onChange={(e) => handleCardNumbersChange({ key: 'part1', value: e.target.value })}
 * />
 */

function useCardNumbers<T extends string>(fields: CardNumberFieldType<T>[]) {
  const [cardNumbers, setCardNumbers] = useState<Record<T, string>>(() =>
    createInitialCardNumbers(fields)
  );
  const fieldLengthMap = useMemo(() => createFieldLengthMap(fields), [fields]);

  const getCardNumberValidationError = useCallback(
    (key: T, value: string) => {
      const isNumber = checkIsNumber(value);
      const isValidLength = checkIsValidLength(value, fieldLengthMap[key]);

      if (!isNumber) return CARD_NUMBER_ERROR_TYPES.notNumber;
      if (!isValidLength) return CARD_NUMBER_ERROR_TYPES.invalidLength;

      return null;
    },
    [fieldLengthMap]
  );

  const validationResults: Record<T, ValidationResult> = useMemo(
    () =>
      objectEntries<Record<T, string>>(cardNumbers).reduce(
        (acc, [key, value]) => {
          acc[key] = createValidationResult(ERROR_MESSAGE.cardNumber, [
            getCardNumberValidationError(key, value),
          ]);
          return acc;
        },
        {} as Record<T, ValidationResult>
      ),
    [cardNumbers, getCardNumberValidationError]
  );

  const cardBrand: CardBrandType = useMemo(() => {
    const fullNumber = Object.values(cardNumbers).join('');
    return detectCardBrand(fullNumber);
  }, [cardNumbers]);

  const handleCardNumbersChange = useCallback(
    (key: T, value: string, options?: { skipValidation?: boolean }) => {
      const errorType = getCardNumberValidationError(key as T, value);

      const shouldSkipValidation = options?.skipValidation ?? false;

      if (!shouldSkipValidation && errorType) {
        return;
      }

      setCardNumbers((prev) => ({ ...prev, [key]: value }));
    },
    [getCardNumberValidationError]
  );

  return {
    cardNumbers,
    validationResults,
    cardBrand,
    getCardNumberValidationError,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
