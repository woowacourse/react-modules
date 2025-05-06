import { renderHook, act } from '@testing-library/react';
import { useCardCompany } from './useCardCompany';

describe('useCardCompany 훅 테스트', () => {
  it('초기에는 brand가 null로 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardCompany());

    expect(result.current.brand).toBeNull();
    expect(result.current.isBrandSelected()).toBe(false);
  });

  it('handleCardCompanyChange 호출 시 brand가 업데이트되어야 한다', () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleCardCompanyChange({
        target: { value: 'visa' },
      } as React.ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.brand).toBe('visa');
    expect(result.current.isBrandSelected()).toBe(true);
  });

  it('빈 값이 제공되면 brand가 null로 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleCardCompanyChange({
        target: { value: 'mastercard' },
      } as React.ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.brand).toBe('mastercard');

    act(() => {
      result.current.handleCardCompanyChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.brand).toBeNull();
    expect(result.current.isBrandSelected()).toBe(false);
  });
});
