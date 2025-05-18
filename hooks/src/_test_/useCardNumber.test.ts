import { renderHook, act } from '@testing-library/react';
import useCardNumber from '../lib/cardNumber/useCardNumber';
import { CARD_TEST_CASES } from '../_fixture_/cardNumber.fixture';

const setupHook = () => renderHook(() => useCardNumber()).result;

describe('✅ useCardNumber 성공 케이스', () => {
  it('Visa 카드 정상 입력', () => {
    const result = setupHook();
    const { valid, expectedFormat, expectedCompany } = CARD_TEST_CASES.Visa;

    act(() => {
      result.current.handleCardNumberChange(valid);
    });

    expect(result.current.errorState.errorMessage).toBe('');
    expect(result.current.cardNumber).toBe(expectedFormat);
    expect(result.current.company).toBe(expectedCompany);
  });

  it('AMEX 카드 정상 입력', () => {
    const result = setupHook();
    const { valid, expectedFormat, expectedCompany } = CARD_TEST_CASES.AMEX;

    act(() => {
      result.current.handleCardNumberChange(valid);
    });

    expect(result.current.errorState.errorMessage).toBe('');
    expect(result.current.cardNumber).toBe(expectedFormat);
    expect(result.current.company).toBe(expectedCompany);
  });

  it('Diners 카드 정상 입력', () => {
    const result = setupHook();
    const { valid, expectedFormat, expectedCompany } = CARD_TEST_CASES.Diners;

    act(() => {
      result.current.handleCardNumberChange(valid);
    });

    expect(result.current.errorState.errorMessage).toBe('');
    expect(result.current.cardNumber).toBe(expectedFormat);
    expect(result.current.company).toBe(expectedCompany);
  });

  it('UnionPay 카드 정상 입력', () => {
    const result = setupHook();
    const { valid, expectedFormat, expectedCompany } = CARD_TEST_CASES.UnionPay;

    act(() => {
      result.current.handleCardNumberChange(valid);
    });

    expect(result.current.errorState.errorMessage).toBe('');
    expect(result.current.cardNumber).toBe(expectedFormat);
    expect(result.current.company).toBe(expectedCompany);
  });
});

describe('❌ useCardNumber 실패 케이스 - 길이 부족', () => {
  it('Visa 카드 길이 부족 시 에러', () => {
    const result = setupHook();
    const { tooShort, expectedCompany, expectedLength } = CARD_TEST_CASES.Visa;

    act(() => {
      result.current.handleCardNumberChange(tooShort);
    });

    expect(result.current.errorState.errorMessage).toBe(
      `${expectedCompany} 카드는 ${expectedLength}자리 숫자를 입력하세요.`
    );
  });

  it('AMEX 카드 길이 부족 시 에러', () => {
    const result = setupHook();
    const { tooShort, expectedCompany, expectedLength } = CARD_TEST_CASES.AMEX;

    act(() => {
      result.current.handleCardNumberChange(tooShort);
    });

    expect(result.current.errorState.errorMessage).toBe(
      `${expectedCompany} 카드는 ${expectedLength}자리 숫자를 입력하세요.`
    );
  });

  it('Diners 카드 길이 부족 시 에러', () => {
    const result = setupHook();
    const { tooShort, expectedCompany, expectedLength } = CARD_TEST_CASES.Diners;

    act(() => {
      result.current.handleCardNumberChange(tooShort);
    });

    expect(result.current.errorState.errorMessage).toBe(
      `${expectedCompany} 카드는 ${expectedLength}자리 숫자를 입력하세요.`
    );
  });

  it('UnionPay 카드 길이 부족 시 에러', () => {
    const result = setupHook();
    const { tooShort, expectedCompany, expectedLength } = CARD_TEST_CASES.UnionPay;

    act(() => {
      result.current.handleCardNumberChange(tooShort);
    });

    expect(result.current.errorState.errorMessage).toBe(
      `${expectedCompany} 카드는 ${expectedLength}자리 숫자를 입력하세요.`
    );
  });
});
