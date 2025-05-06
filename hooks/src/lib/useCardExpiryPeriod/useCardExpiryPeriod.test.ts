import { renderHook, act } from '@testing-library/react';
import { useCardExpiryPeriod } from './useCardExpiryPeriod';
import { CARD_EXPIRATION_ERROR } from '../constants/errorMessages';


describe('useCardExpiryPeriod 훅 테스트', () => {
  it('초기값이 올바르게 설정되어야 한다', () => {
    const initialCardExpiryDate = { month: '05', year: '25' };
    const initialCardExpiryDateError = { month: '', year: '' };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    expect(result.current.cardExpirationDate).toEqual(initialCardExpiryDate);
    expect(result.current.cardExpirationDateError).toEqual(initialCardExpiryDateError);
  });

  it('유효한 월이 입력되면 cardExpirationDate가 업데이트되고 에러 메시지가 지워져야 한다', () => {
    const initialCardExpiryDate = { month: '', year: '' };
    const initialCardExpiryDateError = { month: '', year: '' };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    act(() => {
      result.current.handleCardExpiryChange({
        target: { name: 'month', value: '06' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpirationDate.month).toBe('06');
    expect(result.current.cardExpirationDateError.month).toBe('');
  });

  it('유효한 연도가 입력되면 cardExpirationDate가 업데이트되고 에러 메시지가 지워져야 한다', () => {
    const initialCardExpiryDate = { month: '06', year: '' };
    const initialCardExpiryDateError = { month: '', year: '' };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    act(() => {
      result.current.handleCardExpiryChange({
        target: { name: 'year', value: '25' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpirationDate.year).toBe('25');
    expect(result.current.cardExpirationDateError.year).toBe('');
  });

  it('모든 값이 유효하면 isCardExpirationValid가 true를 반환해야 한다', () => {
    const initialCardExpiryDate = { month: '06', year: '25' };
    const initialCardExpiryDateError = { month: '', year: '' };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    expect(result.current.isCardExpirationValid()).toBe(true);
  });

  it('숫자가 아닌 값이 입력되면 에러 메시지가 설정되어야 한다', () => {
    const initialCardExpiryDate = { month: '', year: '' };
    const initialCardExpiryDateError = { month: '', year: '' };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    act(() => {
      result.current.handleCardExpiryChange({
        target: { name: 'month', value: 'ab' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpirationDateError.month).toBe(CARD_EXPIRATION_ERROR.onlyNumbers);
  });

  it('유효하지 않은 월(0)이 입력되면 에러 메시지가 설정되어야 한다', () => {
    const initialCardExpiryDate = { month: '', year: '' };
    const initialCardExpiryDateError = { month: '', year: '' };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    act(() => {
      result.current.handleCardExpiryChange({
        target: { name: 'month', value: '00' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpirationDate.month).toBe('00');
    expect(result.current.cardExpirationDateError.month).toBe(CARD_EXPIRATION_ERROR.invalidMonth);
  });

  it('유효하지 않은 월(13 이상)이 입력되면 에러 메시지가 설정되어야 한다', () => {
    const initialCardExpiryDate = { month: '', year: '' };
    const initialCardExpiryDateError = { month: '', year: '' };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    act(() => {
      result.current.handleCardExpiryChange({
        target: { name: 'month', value: '13' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpirationDate.month).toBe('13');
    expect(result.current.cardExpirationDateError.month).toBe(CARD_EXPIRATION_ERROR.invalidMonth);
  });

  it('유효하지 않은 연도(현재 연도보다 이전)가 입력되면 에러 메시지가 설정되어야 한다', () => {
    const initialCardExpiryDate = { month: '06', year: '' };
    const initialCardExpiryDateError = { month: '', year: '' };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    act(() => {
      result.current.handleCardExpiryChange({
        target: { name: 'year', value: '20' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpirationDate.year).toBe('20');
    expect(result.current.cardExpirationDateError.year).toBe(CARD_EXPIRATION_ERROR.invalidYear);
  });

  it('월이 유효하지 않으면 isCardExpirationValid가 false를 반환해야 한다', () => {
    const initialCardExpiryDate = { month: '13', year: '25' };
    const initialCardExpiryDateError = { month: CARD_EXPIRATION_ERROR.invalidMonth, year: '' };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    expect(result.current.isCardExpirationValid()).toBe(false);
  });

  it('연도가 유효하지 않으면 isCardExpirationValid가 false를 반환해야 한다', () => {
    const initialCardExpiryDate = { month: '06', year: '20' };
    const initialCardExpiryDateError = { month: '', year: CARD_EXPIRATION_ERROR.invalidYear };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    expect(result.current.isCardExpirationValid()).toBe(false);
  });

  it('월이나 연도가 비어 있으면 isCardExpirationValid가 false를 반환해야 한다', () => {
    const initialCardExpiryDate = { month: '', year: '25' };
    const initialCardExpiryDateError = { month: '', year: '' };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    expect(result.current.isCardExpirationValid()).toBe(false);
  });

  it('월이나 연도의 길이가 올바르지 않으면 isCardExpirationValid가 false를 반환해야 한다', () => {
    const initialCardExpiryDate = { month: '6', year: '25' }; 
    const initialCardExpiryDateError = { month: '', year: '' };

    const { result } = renderHook(() => useCardExpiryPeriod(initialCardExpiryDate, initialCardExpiryDateError));

    expect(result.current.isCardExpirationValid()).toBe(false);
  });
});
