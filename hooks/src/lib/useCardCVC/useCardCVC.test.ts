import { renderHook, act } from '@testing-library/react';
import useCardCVC from './useCardCVC';

describe('useCardCVC', () => {
  const initialValue = '123';

  it('초기값이 설정되면, CVC 상태에 해당 초기값이 저장되어야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(initialValue));

    expect(result.current.CVC).toBe(initialValue);
  });

  it('3자리 숫자 형식의 새로운 CVC 입력값이 handleUpdateCVC를 통해 들어오면, validationResult의 isValid가 true로 반환되어야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(initialValue));

    act(() => {
      result.current.handleUpdateCVC('456');
    });

    expect(result.current.CVC).toBe('456');
    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it('2자리 숫자 형식의 새로운 CVC 입력값이 handleUpdateCVC를 통해 들어오면, validationResult의 isValid가 false로 반환되며 형식 오류에 따른 에러 메시지가 함께 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(initialValue));

    act(() => {
      result.current.handleUpdateCVC('12');
    });

    expect(result.current.CVC).toBe('12');
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: 'CVC 번호는 3자리 숫자로 입력하셔야 합니다.',
    });
  });

  it('문자가 포함된 3자리의 새로운 CVC 입력값이 handleUpdateCVC를 통해 들어오면, validationResult의 isValid가 false로 반환되며 형식 오류에 따른 에러 메시지가 함께 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(initialValue));

    act(() => {
      result.current.handleUpdateCVC('12c');
    });

    expect(result.current.CVC).toBe('12c');
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: 'CVC 번호는 3자리 숫자로 입력하셔야 합니다.',
    });
  });
});
