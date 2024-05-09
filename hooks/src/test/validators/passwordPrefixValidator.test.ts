import validator from '../../lib/shared/utils/validator/validator';
import { ERROR_MESSAGE } from '../../lib/shared/errorMessages';

describe('passwordPrefixValidator', () => {
  const validations = validator.passwordPrefix;

  test.each(['1', '11'])('숫자를 입력할 경우 에러가 발생하지 않는다.', (value) => {
    const [isValid, errorMessage] = validations.isValidInput(value);

    expect(isValid).toBe(true);
    expect(errorMessage).toBe('');
  });

  test.each(['a', '1a'])('문자를 입력할 경우 에러가 발생한다.', (value) => {
    const [isValid, errorMessage] = validations.isValidInput(value);

    expect(isValid).toBe(false);
    expect(errorMessage).toBe(ERROR_MESSAGE.passwordPrefix.isNotNumeric);
  });
});
