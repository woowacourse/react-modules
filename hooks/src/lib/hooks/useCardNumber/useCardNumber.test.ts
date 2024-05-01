import { renderHook, waitFor } from '@testing-library/react';
import { NUMBER_ERROR_MESSAGES } from '../../utils/validation/validation';
import useCardNumber, { VALID_CARD_NUMBER_LENGTH } from './useCardNumber';

describe('useCardNumber 커스텀 훅 테스트', () => {
  const { result } = renderHook(() => useCardNumber());

  it('올바른 카드 번호를 입력하면 유효하다', () => {
    result.current.handleCardNumbersChange('1234123412341234');

    waitFor(() => expect(result.current.isValidCardNumber).toBe(true));
  });

  it('숫자 외의 값을 입력하면 유효하지 않다.', () => {
    result.current.handleCardNumbersChange('v');

    waitFor(() => expect(result.current.isValidCardNumber).toBe(false));
  });

  it('숫자 외의 값을 입력하면 에러 메세지를 표시한다.', () => {
    result.current.handleCardNumbersChange('v');

    waitFor(() =>
      expect(result.current.cardNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER)
    );
  });

  it('16자 미만의 카드 번호를 입력하면 유효하지 않다.', () => {
    result.current.handleCardNumbersChange('1');

    waitFor(() => expect(result.current.isValidCardNumber).toBe(false));
  });

  it('16자 미만의 카드 번호를 입력하면 에러 메시지를 표시한다.', () => {
    result.current.handleCardNumbersChange('1');

    waitFor(() =>
      expect(result.current.cardNumberErrorMessage).toBe(
        NUMBER_ERROR_MESSAGES.MAX_LENGTH(VALID_CARD_NUMBER_LENGTH)
      )
    );
  });
});
