import { ERROR_MESSAGE } from './constants/errorMessage';

export function getFirstErrorMessage(
  errorResult: Record<string, boolean>,
  fieldKey: 'CVC' | 'NUMBER' | 'PASSWORD' | 'MONTH' | 'YEAR',
): string {
  const firstError = Object.entries(errorResult).find(([, isValid]) => !isValid);
  if (!firstError) return '';

  const [errorCode] = firstError;

  if (fieldKey === 'MONTH' || fieldKey === 'YEAR') {
    return (ERROR_MESSAGE.EXPIRATION[fieldKey] as Record<string, string>)[errorCode] ?? '';
  }

  return (ERROR_MESSAGE[fieldKey] as Record<string, string>)[errorCode] ?? '';
}
