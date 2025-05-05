import { renderHook } from '@testing-library/react';
import { act } from 'react';
import useCardPassword, {
  CARD_PASSWORD_MAX_LENGTH,
} from '../src/useCardPassword/useCardPassword';
import { CARD_PASSWORD_ERROR_MESSAGE } from '../src/useCardPassword/useCardPassword';
import createInputChangeEvent from '../src/utils/createInputChangeEvent';

describe('useCardPassword hook 테스트', () => {
  it('초깃값은 빈 문자열이다', () => {
    const { result } = renderHook(() => useCardPassword());
    expect(result.current.cardPassword).toBe('');
  });

  it('초기값을 설정할 수 있다', () => {
    const { result } = renderHook(() => useCardPassword('12'));
    expect(result.current.cardPassword).toBe('12');
  });

  describe('handleCardPasswordChange', () => {
    let result;

    beforeEach(() => {
      const hook = renderHook(() => useCardPassword());
      result = hook.result;
    });

    it('올바른 숫자를 입력하면 상태가 업데이트된다', () => {
      const { result } = renderHook(() => useCardPassword());

      const event = createInputChangeEvent('12');

      act(() => {
        result.current.handleCardPasswordChange(event);
      });

      expect(result.current.cardPassword).toBe('12');
      expect(result.current.isError).toBe(false);
    });

    it('숫자가 아니면 에러 상태를 반환한다', () => {
      const { result } = renderHook(() => useCardPassword());

      const event = createInputChangeEvent('1b');

      act(() => {
        result.current.handleCardPasswordChange(event);
      });

      expect(result.current.isError).toBe(true);
      expect(result.current.errorMessage).toBe(
        CARD_PASSWORD_ERROR_MESSAGE.NOT_NUMBERIC
      );
    });

    it(`${CARD_PASSWORD_MAX_LENGTH}자리를 초과하면 에러 상태를 반환한다`, () => {
      const { result } = renderHook(() => useCardPassword());

      const event = createInputChangeEvent('123');

      act(() => {
        result.current.handleCardPasswordChange(event);
      });

      expect(result.current.isError).toBe(true);
      expect(result.current.errorMessage).toBe(
        CARD_PASSWORD_ERROR_MESSAGE.INVALID_LENGTH
      );
    });
  });
});
