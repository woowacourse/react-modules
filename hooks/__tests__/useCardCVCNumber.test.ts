import { renderHook } from '@testing-library/react';
import { act } from 'react';
import useCardCVCNumber, {
  CARD_CVC_MAX_LENGTH,
  CARD_CVC_ERROR_MESSAGE,
} from '../src/useCardCVCNumber/useCardCVCNumber';
import createInputChangeEvent from '../src/utils/createInputChangeEvent';

describe('useCardCVCNumber hook 테스트', () => {
  let result;

  describe('초깃값 테스트 및 상태 업데이트', () => {
    beforeEach(() => {
      const hook = renderHook(() => useCardCVCNumber());
      result = hook.result;
    });

    it('초깃값은 빈 문자열이다', () => {
      expect(result.current.cardCVCNumber).toBe('');
    });

    it('올바른 숫자를 입력하면 상태가 업데이트된다', () => {
      const event = createInputChangeEvent('123');

      act(() => {
        result.current.handleCardCVCNumberChange(event);
      });

      expect(result.current.cardCVCNumber).toBe('123');
      expect(result.current.isError).toBe(false);
    });

    it('숫자가 아니면 에러 상태를 반환한다', () => {
      const event = createInputChangeEvent('1bc');

      act(() => {
        result.current.handleCardCVCNumberChange(event);
      });

      expect(result.current.isError).toBe(true);
      expect(result.current.errorMessage).toBe(
        CARD_CVC_ERROR_MESSAGE.NOT_NUMBERIC
      );
    });

    it(`${CARD_CVC_MAX_LENGTH}자리를 초과하면 에러 상태를 반환한다`, () => {
      const event = createInputChangeEvent('1234');

      act(() => {
        result.current.handleCardCVCNumberChange(event);
      });

      expect(result.current.isError).toBe(true);
      expect(result.current.errorMessage).toBe(
        CARD_CVC_ERROR_MESSAGE.INVALID_LENGTH
      );
    });
  });

  it('초기값을 설정할 수 있다', () => {
    const { result } = renderHook(() => useCardCVCNumber('123'));
    expect(result.current.cardCVCNumber).toBe('123');
  });
});
