import {
  ERROR_MESSAGE,
  ERROR_TYPE,
  ValidationError,
} from "../../types/ValidationResult";
import {
  validateAfterUpdate,
  validateBeforeUpdate,
} from "./validateCardNumber";

import { CardGlobalBrand } from "./identifyCardGLobalBrand";
import { calculateValidCardNumberLength } from "./formatCardNumber";

describe("카드번호 유효성 검사 테스트: 사용자 입력을 막는 검사 (validateBeforeUpdate)", () => {
  test.each([
    [
      "123c",
      new ValidationError(
        ERROR_TYPE.numericOnly,
        ERROR_MESSAGE[ERROR_TYPE.numericOnly]
      ),
    ],
    [
      "abc",
      new ValidationError(
        ERROR_TYPE.numericOnly,
        ERROR_MESSAGE[ERROR_TYPE.numericOnly]
      ),
    ],
    [
      "1 2 3",
      new ValidationError(
        ERROR_TYPE.numericOnly,
        ERROR_MESSAGE[ERROR_TYPE.numericOnly]
      ),
    ],
    [
      "a",
      new ValidationError(
        ERROR_TYPE.numericOnly,
        ERROR_MESSAGE[ERROR_TYPE.numericOnly]
      ),
    ],
  ])(
    `입력받은 카드번호에 숫자가 아닌 값이 포함되어 있으면, ValidationError를 던진다.
      - ( 카드번호: %s, 에러:%p )`,
    (cardNumber, expectedError) => {
      try {
        validateBeforeUpdate(cardNumber, 16);
      } catch (error) {
        expect(error).toBeInstanceOf(ValidationError);
        if (error instanceof ValidationError) {
          expect(error.errorType).toBe(
            (expectedError as ValidationError).errorType
          );
        }
      }
    }
  );

  test.each([
    {
      cardGlobalBrand: CardGlobalBrand.VISA,
      cardNumber: "41111111111111111",
      cardNumberLength: "41111111111111111".length,
      maxCardNumberLength: calculateValidCardNumberLength(CardGlobalBrand.VISA),
      expectedError: new ValidationError(
        ERROR_TYPE.maxLength,
        ERROR_MESSAGE[ERROR_TYPE.maxLength](
          calculateValidCardNumberLength(CardGlobalBrand.VISA)
        )
      ),
    },
    {
      cardGlobalBrand: CardGlobalBrand.AMEX,
      cardNumber: "341114111111111111",
      cardNumberLength: "341114111111111111".length,
      maxCardNumberLength: calculateValidCardNumberLength(CardGlobalBrand.AMEX),
      expectedError: new ValidationError(
        ERROR_TYPE.maxLength,
        ERROR_MESSAGE[ERROR_TYPE.maxLength](
          calculateValidCardNumberLength(CardGlobalBrand.AMEX)
        )
      ),
    },
  ])(
    `카드사가 $cardGlobalBrand일 때 입력받은 카드번호의 길이가 $cardNumberLength이면, ValidationError를 던진다.
      - ( 카드번호:$cardNumber, 에러:$expectedError )`,
    ({
      cardNumber,
      maxCardNumberLength,
      expectedError,
    }: {
      cardNumber: string;
      maxCardNumberLength: number;
      expectedError: ValidationError;
    }) => {
      try {
        validateBeforeUpdate(cardNumber, maxCardNumberLength);
      } catch (error) {
        expect(error).toBeInstanceOf(ValidationError);
        if (error instanceof ValidationError) {
          expect(error.errorType).toBe(expectedError.errorType);
        }
      }
    }
  );
});

describe("카드번호 유효성 검사 테스트: 사용자 입력을 막지 않는 검사 (validateAfterUpdate)", () => {
  test.each([
    {
      cardGlobalBrand: CardGlobalBrand.DINERS,
      cardNumber: "1234567890",
      cardNumberLength: "1234567890".length,
      maxCardNumberLength: calculateValidCardNumberLength(
        CardGlobalBrand.DINERS
      ),
      expectedError: new ValidationError(
        ERROR_TYPE.invalidLength,
        ERROR_MESSAGE[ERROR_TYPE.invalidLength](
          calculateValidCardNumberLength(CardGlobalBrand.DINERS)
        )
      ),
    },
    {
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      cardNumber: "12345678901234",
      cardNumberLength: "12345678901234".length,
      maxCardNumberLength: calculateValidCardNumberLength(
        CardGlobalBrand.UNION_PAY
      ),
      expectedError: new ValidationError(
        ERROR_TYPE.invalidLength,
        ERROR_MESSAGE[ERROR_TYPE.invalidLength](
          calculateValidCardNumberLength(CardGlobalBrand.UNION_PAY)
        )
      ),
    },
  ])(
    `카드사가 $cardGlobalBrand일 때 입력받은 카드번호의 길이가 $cardNumberLength이면, ValidationError를 던진다.
      - ( 카드번호:$cardNumber, 에러:$expectedError )`,
    ({
      cardNumber,
      maxCardNumberLength,
      expectedError,
    }: {
      cardNumber: string;
      maxCardNumberLength: number;
      expectedError: ValidationError;
    }) => {
      try {
        validateAfterUpdate(cardNumber, maxCardNumberLength);
      } catch (error) {
        expect(error).toBeInstanceOf(ValidationError);
        if (error instanceof ValidationError) {
          expect(error.errorType).toBe(expectedError.errorType);
        }
      }
    }
  );
});
