import { renderHook, act } from '@testing-library/react';
import useCardNumber from './useCardNumber';

import { GLOBAL_BRANDS_FORMAT, DEFAULT_PARAMS } from './useCardNumber';

describe('useCardNumber', () => {
  describe('초기 설정값 반영 여부 검사', () => {
    it('초기값이 설정되면, cardNumber 상태에 해당 초기값이 저장되어야 한다.', () => {
      const initialValue = '1234567890123456';
      const { result } = renderHook(() => useCardNumber(initialValue));

      expect(result.current.cardNumber).toEqual(initialValue);
    });
  });

  describe('입력값 변경에 따른 상태 업데이트 여부 검사', () => {
    it('handleUpdateCardNumber 함수가 호출되면 cardNumber 상태가 업데이트되어야 한다.', () => {
      const updatedValue = '1234567890123456';
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleUpdateCardNumber(updatedValue);
      });

      expect(result.current.cardNumber).toEqual(updatedValue);
    });
  });

  describe('입력값에 대한 유효성 검증 여부 검사', () => {
    it('16자리의 cardNumber가 모두 숫자로 입력되었으며 cardGlobalBrand가 Default로 식별된 상태라면, validationResult의 isValid는 true로 반환되어야 한다.', () => {
      const updatedValue = '1234567890123456';
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleUpdateCardNumber(updatedValue);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.Default.name);
      expect(result.current.validationResult).toEqual({ isValid: true });
    });

    it('cardGlobalBrand가 Default인 상태에서 16자리에 못 미치는 cardNumber가 숫자로 입력되었다면, validationResult의 isValid는 false로 반환되며 입력 길이에 대한 에러 메시지가 포함되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());
      const wrongUpdatedValue = '1234567890';

      act(() => {
        result.current.handleUpdateCardNumber(wrongUpdatedValue);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.Default.name);
      expect(result.current.validationResult).toEqual({
        isValid: false,
        errorMessage: DEFAULT_PARAMS.errorMessages.inputLength(
          GLOBAL_BRANDS_FORMAT.Default.allowedLength,
        ),
      });
    });

    it('cardGlobalBrand가 AMEX인 상태에서 15자리를 초과하는 cardNumber가 숫자로 입력되었다면, validationResult의 isValid는 false로 반환되며 입력 길이에 대한 에러 메시지가 포함되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());
      const wrongAMEXCardNumber = '3456789012345678';

      act(() => {
        result.current.handleUpdateCardNumber(wrongAMEXCardNumber);
      });

      expect(result.current.validationResult).toEqual({
        isValid: false,
        errorMessage: DEFAULT_PARAMS.errorMessages.inputLength(
          GLOBAL_BRANDS_FORMAT.AMEX.allowedLength,
        ),
      });
    });

    it('입력된 cardNumber가 숫자 이외의 문자를 포함하고 있다면, validationResult의 isValid는 false로 반환되며 입력 타입에 대한 에러 메시지가 포함되어야 한다.', () => {
      const wrongUpdatedValue = '1234567890abcdef';
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleUpdateCardNumber(wrongUpdatedValue);
      });

      expect(result.current.validationResult).toEqual({
        isValid: false,
        errorMessage: DEFAULT_PARAMS.errorMessages.inputType,
      });
    });
  });

  describe('입력값에 따른 카드 브랜드 식별 검사', () => {
    it('cardNumber의 첫 번째 자리가 4인 경우, cardGlobalBrand는 Visa로 설정되고 그에 따른 번호 포맷팅 규칙이 함께 반환되어야 한다.', () => {
      const visaCardNumber = '4123456789012345';
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleUpdateCardNumber(visaCardNumber);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.Visa.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.Visa.format);
    });

    it('cardNumber의 첫 두 자리가 51에서 55 사이인 경우, cardGlobalBrand는 MasterCard로 설정되고 그에 따른 번호 포맷팅 규칙이 함께 반환되어야 한다.', () => {
      const masterCardNumber51 = '5512345678901234';
      const masterCardNumber53 = '5512345678901234';
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleUpdateCardNumber(masterCardNumber51);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.MasterCard.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.MasterCard.format);

      act(() => {
        result.current.handleUpdateCardNumber(masterCardNumber53);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.MasterCard.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.MasterCard.format);
    });

    it('cardNumber의 첫 두 자리가 34 또는 37인 경우, cardGlobalBrand는 AMEX로 설정되고 그에 따른 번호 포맷팅 규칙이 함께 반환되어야 한다.', () => {
      const amexCardNumber34 = '341234567890123';
      const amexCardNumber37 = '371234567890123';
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleUpdateCardNumber(amexCardNumber34);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.AMEX.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.AMEX.format);

      act(() => {
        result.current.handleUpdateCardNumber(amexCardNumber37);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.AMEX.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.AMEX.format);
    });

    it('cardNumber의 첫 두 자리가 36인 경우, cardGlobalBrand는 Diners로 설정되고 그에 따른 번호 포맷팅 규칙이 함께 반환되어야 한다.', () => {
      const dinersCardNumber = '36123456789012';
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleUpdateCardNumber(dinersCardNumber);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.Diners.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.Diners.format);
    });

    it('cardNumber의 첫 여섯 자리가 622126에서 622925 사이인 경우, cardGlobalBrand는 UnionPay로 설정되고 그에 따른 번호 포맷팅 규칙이 함께 반환되어야 한다.', () => {
      const unionPayCardNumber622126 = '6221260123456789';
      const unionPayCardNumber622925 = '6229250123456789';
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleUpdateCardNumber(unionPayCardNumber622126);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.format);

      act(() => {
        result.current.handleUpdateCardNumber(unionPayCardNumber622925);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.format);
    });

    it('cardNumber의 첫 세 자리가 624에서 626 사이인 경우, cardGlobalBrand는 UnionPay로 설정되고 그에 따른 번호 포맷팅 규칙이 함께 반환되어야 한다.', () => {
      const unionPayCardNumber624 = '6240123456789012';
      const unionPayCardNumber626 = '6260123456789012';
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleUpdateCardNumber(unionPayCardNumber624);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.format);

      act(() => {
        result.current.handleUpdateCardNumber(unionPayCardNumber626);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.format);
    });

    it('cardNumber의 첫 네 자리가 6282에서 6288 사이인 경우, cardGlobalBrand는 UnionPay로 설정되고 그에 따른 번호 포맷팅 규칙이 함께 반환되어야 한다.', () => {
      const unionPayCardNumber6282 = '6282012345678901';
      const unionPayCardNumber6288 = '6288012345678901';
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleUpdateCardNumber(unionPayCardNumber6282);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.format);

      act(() => {
        result.current.handleUpdateCardNumber(unionPayCardNumber6288);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.UnionPay.format);
    });

    it('카드 브랜드 식별 조건에 해당하지 않는 번호가 cardNumber로 입력되었을 경우, cardGlobalBrand는 Default로 설정되고 그에 따른 번호 포맷팅 규칙이 함께 반환되어야 한다.', () => {
      const etcCardNumber = '2345678901234567';
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleUpdateCardNumber(etcCardNumber);
      });

      expect(result.current.cardGlobalBrand).toEqual(GLOBAL_BRANDS_FORMAT.Default.name);
      expect(result.current.cardNumberFormat).toEqual(GLOBAL_BRANDS_FORMAT.Default.format);
    });
  });
});
