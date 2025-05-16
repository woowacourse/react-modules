import { renderHook, act } from '@testing-library/react';
import useCardForm from '../useCardForm';
import useCardNumber from '../useCardNumber';
import useCardExpiry from '../useCardExpiry';
import useCardCVC from '../useCardCVC';
import { CARD_TYPES } from '../../constants/cardTypes';

jest.mock('../useCardNumber', () => jest.fn());
jest.mock('../useCardExpiry', () => jest.fn());
jest.mock('../useCardCVC', () => jest.fn());
jest.mock('../../constants/cardTypes', () => ({
  CARD_TYPES: {
    VISA: 'VISA',
  },
}));

describe('useCardForm', () => {
  beforeEach(() => {
    (useCardNumber as jest.Mock).mockReturnValue({
      value: '4111111111111111',
      error: false,
      cardType: CARD_TYPES.VISA,
      isValid: jest.fn().mockReturnValue(true),
      reset: jest.fn(),
    });

    (useCardExpiry as jest.Mock).mockReturnValue({
      month: {
        value: '12',
        error: false,
      },
      year: {
        value: '25',
        error: false,
      },
      hasError: false,
      isValid: jest.fn().mockReturnValue(true),
      reset: jest.fn(),
    });

    (useCardCVC as jest.Mock).mockReturnValue({
      value: '123',
      error: false,
      cardCVC: 123,
      isValid: jest.fn().mockReturnValue(true),
      reset: jest.fn(),
    });
  });

  test('초기 상태가 올바르게 설정되어야 함', () => {
    const { result } = renderHook(() => useCardForm());

    expect(result.current.cardNumber).toBeDefined();
    expect(result.current.cardExpiry).toBeDefined();
    expect(result.current.cardCVC).toBeDefined();
  });

  test('isFormValid는 모든 필드가 유효할 때 true를 반환해야 함', () => {
    const { result } = renderHook(() => useCardForm());

    expect(result.current.isFormValid()).toBe(true);
  });

  test('isFormValid는 하나라도 필드가 유효하지 않을 때 false를 반환해야 함', () => {
    (useCardNumber as jest.Mock).mockReturnValueOnce({
      value: '4111',
      error: false,
      cardType: CARD_TYPES.VISA,
      isValid: jest.fn().mockReturnValue(false),
      reset: jest.fn(),
    });

    const { result } = renderHook(() => useCardForm());

    expect(result.current.isFormValid()).toBe(false);
  });

  test('resetForm은 모든 필드의 reset 함수를 호출해야 함', () => {
    const cardNumberResetMock = jest.fn();
    const cardExpiryResetMock = jest.fn();
    const cardCVCResetMock = jest.fn();

    (useCardNumber as jest.Mock).mockReturnValueOnce({
      value: '4111111111111111',
      error: false,
      cardType: CARD_TYPES.VISA,
      isValid: jest.fn().mockReturnValue(true),
      reset: cardNumberResetMock,
    });

    (useCardExpiry as jest.Mock).mockReturnValueOnce({
      month: {
        value: '12',
        error: false,
      },
      year: {
        value: '25',
        error: false,
      },
      hasError: false,
      isValid: jest.fn().mockReturnValue(true),
      reset: cardExpiryResetMock,
    });

    (useCardCVC as jest.Mock).mockReturnValueOnce({
      value: '123',
      error: false,
      cardCVC: 123,
      isValid: jest.fn().mockReturnValue(true),
      reset: cardCVCResetMock,
    });

    const { result } = renderHook(() => useCardForm());

    act(() => {
      result.current.resetForm();
    });

    expect(cardNumberResetMock).toHaveBeenCalledTimes(1);
    expect(cardExpiryResetMock).toHaveBeenCalledTimes(1);
    expect(cardCVCResetMock).toHaveBeenCalledTimes(1);
  });

  test('getFormData는 올바른 데이터를 반환해야 함', () => {
    const { result } = renderHook(() => useCardForm());

    const formData = result.current.getFormData();

    expect(formData).toEqual({
      cardNumber: '4111111111111111',
      cardExpMonth: '12',
      cardExpYear: '25',
      cardCVC: '123',
    });
  });

  test('hasErrors는 에러가 없을 때 false를 반환해야 함', () => {
    const { result } = renderHook(() => useCardForm());

    expect(result.current.hasErrors()).toBe(false);
  });

  test('hasErrors는 에러가 있을 때 true를 반환해야 함', () => {
    (useCardNumber as jest.Mock).mockReturnValueOnce({
      value: '4111',
      error: true,
      cardType: CARD_TYPES.VISA,
      isValid: jest.fn().mockReturnValue(false),
      reset: jest.fn(),
    });

    const { result } = renderHook(() => useCardForm());

    expect(result.current.hasErrors()).toBe(true);
  });
});
