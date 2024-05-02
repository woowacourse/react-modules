import validator from "../../shared/utils/validator/validator";
import { ERROR_MESSAGE } from "../../shared/errorMessages";
import { ExpiryDateType } from "../../shared/types";

describe("expiryDateValidator", () => {
  const validations = validator.expiryDate;
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  test.each([
    ["1", "month"],
    ["11", "month"],
    ["1", "year"],
    ["11", "year"],
  ])("숫자를 입력할 경우 에러가 발생하지 않는다.", (value, type) => {
    const [isValid, errorMessage] = validations.isValidInput(value, type as ExpiryDateType);

    expect(isValid).toBe(true);
    expect(errorMessage).toBe("");
  });

  test.each([
    ["a", "month"],
    ["1a", "month"],
    ["a", "year"],
    ["1a", "year"],
  ])("숫자외의 값을 입력할 경우 에러가 발생한다.", (value, type) => {
    const [isValid, errorMessage] = validations.isValidInput(value, type as ExpiryDateType);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe(ERROR_MESSAGE.expiryDate[type as ExpiryDateType].isNotNumeric);
  });

  test.each(["1", "12"])("유효한 월을 입력할 경우 에러가 발생하지 않는다.", (value) => {
    const [isValid, errorMessage] = validations.isValidInput(value, "month");

    expect(isValid).toBe(true);
    expect(errorMessage).toBe("");
  });

  test.each(["0", "13"])("유효하지 않은 월을 입력할 경우 에러가 발생한다.", (value) => {
    const [isValid, errorMessage] = validations.isValidInput(value, "month");

    expect(isValid).toBe(false);
    expect(errorMessage).toBe(ERROR_MESSAGE.expiryDate.month.isInvalidMonth);
  });

  test.each([
    [currentMonth.toString(), currentYear.toString()],
    [(currentMonth + 1).toString(), currentYear.toString()],
    [currentMonth.toString(), (currentYear + 1).toString()],
  ])("현재 또는 미래 날짜를 입력할 경우 에러가 발생하지 않는다.", (month, year) => {
    const [isValid, errorMessage] = validations.isValidDate(month, year);

    expect(isValid).toBe(true);
    expect(errorMessage).toBe("");
  });

  test.each([
    [(currentMonth - 1).toString(), currentYear.toString()],
    [currentMonth.toString(), (currentYear - 1).toString()],
  ])("과거 날짜를 입력할 경우 에러가 발생한다.", (month, year) => {
    const [isValid, errorMessage] = validations.isValidDate(month, year);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe(ERROR_MESSAGE.expiryDate.isExpiredDate);
  });
});
