import { renderHook, act } from '@testing-library/react';
import useInputExpiryDate from '../../lib/hooks/useInputExpiryDate';
import { ERROR_MESSAGE } from '../../lib/shared/errorMessages';

describe('useInputExpiryDate', () => {
  test('기본값 테스트', () => {
    const { result } = renderHook(() => useInputExpiryDate());

    expect(result.current[0].month).toBe('');
    expect(result.current[0].year).toBe('');
    expect(result.current[1].month).toBe('default');
    expect(result.current[1].year).toBe('default');
    expect(result.current[2]).toBe('');
  });

  describe('Change 이벤트 테스트', () => {
    test('월에 대해 유효한 값(숫자)을 입력하면 Complete 상태가 되고, value가 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useInputExpiryDate());

      act(() => result.current[3]('3', 'month'));

      expect(result.current[0].month).toBe('3');
      expect(result.current[1].month).toBe('complete');
      expect(result.current[2]).toBe('');
    });

    test('연에 대해 유효한 값(숫자)을 입력 중이라면 Pending 상태가 되고, value가 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useInputExpiryDate());

      act(() => result.current[3]('2', 'year'));

      expect(result.current[0].year).toBe('2');
      expect(result.current[1].year).toBe('pending');
      expect(result.current[2]).toBe('');
    });

    test('연에 대해 유효한 값(숫자)으로 입력을 완성하면 Complete 상태가 되고, value가 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useInputExpiryDate());

      act(() => result.current[3]('24', 'year'));

      expect(result.current[0].year).toBe('24');
      expect(result.current[1].year).toBe('complete');
      expect(result.current[2]).toBe('');
    });

    test('월 입력 중 연도가 미완성인 경우 Error 상태 및 에러메시지가 설정 되어야 한다.', () => {
      const { result } = renderHook(() => useInputExpiryDate());

      act(() => result.current[3]('2', 'year'));
      act(() => result.current[3]('1', 'month'));

      expect(result.current[1].month).toBe('complete');
      expect(result.current[1].year).toBe('error');
      expect(result.current[2]).toBe(ERROR_MESSAGE.expiryDate.year.isNotFulfilled);
    });
  });

  describe('Blur 이벤트 테스트', () => {
    test('월이 Pending 상태일 때 Blur 이벤트가 발생하면 Complete 상태가 되어야 한다.', () => {
      const { result } = renderHook(() => useInputExpiryDate());

      act(() => result.current[3]('1', 'month'));
      act(() => result.current[4](1));

      expect(result.current[1].month).toBe('complete');
      expect(result.current[2]).toBe('');
    });

    test('연도가 Pending 상태일 때 Blur 이벤트가 발생하면 Error 상태 및 에러메시지가 설정 되어야 한다.', () => {
      const { result } = renderHook(() => useInputExpiryDate());

      act(() => result.current[3]('2', 'year'));
      act(() => result.current[4](1));

      expect(result.current[1].year).toBe('error');
      expect(result.current[2]).toBe(ERROR_MESSAGE.expiryDate.year.isNotFulfilled);
    });

    test('월과 연도가 모두 Complete 상태이나 유효기간이 만료된 경우 Error 상태 및 에러메시지가 설정 되어야 한다.', () => {
      const { result } = renderHook(() => useInputExpiryDate());

      act(() => result.current[3]('1', 'month'));
      act(() => result.current[3]('20', 'year'));
      act(() => result.current[4](1));

      expect(result.current[1].month).toBe('error');
      expect(result.current[1].year).toBe('error');
      expect(result.current[2]).toBe(ERROR_MESSAGE.expiryDate.isExpiredDate);
    });
  });
});
