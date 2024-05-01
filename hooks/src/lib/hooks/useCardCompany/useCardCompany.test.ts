import { renderHook, waitFor } from '@testing-library/react';
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
  const { result } = renderHook(() => useCardCompany(CARD_COMPANY_LIST));

  it('올바른 카드사를 선택했다면 유효하다.', () => {
    result.current.handleCardCompanyChange('BC카드');

    waitFor(() => expect(result.current.isValidCardCompany).toBe(true));
  });

  it('올바르지 않은 카드사라면 유효하지 않다.', () => {
    result.current.handleCardCompanyChange('AB카드');

    waitFor(() => expect(result.current.isValidCardCompany).toBe(false));
  });

  it('올바르지 않은 카드사라면 에러 메세지를 표시한다.', () => {
    result.current.handleCardCompanyChange('AB카드');

    waitFor(() =>
      expect(result.current.cardCompanyErrorMessage).toBe(
        CARD_COMPANY_ERROR_MESSAGES.INVALID_CARD_COMPANY
      )
    );
  });

  it('카드사가 입력되지 않으면 유효하지 않다.', () => {
    result.current.handleCardCompanyChange('');

    waitFor(() => expect(result.current.isValidCardCompany).toBe(false));
  });

  it('카드사가 입력되지 않으면 에러 메세지를 표시한다.', async () => {
    result.current.handleCardCompanyChange('');

    waitFor(() =>
      expect(result.current.cardCompanyErrorMessage).toBe(
        CARD_COMPANY_ERROR_MESSAGES.NO_CARD_COMPANY
      )
    );
  });
});
