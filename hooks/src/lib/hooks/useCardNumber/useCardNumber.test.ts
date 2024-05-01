import { renderHook, waitFor } from '@testing-library/react';
import { NUMBER_ERROR_MESSAGES } from '../../utils/validation/validation';
import useCardNumber from './useCardNumber';

const VALID_UNIT_COUNT = 4;
const VALID_SINGLE_UNIT_LENGTH = 4;

describe('useCardNumber 커스텀 훅 테스트', () => {
  const { result } = renderHook(() => useCardNumber(VALID_UNIT_COUNT, VALID_SINGLE_UNIT_LENGTH));

  it('올바른 카드 번호를 입력하면 유효하다.', () => {
    result.current.handleCardNumberChange('1234', 0);
    result.current.handleCardNumberChange('2345', 1);
    result.current.handleCardNumberChange('3456', 2);
    result.current.handleCardNumberChange('4567', 3);

    waitFor(() => expect(result.current.isValidCardNumbers.every(Boolean)).toBe(true));
  });

  it('숫자 외의 값을 입력하면 유효하지 않다.', () => {
    result.current.handleCardNumberChange('v', 0);

    waitFor(() => expect(result.current.isValidCardNumbers[0]).toBe(false));
  });

  it('숫자 외의 값을 입력하면 에러 메세지가 표시된다.', () => {
    result.current.handleCardNumberChange('v', 0);

    waitFor(() =>
      expect(result.current.cardNumberErrorMessages[0]).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER)
    );
  });

  it(`${VALID_SINGLE_UNIT_LENGTH}자 미만의 카드 번호를 입력하면 유효하지 않다.`, () => {
    result.current.handleCardNumberChange('1', 0);

    waitFor(() => expect(result.current.isValidCardNumbers[0]).toBe(false));
  });

  it(`${VALID_SINGLE_UNIT_LENGTH}자 미만의 카드 번호를 입력하면 에러 메세지가 표시된다.`, () => {
    result.current.handleCardNumberChange('1', 0);

    waitFor(() =>
      expect(result.current.cardNumberErrorMessages[0]).toBe(
        NUMBER_ERROR_MESSAGES.MAX_LENGTH(VALID_SINGLE_UNIT_LENGTH)
      )
    );
  });
});
