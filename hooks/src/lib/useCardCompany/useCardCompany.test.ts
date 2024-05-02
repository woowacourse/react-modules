import { act } from 'react';
import { renderHook } from '@testing-library/react';
import useCardCompany from './useCardCompany';

describe('useCardCompany custom hook', () => {
  const companyList = ['카카오뱅크', '현대카드', '신한카드', '국민카드'];

  test('존재하는 카드사를 입력 후 포커스가 해제되면 isCompleted 상태가 true가 된다.', () => {
    const { result } = renderHook(() => useCardCompany('', companyList));
    act(() => {
      result.current.onChangeHandler({
        target: { value: '카카오뱅크' },
      } as any);
    });
    act(() => {
      result.current.onBlurHandler();
    });
    expect(result.current.value).toBe('카카오뱅크');
    expect(result.current.isCompleted).toBe(true);
    expect(result.current.errorMessage).toBe('');
  });

  test('존재하지 않는 카드사를 입력 후 포커스가 해제되면 "존재하지 않는 카드사입니다." 라는 에러 메시지를 출력한다.', () => {
    const { result } = renderHook(() => useCardCompany('', companyList));
    act(() => {
      result.current.onChangeHandler({ target: { value: '헤인카드' } } as any);
    });
    act(() => {
      result.current.onBlurHandler();
    });
    expect(result.current.value).toBe('헤인카드');
    expect(result.current.isCompleted).toBe(false);
    expect(result.current.errorMessage).toBe('존재하지 않는 카드사입니다.');
  });
});
