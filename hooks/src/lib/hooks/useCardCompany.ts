import { ChangeEvent, useRef, useState, MouseEvent } from "react";

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
  value: string;
}

interface CustomMouseEvent extends MouseEvent<HTMLButtonElement> {
  target: CustomEventTarget;
}

const useCardCompany = (cardCompanyList: readonly string[] = COMPANY_LIST) => {
  const [cardCompany, setCardCompany] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const setError = (errorMessage: string | undefined) => {
    setErrorMessage(errorMessage);
    if (!errorMessage) {
      setIsError(false);
      return;
    }
    setIsError(true);
  };

  const setCardCompanyWrapper = (value: string) => {
    if (cardCompanyList.includes(value)) {
      setCardCompany(value);
      return;
    }
    setError("잘못된 카드사를 입력했습니다.");
  };

  const cardCompanyRef = useRef<HTMLSelectElement>(null);

  const clickCardCompany = (
    event: ChangeEvent<HTMLSelectElement> | CustomMouseEvent
  ) => {
    const { value } = event.target;
    setCardCompanyWrapper(value);
    cardCompanyRef.current?.blur();
  };

  return {
    cardCompany,
    errorState: {
      isError,
      errorMessage,
      setError,
      resetError: () => setError(undefined),
    },
    cardCompanyRef,
    clickCardCompany,
  };
};

export default useCardCompany;
