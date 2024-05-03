import { ChangeEvent, useRef, useState } from "react";

const useCardCompany = (cardCompanyList: string[]) => {
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

  const clickCardCompany = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setCardCompanyWrapper(value);
    if (cardCompanyRef.current?.value) {
      cardCompanyRef.current.value = value;
    }
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
