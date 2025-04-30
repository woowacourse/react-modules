const checkNoError = (errors: boolean | boolean[]) => {
  if (Array.isArray(errors)) return errors.every((error) => error === false);

  return errors === false;
};

export default checkNoError;
