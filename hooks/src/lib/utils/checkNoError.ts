import { ExpirationDateErrors } from '../types';

const checkNoError = (
  errors: boolean | boolean[] | ExpirationDateErrors
): boolean => {
  if (Array.isArray(errors)) {
    return errors.every((error) => error === false);
  }

  if (typeof errors === 'object') {
    return Object.values(errors).every((error) => error === false);
  }

  return errors === false;
};

export default checkNoError;
