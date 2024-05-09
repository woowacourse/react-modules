import { renderHook, act } from '@testing-library/react';
import useInputOwnerName from '../../lib/hooks/InputField/useInputOwnerName';
import { ERROR_MESSAGE } from '../../lib/shared/errorMessages';

describe('useInputOwnerName', () => {
  test('기본값 테스트', () => {
    const { result } = renderHook(() => useInputOwnerName());

    expect(result.current[0]).toBe('');
    expect(result.current[1]).toBe('default');
    expect(result.current[2]).toBe('');
  });

  describe('Change 이벤트 테스트', () => {
    test('빈 문자열을 입력하면 Default 상태가 되고, value가 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useInputOwnerName());

      act(() => result.current[3](''));

      expect(result.current[0]).toBe('');
      expect(result.current[1]).toBe('default');
      expect(result.current[2]).toBe('');
    });

    test('유효한 값(문자)을 입력 중이라면 Complete 상태가 되고, value가 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useInputOwnerName());

      act(() => result.current[3]('name'));

      expect(result.current[0]).toBe('name');
      expect(result.current[1]).toBe('complete');
      expect(result.current[2]).toBe('');
    });

    test('유효하지 않은 값(숫자 포함 문자열)을 입력하면 Error 상태 및 에러메시지가 설정 되고, value가 업데이트 되지 않아야 한다.', () => {
      const { result } = renderHook(() => useInputOwnerName());

      act(() => result.current[3]('name'));
      act(() => result.current[3]('name1'));

      expect(result.current[0]).toBe('name');
      expect(result.current[1]).toBe('error');
      expect(result.current[2]).toBe(ERROR_MESSAGE.ownerName.isNotAlphabetic);
    });
  });

  describe('Blur 이벤트 테스트', () => {
    test('Default 상태일 때 Blur 된다면 Error 상태 및 에러메시지가 설정 되어야 한다.', () => {
      const { result } = renderHook(() => useInputOwnerName());

      act(() => result.current[3](''));
      act(() => result.current[4]());

      expect(result.current[1]).toBe('error');
      expect(result.current[2]).toBe(ERROR_MESSAGE.ownerName.isNotFulfilled);
    });

    test('Pending/Complete 상태일 때 Blur 된다면 Complete 상태가 되어야 한다.', () => {
      const { result } = renderHook(() => useInputOwnerName());

      act(() => result.current[3]('name'));
      act(() => result.current[4]());

      expect(result.current[1]).toBe('complete');
      expect(result.current[2]).toBe('');
    });
  });
});
