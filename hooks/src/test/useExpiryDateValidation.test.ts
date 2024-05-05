import { renderHook, act } from '@testing-library/react';
import useExpiryDateValidation from '../lib/useExpiryDateValidation';

describe('useExpiryDateValidation 테스트', () => {
  it('아직 아무 입력도 수행되지 않았을 때 true를 반환하고 에러 메시지가 없어야 함', () => {
    const { result } = renderHook(() => useExpiryDateValidation());

    expect(result.current.validationResult.isValidMonth).toBe(true);
    expect(result.current.validationResult.isValidYear).toBe(true);
    expect(result.current.validationResult.monthErrorMessages).toHaveLength(0);
    expect(result.current.validationResult.yearErrorMessages).toHaveLength(0);
  });

  it('현재 연도와 월보다 미래의 유효한 연도와 월이 입력될 때 true를 반환하고 에러 메시지가 없어야 함', () => {
    const { result } = renderHook(() => useExpiryDateValidation());

    act(() => {
      result.current.handleExpiryDateChange('12', '25');
    });

    expect(result.current.validationResult.isValidMonth).toBe(true);
    expect(result.current.validationResult.isValidYear).toBe(true);
    expect(result.current.validationResult.monthErrorMessages).toHaveLength(0);
    expect(result.current.validationResult.yearErrorMessages).toHaveLength(0);
  });

  it("현재 연도와 월보다 과거의 연도가 입력될 때 false와 '만료된 카드입니다.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useExpiryDateValidation());

    act(() => {
      result.current.handleExpiryDateChange('12', '19');
    });

    expect(result.current.validationResult.isValidMonth).toBe(true);
    expect(result.current.validationResult.isValidYear).toBe(false);
    expect(result.current.validationResult.yearErrorMessages).toContain('만료된 카드입니다.');
  });

  // 질문
  it("현재 연도와 과거의 월이 입력될 때 false와 '만료된 카드입니다.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useExpiryDateValidation());
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() - 2000;
    const currentMonth = currentDate.getMonth() < 10 ? '0' + currentDate.getMonth() : currentDate.getMonth().toString();

    act(() => {
      result.current.handleExpiryDateChange(currentMonth, currentYear.toString());
    });

    expect(result.current.validationResult.isValidMonth).toBe(false);
    expect(result.current.validationResult.isValidYear).toBe(true);
    expect(result.current.validationResult.monthErrorMessages).toContain('만료된 카드입니다.');
  });

  it("숫자가 아닌 입력이 들어올 때 false와 '숫자로 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useExpiryDateValidation());

    act(() => {
      result.current.handleExpiryDateChange('AB', 'CD');
    });

    expect(result.current.validationResult.isValidMonth).toBe(false);
    expect(result.current.validationResult.isValidYear).toBe(false);
    expect(result.current.validationResult.monthErrorMessages).toContain('숫자로 입력해주세요.');
    expect(result.current.validationResult.yearErrorMessages).toContain('숫자로 입력해주세요.');
  });

  it('길이가 잘못된 입력이 들어올 때 false와 2자로 입력해주세요. 를 반환해야 함', () => {
    const { result } = renderHook(() => useExpiryDateValidation());

    act(() => {
      result.current.handleExpiryDateChange('1', '123');
    });

    expect(result.current.validationResult.isValidMonth).toBe(false);
    expect(result.current.validationResult.isValidYear).toBe(false);
    expect(result.current.validationResult.monthErrorMessages).toContain('2자로 입력해주세요.');
    expect(result.current.validationResult.yearErrorMessages).toContain('2자로 입력해주세요.');
  });

  it("잘못된 월 입력이 들어올 때 false와 '올바른 월을 입력해주세요 (01~12).'를 반환해야 함", () => {
    const { result } = renderHook(() => useExpiryDateValidation());

    act(() => {
      result.current.handleExpiryDateChange('13', '25');
    });

    expect(result.current.validationResult.isValidMonth).toBe(false);
    expect(result.current.validationResult.isValidYear).toBe(true);
    expect(result.current.validationResult.monthErrorMessages).toContain('올바른 월을 입력해주세요 (01~12).');
    expect(result.current.validationResult.yearErrorMessages).toHaveLength(0);
  });
});
