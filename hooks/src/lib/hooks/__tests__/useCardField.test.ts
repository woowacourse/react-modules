import { renderHook, act } from '@testing-library/react';
import useCardField from '../useCardFields';

describe('useCardField', () => {
  const mockValidation = {
    minValue: 1,
    maxValue: 12,
    requiredLength: 2,
    errorMessages: {
      onlyNumbers: '숫자만 입력 가능합니다',
      invalidValue: '유효하지 않은 값입니다',
      emptyValue: '값을 입력해주세요',
    },
  };

  test('초기 상태가 올바르게 설정되어야 함', () => {
    const { result } = renderHook(() => useCardField(mockValidation));

    expect(result.current.value).toBe('');
    expect(result.current.error).toBe(false);
  });

  test('숫자 입력 시 값이 업데이트되고 에러가 없어야 함', () => {
    const { result } = renderHook(() => useCardField(mockValidation));

    act(() => {
      result.current.handleChange('12');
    });

    expect(result.current.value).toBe('12');
    expect(result.current.error).toBe(false);
  });

  test('숫자가 아닌 값 입력 시 에러가 발생해야 함', () => {
    const { result } = renderHook(() => useCardField(mockValidation));

    act(() => {
      result.current.handleChange('a');
    });

    expect(result.current.error).toBe(true);
  });

  test('minValue보다 작은 값 입력 시 에러가 발생해야 함', () => {
    const { result } = renderHook(() => useCardField(mockValidation));

    act(() => {
      result.current.handleChange('0');
    });

    expect(result.current.value).toBe('0');
    expect(result.current.error).toBe(true);
  });

  test('maxValue보다 큰 값 입력 시 에러가 발생해야 함', () => {
    const { result } = renderHook(() => useCardField(mockValidation));

    act(() => {
      result.current.handleChange('13');
    });

    expect(result.current.value).toBe('13');
    expect(result.current.error).toBe(true);
  });

  test('reset 호출 시 상태가 초기화되어야 함', () => {
    const { result } = renderHook(() => useCardField(mockValidation));

    act(() => {
      result.current.handleChange('12');
    });

    expect(result.current.value).toBe('12');

    act(() => {
      result.current.reset();
    });

    expect(result.current.value).toBe('');
    expect(result.current.error).toBe(false);
  });

  test('isValid는 유효한 값에 대해 true를 반환해야 함', () => {
    const { result } = renderHook(() => useCardField(mockValidation));

    act(() => {
      result.current.handleChange('12');
    });

    expect(result.current.isValid()).toBe(true);
  });

  test('isValid는 유효하지 않은 값에 대해 false를 반환해야 함', () => {
    const { result } = renderHook(() => useCardField(mockValidation));

    act(() => {
      result.current.handleChange('0');
    });

    expect(result.current.isValid()).toBe(false);
  });

  test('getErrorMessage는 에러 메시지를 반환해야 함', () => {
    const { result } = renderHook(() => useCardField(mockValidation));

    act(() => {
      result.current.handleChange('a');
    });

    expect(result.current.getErrorMessage()).toBe('숫자만 입력 가능합니다');
  });
});
