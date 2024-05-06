import { ChangeEvent } from 'react';
import { renderHook, act } from '@testing-library/react';
import useCardCompany from '../lib/useCardCompany';

describe('useCardCompany 커스텀 훅 테스트', () => {
  const defaultValue = '카드사를 선택해주세요.';

  it('카드사를 선택하지 않으면 카드사를 선택해주세요.라는 에러메세지를 보여준다.', () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleCardCompany(
        {
          target: { value: defaultValue },
        } as ChangeEvent<HTMLSelectElement>,
        defaultValue,
      );
    });

    expect(result.current.cardCompanyInfo.errorMessage).toBe(
      '카드사를 선택해주세요.',
    );
  });

  it('카드사 선택에 따라 cardCompany 상태가 올바르게 업데이트되는지 확인한다.', () => {
    const { result } = renderHook(() => useCardCompany());
    const cardCompany = '썬데이뱅크';

    act(() => {
      result.current.handleCardCompany(
        {
          target: { value: cardCompany },
        } as ChangeEvent<HTMLSelectElement>,
        defaultValue,
      );
    });

    expect(result.current.cardCompanyInfo.cardCompany).toBe(cardCompany);
  });
});
