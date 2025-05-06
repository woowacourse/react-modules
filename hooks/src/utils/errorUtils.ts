import { NO_ERROR } from '../lib/constants';

export function findFirstError(errorObj: Record<string, string>) {
  const firstError = Object.entries(errorObj).find(
    ([_, value]) => value !== NO_ERROR
  );
  return firstError ? { key: firstError[0], value: firstError[1] } : null;
}
