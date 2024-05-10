import { renderHook } from '@testing-library/react';

import useCardIssuer, { UseCardIssuerProps } from './../lib/hooks/useCardIssuer';

describe('useCardIssuer', () => {
  const defaultProps: UseCardIssuerProps = {
    issuerValue: '',
    validation: {
      issuers: ['visa', 'master', 'shinhan'],
    },
    errorMessages: {
      empty: '카드사를 선택해주세요.',
      issuer: '유효한 카드사를 선택해주세요.',
    },
  };

  it('빈 문자열을 입력하면 오류 메시지를 반환한다', () => {
    const { result } = renderHook(() => useCardIssuer(defaultProps));

    expect(result.current.validationErrorMessage).toBe(defaultProps.errorMessages.empty);
    expect(result.current.validationResult.isFilledValue).toBe(false);
    expect(result.current.validationResult.isValidIssuer).toBe(false);
  });

  it('props로 받은 카드사에 없는 값을 입력하면 오류 메시지를 반환한다', () => {
    const props: UseCardIssuerProps = {
      ...defaultProps,
      issuerValue: 'invalid',
    };
    const { result } = renderHook(() => useCardIssuer(props));

    expect(result.current.validationErrorMessage).toBe(defaultProps.errorMessages.issuer);
    expect(result.current.validationResult.isFilledValue).toBe(true);
    expect(result.current.validationResult.isValidIssuer).toBe(false);
  });

  it('유효한 카드사를 선택하면 오류 메시지가 없어야 한다', () => {
    const props: UseCardIssuerProps = {
      ...defaultProps,
      issuerValue: 'visa',
    };
    const { result } = renderHook(() => useCardIssuer(props));

    expect(result.current.validationErrorMessage).toBeNull();
    expect(result.current.validationResult.isFilledValue).toBe(true);
    expect(result.current.validationResult.isValidIssuer).toBe(true);
  });
});
