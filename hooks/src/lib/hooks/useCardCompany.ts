import { useState } from "react";

function useCardCompanyInput() {
  const [cardCompany, setCardCompany] = useState("");
  const [cardCompanyErrorState, setCardCompanyErrorState] = useState({
    isError: false,
    errorMessage: "",
  });

  const updateErrorState = (isValid: boolean) => {
    if (isValid) {
      setCardCompanyErrorState({
        isError: false,
        errorMessage: "",
      });
    } else {
      setCardCompanyErrorState({
        isError: true,
        errorMessage: "카드사를 선택해 주세요.",
      });
    }
  };

  const handleCardCompanyChange = (value: string) => {
    const isSelected = value !== "";

    updateErrorState(isSelected);
    setCardCompany(value);
  };

  return {
    cardCompany,
    cardCompanyErrorState,
    handleCardCompanyChange,
  };
}

export default useCardCompanyInput;
