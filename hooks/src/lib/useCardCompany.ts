import useInput, { ValidationType } from "./useInput";
import useValidation from "./useValidation";

const isValid = (value: string) => {
  return value !== "";
};

const useCardCompany = (initialValue = "") => {
  const inputValidations: ValidationType[] = [
    {
      validate: isValid,
      message: "카드사를 선택해주세요.",
    },
  ];

  const cardCompany = useInput({ initialValue, inputValidations });
  const isCardCompanyValid = useValidation([cardCompany]);

  return { cardCompany, isCardCompanyValid };
};

export default useCardCompany;
