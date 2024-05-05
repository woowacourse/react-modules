import { CardNumberErrorMessages } from './useCardNumber';
import { CardNumberValidationErrorMessage, CardNumbersValidationResult } from './useCardNumbers';

interface UseCardNumbersValidationErrorMessageProps {
  validationResult: CardNumbersValidationResult;
  errorMessages: CardNumberErrorMessages;
}
/**
 * 카드 번호에 대한 입력 필드의 유효성 검사 결과를 바탕으로 입력 필드륻에 대한 오류 메세지를 반환하는 훅 (입력 필드 key당 오류 메세지를 반환)
 */
export default function useCardNumbersValidationErrorMessage({
  validationResult,
  errorMessages,
}: UseCardNumbersValidationErrorMessageProps): CardNumberValidationErrorMessage {
  const createValidationErrorMessage = (): CardNumberValidationErrorMessage => {
    return validationResult.map(({ error }) => (error ? errorMessages[error] : null));
  };

  return createValidationErrorMessage();
}
