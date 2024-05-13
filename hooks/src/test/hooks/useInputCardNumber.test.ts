import { renderHook, act } from '@testing-library/react';
import useInputCardNumber from '../../lib/hooks/useInputCardNumber';
import { ERROR_MESSAGE } from '../../lib/shared/errorMessages';
import { CARD_BRAND } from '../../lib/index';

describe('useInputCardNumber', () => {
  test('기본값 테스트', () => {
    const { result } = renderHook(() => useInputCardNumber());

    expect(result.current[0]).toBe('');
    expect(result.current[1]).toBe('default');
    expect(result.current[2]).toBe(null);
    expect(result.current[3]).toBe('');
  });

  describe('Change 이벤트 테스트', () => {
    test('빈 문자열 입력 : [value 업데이트] [status default] [brand null] [errorMsg empty]', () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[4]('', 16));

      expect(result.current[0]).toBe('');
      expect(result.current[1]).toBe('default');
      expect(result.current[2]).toBe(null);
      expect(result.current[3]).toBe('');
    });

    test('유효한 값(숫자)을 입력 : [value 업데이트] [status pending] [brand 업데이트] [errorMsg empty]', () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[4]('4000', 16));

      expect(result.current[0]).toBe('4000');
      expect(result.current[1]).toBe('pending');
      expect(result.current[2]).toBe(CARD_BRAND.visa);
      expect(result.current[3]).toBe('');
    });

    test('유효한 값(숫자)으로 입력 완성 :  [value 업데이트] [status complete] [brand 업데이트] [errorMsg empty]', () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[4]('4000111122223333', 16));

      expect(result.current[0]).toBe('4000111122223333');
      expect(result.current[1]).toBe('complete');
      expect(result.current[2]).toBe(CARD_BRAND.visa);
      expect(result.current[3]).toBe('');
    });

    test('유효하지 않은 값(문자 포함)을 입력 : [value 불변] [status error] [brand 업데이트] [errorMsg 업데이트]', () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[4]('4000', 16));
      act(() => result.current[4]('4000a', 16));

      expect(result.current[0]).toBe('4000');
      expect(result.current[1]).toBe('error');
      expect(result.current[2]).toBe(CARD_BRAND.visa);
      expect(result.current[3]).toBe(ERROR_MESSAGE.cardNumber.isNotNumeric);
    });
  });

  describe('Blur 이벤트 테스트', () => {
    test('Default 상태일 때 Blur : [value 불변] [status error] [brand null] [errorMsg 업데이트]', () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[4]('', 16));
      act(() => result.current[5]());

      expect(result.current[0]).toBe('');
      expect(result.current[1]).toBe('error');
      expect(result.current[2]).toBe(null);
      expect(result.current[3]).toBe(ERROR_MESSAGE.cardNumber.isNotFulfilled);
    });

    test('Pending 상태일 때 Blur : [value 불변] [status error] [brand 불변] [errorMsg 업데이트]', () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[4]('4000', 16));
      act(() => result.current[5]());

      expect(result.current[0]).toBe('4000');
      expect(result.current[1]).toBe('error');
      expect(result.current[2]).toBe(CARD_BRAND.visa);
      expect(result.current[3]).toBe(ERROR_MESSAGE.cardNumber.isNotFulfilled);
    });

    test('Complete 상태일 때 Blur : [value 불변] [status complete] [brand 불변] [errorMsg empty]', () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[4]('4000111122223333', 16));
      act(() => result.current[5]());

      expect(result.current[0]).toBe('4000111122223333');
      expect(result.current[1]).toBe('complete');
      expect(result.current[2]).toBe(CARD_BRAND.visa);
      expect(result.current[3]).toBe('');
    });
  });
});
