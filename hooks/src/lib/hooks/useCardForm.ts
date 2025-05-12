import { useCallback, useState, FormEvent } from "react";
import useCardNumber from "./useCardNumber";
import useStrictCardNumber from "./useStrictCardNumber";
import useCVCNumber from "./useCVCNumber";
import useExpiryDateNumber from "./useExpiryDateNumber";
import usePasswordNumber from "./usePasswordNumber";
import useCardNetwork from "./useCardNetwork";
import useCardFormat, { UseCardFormatOptions } from "./useCardFormat";

// 카드 폼 입력 필드 타입
export interface CardFormValues {
  cardNumber: string;
  cvc: string;
  expiryDate: string;
  password: string;
}

// 폼 오류 메시지 타입
export interface CardFormErrors {
  cardNumber?: string;
  cvc?: string;
  expiryDate?: string;
  password?: string;
}

// 훅 옵션 타입
export interface UseCardFormOptions {
  formatOptions?: UseCardFormatOptions;
  onSubmit?: (values: CardFormValues) => void | Promise<void>;
}

// 훅 반환 타입
export interface UseCardFormReturn {
  // 폼 값
  values: CardFormValues;

  // 오류 메시지
  errors: CardFormErrors;

  // 유효성 상태
  isValid: boolean;
  isSubmitting: boolean;

  // 카드 관련 특수 데이터
  cardNetwork: string;
  formattedCardNumber: string;
  cardPlaceholder: string;
  cardNumberMaxLength: number;

  // 핸들러
  handleChange: {
    cardNumber: React.ChangeEventHandler<HTMLInputElement>;
    cvc: React.ChangeEventHandler<HTMLInputElement>;
    expiryDate: React.ChangeEventHandler<HTMLInputElement>;
    password: React.ChangeEventHandler<HTMLInputElement>;
  };

  // 폼 액션
  handleSubmit: (e: FormEvent) => Promise<void>;
  reset: () => void;
  setValues: (values: Partial<CardFormValues>) => void;
}

// 합성 이벤트 생성 유틸리티 함수
function createSyntheticEvent(
  value: string
): React.ChangeEvent<HTMLInputElement> {
  const target = { value } as HTMLInputElement;
  return { target } as React.ChangeEvent<HTMLInputElement>;
}

/**
 * 카드 폼 관리를 위한 통합 훅
 */
export default function useCardForm(
  options: UseCardFormOptions = {}
): UseCardFormReturn {
  const {
    formatOptions = { splitter: " ", placeholderChar: "X" },
    onSubmit = () => {},
  } = options;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const card = useCardNumber();
  const strictCard = useStrictCardNumber();
  const cvc = useCVCNumber();
  const expiry = useExpiryDateNumber();
  const password = usePasswordNumber();
  const network = useCardNetwork();
  const format = useCardFormat(formatOptions);

  const handleCardNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      format.onCardNumberChange(e);

      const digits = e.target.value.replace(/\D/g, "");

      const sanitizedEvent = createSyntheticEvent(digits);

      network.onCardNumberChange(sanitizedEvent);
      card.onCardNumberChange(sanitizedEvent);
      strictCard.onCardNumberChange(sanitizedEvent);
    },
    [format, network, card, strictCard]
  );

  // 현재 폼 값 계산
  const values: CardFormValues = {
    cardNumber: card.cardNumber,
    cvc: cvc.CVCNumber,
    expiryDate: expiry.expiryDateNumber,
    password: password.passwordNumber,
  };

  // 오류 메시지 계산
  const errors: CardFormErrors = {
    cardNumber: card.errorMessage,
    cvc: cvc.errorMessage,
    expiryDate: expiry.errorMessage,
    password: password.errorMessage,
  };

  // 전체 폼 유효성 계산
  const isValid =
    !errors.cardNumber &&
    !errors.cvc &&
    !errors.expiryDate &&
    !errors.password &&
    card.cardNumber.length !== 0 &&
    cvc.CVCNumber.length !== 0 &&
    expiry.expiryDateNumber.length !== 0 &&
    password.passwordNumber.length !== 0;
  // 폼 값 설정
  const setValues = useCallback(
    (newValues: Partial<CardFormValues>) => {
      if (newValues.cardNumber !== undefined) {
        const event = createSyntheticEvent(newValues.cardNumber);
        handleCardNumberChange(event);
      }

      if (newValues.cvc !== undefined) {
        const event = createSyntheticEvent(newValues.cvc);
        cvc.onCVCNumberChange(event);
      }

      if (newValues.expiryDate !== undefined) {
        const event = createSyntheticEvent(newValues.expiryDate);
        expiry.onExpiryDateNumberChange(event);
      }

      if (newValues.password !== undefined) {
        const event = createSyntheticEvent(newValues.password);
        password.onPasswordNumberChange(event);
      }
    },
    [handleCardNumberChange, cvc, expiry, password]
  );

  // 제출 핸들러
  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (!isValid) return;

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [isValid, values, onSubmit]
  );

  // 폼 초기화
  const reset = useCallback(() => {
    const emptyEvent = createSyntheticEvent("");

    handleCardNumberChange(emptyEvent);
    cvc.onCVCNumberChange(emptyEvent);
    expiry.onExpiryDateNumberChange(emptyEvent);
    password.onPasswordNumberChange(emptyEvent);
  }, [handleCardNumberChange, cvc, expiry, password]);

  return {
    // 폼 값
    values,

    // 오류 상태
    errors,

    // 유효성 상태
    isValid,

    // 제출 상태
    isSubmitting,

    // 카드 특수 데이터
    cardNetwork: network.cardNetwork,
    formattedCardNumber: format.formatted,
    cardPlaceholder: format.placeholder,
    cardNumberMaxLength: format.totalLength,

    // 입력 핸들러
    handleChange: {
      cardNumber: handleCardNumberChange,
      cvc: cvc.onCVCNumberChange,
      expiryDate: expiry.onExpiryDateNumberChange,
      password: password.onPasswordNumberChange,
    },

    // 폼 액션
    handleSubmit,
    reset,
    setValues,
  };
}
