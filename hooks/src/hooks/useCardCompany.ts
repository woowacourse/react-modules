import { ChangeEvent, useRef, MouseEvent } from "react";
import useRestrictedState from "./useRestrictedState";

const COMPANY_LIST = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
] as const;

interface CustomEventTarget extends EventTarget {
  value?: string;
}

interface CustomMouseEvent extends MouseEvent {
  target: CustomEventTarget;
}

const useCardCompany = (cardCompanyList: readonly string[] = COMPANY_LIST) => {
  const { valueState, errorState } = useRestrictedState();
  const { value: cardCompany, setValue: setCardCompany } = valueState;
  const { isError, errorMessage, setError } = errorState;

  const setCardCompanyWrapper = (value: string) => {
    if (cardCompanyList.includes(value)) {
      setCardCompany(value);
      return;
    }
    setError("잘못된 카드사를 입력했습니다.");
  };

  const cardCompanyInputRef = useRef<HTMLSelectElement>(null);

  const clickCardCompany = (event: ChangeEvent<HTMLSelectElement> | CustomMouseEvent) => {
    const { value } = event.target;
    if (!value) return;

    setCardCompanyWrapper(value);
    if (cardCompanyInputRef.current?.value) {
      cardCompanyInputRef.current.value = value;
    }

    cardCompanyInputRef.current?.blur();
  };

  return {
    cardCompany,
    errorState: {
      isError,
      errorMessage,
      setError,
      resetError: () => setError(undefined),
    },
    cardCompanyInputRef,
    clickCardCompany,
  };
};

export default useCardCompany;
