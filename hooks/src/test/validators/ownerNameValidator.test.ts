import validator from '../../lib/shared/utils/validator/validator';
import { ERROR_MESSAGE } from '../../lib/shared/errorMessages';

describe('ownerNameValidator', () => {
  const validations = validator.ownerName;

  test.each(['abcd', 'ABCD'])('영문자를 입력할 경우 에러가 발생하지 않는다.', (value) => {
    const [isValid, errorMessage] = validations.isValidInput(value);

    expect(isValid).toBe(true);
    expect(errorMessage).toBe('');
  });

  test.each(['1', 'abc1'])('영문자 외의 문자를 입력할 경우 에러가 발생한다.', (value) => {
    const [isValid, errorMessage] = validations.isValidInput(value);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe(ERROR_MESSAGE.ownerName.isNotAlphabetic);
  });
});
