import validator from "../../shared/utils/validator/validator";
import { ERROR_MESSAGE } from "../../shared/errorMessages";

describe("cardNumberValidator", () => {
  const validations = validator.cardNumber;

  test.each(["1", "1234"])("숫자를 입력할 경우 에러가 발생하지 않는다.", (value) => {
    const [isValid, errorMessage] = validations.isValidInput(value);

    expect(isValid).toBe(true);
    expect(errorMessage).toBe("");
  });

  test.each(["a", "123a"])("숫자 외의 문자를 입력할 경우 에러가 발생한다.", (value) => {
    const [isValid, errorMessage] = validations.isValidInput(value);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe(ERROR_MESSAGE.cardNumber.isNotNumeric);
  });
});
