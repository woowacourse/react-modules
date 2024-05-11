import { fireEvent, render, screen } from '@testing-library/react';
import useCardIssuer, { CARD_ISSUERS } from '.';

import { renderHook } from '@testing-library/react';

describe('useCardIssuer에 대한 테스트 케이스', () => {
  const testWrongCase = (issuer: string) => {
    const { result } = renderHook(() => useCardIssuer());

    render(<input data-testid='test' onChange={result.current.onChange} />);
    const input = screen.getByTestId('test');
    fireEvent.change(input, { target: { value: issuer } });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).not.toBeNull();
  };

  const testValidCase = (issuer: string) => {
    const { result } = renderHook(() => useCardIssuer());

    render(<input data-testid='test' onChange={result.current.onChange} />);
    const input = screen.getByTestId('test');
    fireEvent.change(input, { target: { value: issuer } });

    expect(result.current.isValid).toBe(true);
    expect(result.current.errorMessage).toBeNull();
  };
  describe('유효성 검증에 실패하는 경우', () => {
    test.each(['소파카드', '라이언카드', 'BCCard'])(
      '카드사 옵션이 아닌 값(%s)을 입력한 경우 유효하지 않은 값으로 판단한다.',
      testWrongCase
    );
  });

  describe('유효성 검증에 성공하는 경우', () => {
    test.each(CARD_ISSUERS)(
      '카드사 옵션(%s)을 입력한 경우 유효한 값으로 판단한다.',
      testValidCase
    );
  });
});
