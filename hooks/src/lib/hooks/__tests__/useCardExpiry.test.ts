import { renderHook, act } from '@testing-library/react';
import useCardExpiry from '../useCardExpiry';

describe('useCardExpiry', () => {
  it('초기 상태가 올바르게 설정되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiry());

    expect(result.current.month.value).toBe('');
    expect(result.current.month.error).toBe(false);
    expect(result.current.year.value).toBe('');
    expect(result.current.year.error).toBe(false);
  });

  it('유효한 월을 올바르게 처리해야 한다.', () => {
    const { result } = renderHook(() => useCardExpiry());

    act(() => {
      result.current.month.handleChange('12');
    });

    expect(result.current.month.value).toBe('12');
    expect(result.current.month.error).toBe(false);
    expect(result.current.month.isValid()).toBe(true);
  });

  it('유효한 연도를 올바르게 처리해야 한다.', () => {
    const { result } = renderHook(() => useCardExpiry());

    const currentYear = new Date().getFullYear() % 100;
    const nextYear = (currentYear + 1).toString().padStart(2, '0');

    act(() => {
      result.current.year.handleChange(nextYear);
    });

    expect(result.current.year.value).toBe(nextYear);
    expect(result.current.year.error).toBe(false);
    expect(result.current.year.isValid()).toBe(true);
  });

  it('1보다 작은 월은 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useCardExpiry());

    act(() => {
      result.current.month.handleChange('0');
    });

    expect(result.current.month.error).toBe(true);
    expect(result.current.month.isValid()).toBe(false);
  });

  it('12보다 큰 월은 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useCardExpiry());

    act(() => {
      result.current.month.handleChange('13');
    });

    expect(result.current.month.error).toBe(true);
    expect(result.current.month.isValid()).toBe(false);
  });

  it('현재 연도보다 이전 연도는 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useCardExpiry());

    const currentYear = new Date().getFullYear() % 100;
    const lastYear = (currentYear - 1).toString().padStart(2, '0');

    act(() => {
      result.current.year.handleChange(lastYear);
    });

    expect(result.current.year.error).toBe(true);
    expect(result.current.year.isValid()).toBe(false);
  });

  it('숫자가 아닌 문자는 제거되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiry());

    act(() => {
      result.current.month.handleChange('1a');
    });

    expect(result.current.month.value).toBe('1');
  });

  it('월은 2자리이다.', () => {
    const { result } = renderHook(() => useCardExpiry());

    act(() => {
      result.current.month.handleChange('123');
    });

    expect(result.current.month.isValid()).toBe(false);
  });

  it('연도는 2자리이다.', () => {
    const { result } = renderHook(() => useCardExpiry());

    act(() => {
      result.current.year.handleChange('2023');
    });

    expect(result.current.year.isValid()).toBe(false);
  });

  it('reset 함수가 올바르게 동작해야 한다.', () => {
    const { result } = renderHook(() => useCardExpiry());

    act(() => {
      result.current.month.handleChange('12');
      result.current.year.handleChange('25');
    });

    expect(result.current.month.value).toBe('12');
    expect(result.current.year.value).toBe('25');

    act(() => {
      result.current.reset();
    });

    expect(result.current.month.value).toBe('');
    expect(result.current.month.error).toBe(false);
    expect(result.current.year.value).toBe('');
    expect(result.current.year.error).toBe(false);
  });

  it('전체 폼의 유효성 검사가 올바르게 동작해야 한다.', () => {
    const { result } = renderHook(() => useCardExpiry());

    act(() => {
      result.current.month.handleChange('12');
      result.current.year.handleChange('25');
    });

    expect(result.current.isValid()).toBe(true);

    act(() => {
      result.current.month.handleChange('13');
    });

    expect(result.current.isValid()).toBe(false);
  });
});
