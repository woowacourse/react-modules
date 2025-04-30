import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useCardCompanySelect } from '../lib/useCardCompanySelect';
import { CardCompany } from '../lib/types/card';

describe('useCardCompanySelect custom hook 테스트', () => {
  test.each(['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'])(
    '카드 회사 %s 선택 시, 선택한 회사가 %s로 표시된다.',
    (company) => {
      const { result } = renderHook(() => useCardCompanySelect());
      act(() => {
        result.current.handleSelectChange(company as CardCompany);
      });
      expect(result.current.cardCompany).toBe(company);
    },
  );
});
