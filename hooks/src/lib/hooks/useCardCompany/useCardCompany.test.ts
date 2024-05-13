import { renderHook } from '@testing-library/react';
import { act } from 'react';
import useCardCompany, { CARD_COMPANY_ERROR_MESSAGES } from './useCardCompany';

const CARD_COMPANY_LIST = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
];

describe('useCardCompany 커스텀 훅 테스트', () => {
  const setup = (initialCompany?: string) => {
    const { result } = renderHook(() => useCardCompany(CARD_COMPANY_LIST, initialCompany));
    return result;
  };

  const setCompany = (result: any, company: string) => {
    act(() => result.current.handleCardCompanyChange(company));
  };

  it('초기값을 전달해주면 해당 초기값을 저장한다.', () => {
    const company = '신한카드';

    const result = setup();
    setCompany(result, company);

    expect(result.current.cardCompany).toBe(company);
  });

  it('아무 것도 선택하지 않았다면 유효하지 않다.', () => {
    const result = setup();

    expect(result.current.isValidCardCompany).toBe(false);
  });

  describe('올바른 카드사를 선택한 경우', () => {
    it('올바른 카드사를 선택했다면 유효하다.', () => {
      const result = setup();
      setCompany(result, 'BC카드');

      expect(result.current.isValidCardCompany).toBe(true);
    });

    it('올바른 카드사를 선택했다면 해당 값을 저장한다.', () => {
      const company = 'BC카드';

      const result = setup();
      setCompany(result, company);

      expect(result.current.cardCompany).toBe(company);
    });
  });

  describe('초기 인자로 전달해준 리스트에 없는 항목이 선택된 경우', () => {
    it('올바르지 않은 카드사라면 유효하지 않다.', () => {
      const result = setup();
      setCompany(result, 'AB카드');

      expect(result.current.isValidCardCompany).toBe(false);
    });

    it('올바르지 않은 카드사라면 에러 메세지를 표시한다.', () => {
      const result = setup();
      setCompany(result, 'AB카드');

      expect(result.current.cardCompanyErrorMessage).toBe(CARD_COMPANY_ERROR_MESSAGES.INVALID_CARD_COMPANY);
    });
  });

  describe('카드사가 입력되지 않은 경우', () => {
    it('카드사가 입력되지 않으면 유효하지 않다.', () => {
      const result = setup();
      setCompany(result, '');

      expect(result.current.isValidCardCompany).toBe(false);
    });

    it('카드사가 입력되지 않으면 에러 메세지를 표시한다.', () => {
      const result = setup();
      setCompany(result, '');

      expect(result.current.cardCompanyErrorMessage).toBe(CARD_COMPANY_ERROR_MESSAGES.NO_CARD_COMPANY);
    });
  });
});
