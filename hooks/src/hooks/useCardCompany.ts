import { ChangeEvent, useRef, MouseEvent, useState } from "react";
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

enum CardCompanyErrorType {
  CardCompanyError = "cardCompanyError",
}

const useCardCompany = (cardCompanyList: readonly string[] = COMPANY_LIST) => {
  const { valueState, errorType } = useRestrictedState();
  const { value: cardCompany, setValue: setCardCompany } = valueState;
  const [cardCompanyErrorType, setCardCompanyErrorType] = useState<CardCompanyErrorType>();

  const setCardCompanyWrapper = (value: string) => {
    if (cardCompanyList.includes(value)) {
      setCardCompany(value);
      setCardCompanyErrorType(undefined);
      return;
    }
    setCardCompanyErrorType(CardCompanyErrorType.CardCompanyError);
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
    errorType: errorType ?? cardCompanyErrorType,
    cardCompanyInputRef,
    clickCardCompany,
  };
};

export default useCardCompany;
