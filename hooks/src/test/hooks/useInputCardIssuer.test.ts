import { renderHook, act } from '@testing-library/react';
import useInputCardIssuer from '../../lib/hooks/useInputCardIssuer';

describe('useInputCardIssuer', () => {
  test('기본값 테스트', () => {
    const { result } = renderHook(() => useInputCardIssuer());

    expect(result.current[0]).toBe('');
    expect(result.current[1]).toBe('default');
  });

  describe('Change 이벤트 테스트', () => {
    test('값을 입력하면 value가 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useInputCardIssuer());

      act(() => result.current[2]('Visa'));

      expect(result.current[0]).toBe('Visa');
      expect(result.current[1]).toBe('complete');
    });

    test('다른 값으로 업데이트하면 해당 값으로 value가 변경되어야 한다.', () => {
      const { result } = renderHook(() => useInputCardIssuer());

      act(() => result.current[2]('MasterCard'));

      expect(result.current[0]).toBe('MasterCard');
      expect(result.current[1]).toBe('complete');
    });
  });
});
